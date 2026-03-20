(async function () {
  const manifest = window.LAB_PAPERS_DATA;
  const bundle = window.LAB_PAPERS_BUNDLE;

  const state = {
    selectedCCF: "ALL",
    selectedCORE: "ALL",
    selectedTHCPL: "ALL",
    selectedField: "ALL",
    selectedDirection: "ALL",
    selectedYear: "ALL",
    selectedType: "ALL",
    yearSortOrder: "DESC",
    searchQuery: "",
  };

  const CCF_COLORS = {
    A: "#c52b2b",
    B: "#e88b25",
    C: "#159a53",
    N: "#94a3b8",
  };

  const CHIP_TONES = {
    ccf: {
      ALL: "chip--blue",
      A: "chip--red",
      B: "chip--orange",
      C: "chip--green",
      N: "chip--slate",
    },
    core: {
      ALL: "chip--blue",
      "A*": "chip--purple",
      A: "chip--indigo",
      B: "chip--sky",
      C: "chip--teal",
      N: "chip--slate",
    },
    thcpl: {
      ALL: "chip--blue",
      A: "chip--rose",
      B: "chip--amber",
      N: "chip--slate",
    },
    field: "chip--blue",
    direction: "chip--indigo",
    year: "chip--blue",
    type: "chip--indigo",
  };

  const BADGE_CLASSES = {
    ccf: {
      A: "badge--ccf-a",
      B: "badge--ccf-b",
      C: "badge--ccf-c",
      N: "badge--ccf-none",
    },
    core: {
      "A*": "badge--core-star",
      A: "badge--core-a",
      B: "badge--core-b",
      C: "badge--core-c",
      N: "badge--ccf-none",
    },
    thcpl: {
      A: "badge--thcpl-a",
      B: "badge--thcpl-b",
      N: "badge--ccf-none",
    },
  };

  const DIRECTION_BADGES = {
    "网络与算网融合": "badge--direction-blue",
    "隐私计算": "badge--direction-violet",
    "大模型推理与训练": "badge--direction-amber",
    "量子智能": "badge--direction-cyan",
    "医学智能": "badge--direction-rose",
    "脑机与生成式智能": "badge--direction-fuchsia",
    "AI for Science": "badge--direction-lime",
  };

  const elements = {
    summaryStats: document.getElementById("summaryStats"),
    yearChart: document.getElementById("yearChart"),
    ccfChart: document.getElementById("ccfChart"),
    searchInput: document.getElementById("searchInput"),
    filterRows: document.getElementById("filterRows"),
    clearFiltersBtn: document.getElementById("clearFiltersBtn"),
    resultsCount: document.getElementById("resultsCount"),
    activeSummary: document.getElementById("activeSummary"),
    sortControls: document.getElementById("sortControls"),
    papersList: document.getElementById("papersList"),
  };

  let dataset = null;
  let papers = [];
  let years = [];
  let mainEventsBound = false;

  try {
    if (!bundle || !Array.isArray(bundle.papers)) {
      throw new Error("papers-data.js format is invalid");
    }

    applyDataset(createBundledDataset(manifest, bundle.papers));
  } catch (error) {
    console.error(error);
    renderFatalState(error);
  }

  function applyDataset(nextDataset) {
    dataset = enrichDataset(nextDataset);
    papers = dataset.papers.slice();
    years = Array.from(new Set(papers.map(function (paper) { return paper.year; }))).sort(function (left, right) {
      return right - left;
    });

    if (!mainEventsBound) {
      bindMainEvents();
      mainEventsBound = true;
    }

    renderStats();
    renderFilters();
    renderResults();
  }

  function bindMainEvents() {
    elements.searchInput.addEventListener("input", function (event) {
      state.searchQuery = event.target.value;
      renderResults();
    });

    elements.filterRows.addEventListener("click", function (event) {
      const button = event.target.closest("[data-filter]");

      if (!button) {
        return;
      }

      const key = button.dataset.filter;
      const rawValue = button.dataset.value;

      if (!key) {
        return;
      }

      if (key === "selectedYear") {
        state.selectedYear = rawValue === "ALL" ? "ALL" : Number(rawValue);
      } else {
        state[key] = rawValue;
      }

      renderFilters();
      renderResults();
    });

    elements.clearFiltersBtn.addEventListener("click", function () {
      resetState();
      renderFilters();
      renderResults();
    });

    elements.sortControls.addEventListener("click", function (event) {
      const button = event.target.closest("[data-sort-order]");

      if (!button) {
        return;
      }

      state.yearSortOrder = button.dataset.sortOrder === "ASC" ? "ASC" : "DESC";
      renderSortControls();
      renderResults();
    });

    elements.papersList.addEventListener("error", function (event) {
      const image = event.target;

      if (!(image instanceof HTMLImageElement)) {
        return;
      }

      const figure = image.closest(".paper-card__figure");
      const media = figure ? figure.querySelector(".paper-card__figure-media") : null;
      const figureFile = figure ? figure.dataset.figureFile : "";

      if (!figure || !media || figure.classList.contains("is-missing")) {
        return;
      }

      figure.classList.add("is-missing");
      media.innerHTML =
        '<div class="paper-card__figure-placeholder">' +
        "<strong>本地 PNG 未找到</strong>" +
        "</div>";
    }, true);
  }

  function resetState() {
    state.selectedCCF = "ALL";
    state.selectedCORE = "ALL";
    state.selectedTHCPL = "ALL";
    state.selectedField = "ALL";
    state.selectedDirection = "ALL";
    state.selectedYear = "ALL";
    state.selectedType = "ALL";
    state.searchQuery = "";
    elements.searchInput.value = "";
  }

  function renderStats() {
    const totalCount = papers.length;
    const ccfACount = papers.filter(function (paper) { return paper.ccf === "A"; }).length;
    const coreACount = papers.filter(function (paper) { return paper.core === "A*" || paper.core === "A"; }).length;
    const thcplACount = papers.filter(function (paper) { return paper.thcpl === "A"; }).length;
    const journalCount = papers.filter(function (paper) { return paper.type === "journal"; }).length;

    const cards = [
      { label: "总论文数", value: totalCount, tone: "blue" },
      { label: "CCF A 类", value: ccfACount, tone: "red" },
      { label: "CORE A / A*", value: coreACount, tone: "gold" },
      { label: "THCPL A 类", value: thcplACount, tone: "rose" },
      { label: "期刊论文", value: journalCount, tone: "green" },
    ];

    elements.summaryStats.innerHTML = cards
      .map(function (card) {
        return (
          '<article class="stat-card stat-card--' +
          card.tone +
          '">' +
          '<span class="stat-card__value">' +
          card.value +
          "</span>" +
          '<span class="stat-card__label">' +
          escapeHtml(card.label) +
          "</span>" +
          "</article>"
        );
      })
      .join("");

    renderYearChart();
    renderCCFChart();
  }

  function renderYearChart() {
    const yearMap = new Map();

    papers.forEach(function (paper) {
      yearMap.set(paper.year, (yearMap.get(paper.year) || 0) + 1);
    });

    const chartData = Array.from(yearMap.entries())
      .sort(function (left, right) {
        return left[0] - right[0];
      })
      .map(function (entry) {
        return { year: entry[0], count: entry[1] };
      });

    const maxCount = Math.max.apply(
      null,
      chartData.map(function (item) {
        return item.count;
      }),
    );

    const yearRow = chartData
      .map(function (item) {
        return '<td class="year-chart__year-cell">' + item.year + "</td>";
      })
      .join("");

    const barRow = chartData
      .map(function (item) {
        const height = maxCount ? Math.max(10, Math.round((item.count / maxCount) * 100)) : 0;

        return (
          '<td class="year-chart__bar-cell">' +
          '<div class="year-chart__bar-track">' +
          '<div class="year-chart__bar-fill" style="--bar-height:' +
          height +
          '%;"></div>' +
          "</div>" +
          "</td>"
        );
      })
      .join("");

    const countRow = chartData
      .map(function (item) {
        return '<td class="year-chart__count">' + item.count + "</td>";
      })
      .join("");

    elements.yearChart.innerHTML =
      '<table class="year-chart__table">' +
      "<tbody>" +
      '<tr><th class="year-chart__label" scope="row">年份</th>' +
      yearRow +
      "</tr>" +
      '<tr><th class="year-chart__label" scope="row">趋势</th>' +
      barRow +
      "</tr>" +
      '<tr><th class="year-chart__label" scope="row">篇数</th>' +
      countRow +
      "</tr>" +
      "</tbody>" +
      "</table>";
  }

  function renderCCFChart() {
    const order = ["A", "B", "C", "N"];
    const totals = { A: 0, B: 0, C: 0, N: 0 };

    papers.forEach(function (paper) {
      totals[paper.ccf] = (totals[paper.ccf] || 0) + 1;
    });

    const totalCount = papers.length;
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    const segments = order
      .map(function (grade) {
        const value = totals[grade];
        const length = totalCount ? (value / totalCount) * circumference : 0;
        const circle =
          '<circle class="ccf-chart__segment" cx="70" cy="70" r="' +
          radius +
          '" stroke="' +
          CCF_COLORS[grade] +
          '" stroke-dasharray="' +
          length.toFixed(3) +
          " " +
          circumference.toFixed(3) +
          '" stroke-dashoffset="' +
          (-offset).toFixed(3) +
          '"></circle>';

        offset += length;
        return circle;
      })
      .join("");

    const legend = order
      .map(function (grade) {
        return (
          '<div class="legend-item">' +
          '<span class="legend-item__dot" style="background:' +
          CCF_COLORS[grade] +
          ';"></span>' +
          '<span class="legend-item__name">' +
          escapeHtml(grade === "N" ? "非 CCF" : "CCF " + grade) +
          "</span>" +
          '<span class="legend-item__value">' +
          totals[grade] +
          "</span>" +
          "</div>"
        );
      })
      .join("");

    elements.ccfChart.innerHTML =
      '<div class="ccf-chart__wrap">' +
      '<div class="ccf-chart__donut">' +
      '<svg viewBox="0 0 140 140" role="img" aria-hidden="true">' +
      '<circle class="ccf-chart__ring-bg" cx="70" cy="70" r="' +
      radius +
      '"></circle>' +
      segments +
      "</svg>" +
      '<div class="ccf-chart__center"><div><strong>' +
      totalCount +
      '</strong><span>篇论文</span></div></div>' +
      "</div>" +
      '<div class="ccf-chart__legend"><div class="legend-list">' +
      legend +
      "</div></div>" +
      "</div>";
  }

  function renderFilters() {
    elements.filterRows.innerHTML = [
      createFilterRow(
        "CCF 等级",
        createOptionButtons(
          ["ALL", "A", "B", "C", "N"],
          "selectedCCF",
          function (value) {
            if (value === "ALL") {
              return "全部";
            }

            return value === "N" ? "非 CCF" : "CCF " + value;
          },
          function (value) {
            return value === "ALL" ? papers.length : papers.filter(function (paper) { return paper.ccf === value; }).length;
          },
          state.selectedCCF,
          function (value) {
            return CHIP_TONES.ccf[value];
          },
        ),
      ),
      createFilterRow(
        "CORE 等级",
        createOptionButtons(
          ["ALL", "A*", "A", "B", "C", "N"],
          "selectedCORE",
          function (value) {
            if (value === "ALL") {
              return "全部";
            }

            return value === "N" ? "非 CORE" : "CORE " + value;
          },
          function (value) {
            return value === "ALL" ? papers.length : papers.filter(function (paper) { return paper.core === value; }).length;
          },
          state.selectedCORE,
          function (value) {
            return CHIP_TONES.core[value];
          },
        ),
      ),
      createFilterRow(
        "THCPL 等级",
        createOptionButtons(
          ["ALL", "A", "B", "N"],
          "selectedTHCPL",
          function (value) {
            if (value === "ALL") {
              return "全部";
            }

            return value === "N" ? "非 THCPL" : "THCPL " + value;
          },
          function (value) {
            return value === "ALL" ? papers.length : papers.filter(function (paper) { return paper.thcpl === value; }).length;
          },
          state.selectedTHCPL,
          function (value) {
            return CHIP_TONES.thcpl[value];
          },
        ),
      ),
      createFilterRow(
        "研究领域",
        createOptionButtons(
          ["ALL"].concat(dataset.ccfFields),
          "selectedField",
          function (value) {
            return value === "ALL" ? "全部" : dataset.ccfFieldAbbr[value];
          },
          null,
          state.selectedField,
          function () {
            return CHIP_TONES.field;
          },
        ),
      ),
      createFilterRow(
        "研究方向",
        createOptionButtons(
          ["ALL"].concat(dataset.researchDirections),
          "selectedDirection",
          function (value) {
            return value === "ALL" ? "全部" : value;
          },
          null,
          state.selectedDirection,
          function () {
            return CHIP_TONES.direction;
          },
        ),
      ),
      createFilterRow(
        "年份 / 类型",
        createOptionButtons(
          ["ALL"].concat(years),
          "selectedYear",
          function (value) {
            return value === "ALL" ? "全部年份" : String(value);
          },
          null,
          state.selectedYear,
          function () {
            return CHIP_TONES.year;
          },
        ) +
          createOptionButtons(
            ["ALL", "journal", "conference"],
            "selectedType",
            function (value) {
              if (value === "ALL") {
                return "全部类型";
              }

              return value === "journal" ? "期刊" : "会议";
            },
            null,
            state.selectedType,
            function () {
              return CHIP_TONES.type;
            },
          ),
      ),
    ].join("");
  }

  function createFilterRow(label, chips) {
    return (
      '<div class="filter-row">' +
      '<div class="filter-row__label">' +
      escapeHtml(label) +
      "</div>" +
      '<div class="filter-row__chips">' +
      chips +
      "</div>" +
      "</div>"
    );
  }

  function createOptionButtons(options, key, labelResolver, countResolver, activeValue, toneResolver) {
    return options
      .map(function (value) {
        const isActive = String(activeValue) === String(value);
        const count = typeof countResolver === "function" ? countResolver(value) : null;
        const toneClass = toneResolver(value);

        return (
          '<button type="button" class="chip ' +
          toneClass +
          (isActive ? " is-active" : "") +
          '" data-filter="' +
          escapeAttribute(key) +
          '" data-value="' +
          escapeAttribute(String(value)) +
          '">' +
          '<span>' +
          escapeHtml(labelResolver(value)) +
          "</span>" +
          (count === null ? "" : '<span class="chip__count">(' + count + ")</span>") +
          "</button>"
        );
      })
      .join("");
  }

  function renderResults() {
    const filteredPapers = getFilteredPapers();
    const hasCriteria = hasActiveCriteria();

    elements.resultsCount.innerHTML =
      '显示 <strong>' + filteredPapers.length + "</strong> / " + papers.length + " 篇论文";
    elements.activeSummary.textContent = buildActiveSummary(filteredPapers.length);
    elements.clearFiltersBtn.hidden = !hasCriteria;
    renderSortControls();

    if (!papers.length) {
      elements.papersList.innerHTML =
        '<div class="empty-state">' +
        "<h3>论文数据未加载成功</h3>" +
        "<p>请检查 data.js、datas 目录，以及是否通过本地 HTTP 服务打开了页面。</p>" +
        "</div>";
      return;
    }

    if (!filteredPapers.length) {
      elements.papersList.innerHTML =
        '<div class="empty-state">' +
        "<h3>没有找到符合条件的论文</h3>" +
        "<p>可以尝试放宽筛选条件，或点击上方“清除筛选”恢复全部论文。</p>" +
        "</div>";
      return;
    }

    elements.papersList.innerHTML = filteredPapers
      .map(function (paper) {
        return renderPaperCard(paper);
      })
      .join("");
  }

  function getFilteredPapers() {
    const query = state.searchQuery.trim().toLowerCase();

    return papers.filter(function (paper) {
      if (state.selectedCCF !== "ALL" && paper.ccf !== state.selectedCCF) {
        return false;
      }

      if (state.selectedCORE !== "ALL" && paper.core !== state.selectedCORE) {
        return false;
      }

      if (state.selectedTHCPL !== "ALL" && paper.thcpl !== state.selectedTHCPL) {
        return false;
      }

      if (state.selectedField !== "ALL" && !paper.fields.includes(state.selectedField)) {
        return false;
      }

      if (state.selectedDirection !== "ALL" && !paper.researchDirections.includes(state.selectedDirection)) {
        return false;
      }

      if (state.selectedYear !== "ALL" && paper.year !== state.selectedYear) {
        return false;
      }

      if (state.selectedType !== "ALL" && paper.type !== state.selectedType) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        paper.title,
        paper.authors,
        paper.venue,
        paper.abstract,
        paper.researchDirections.join(" "),
      ].some(function (value) {
        return String(value).toLowerCase().includes(query);
      });
    }).sort(function (left, right) {
      if (left.year !== right.year) {
        return state.yearSortOrder === "ASC" ? left.year - right.year : right.year - left.year;
      }

      return left.title.localeCompare(right.title);
    });
  }

  function hasActiveCriteria() {
    return (
      state.selectedCCF !== "ALL" ||
      state.selectedCORE !== "ALL" ||
      state.selectedTHCPL !== "ALL" ||
      state.selectedField !== "ALL" ||
      state.selectedDirection !== "ALL" ||
      state.selectedYear !== "ALL" ||
      state.selectedType !== "ALL" ||
      state.searchQuery.trim() !== ""
    );
  }

  function buildActiveSummary(filteredCount) {
    const parts = [];
    let summary = "";

    if (state.selectedCCF !== "ALL") {
      parts.push(state.selectedCCF === "N" ? "非 CCF" : "CCF " + state.selectedCCF);
    }

    if (state.selectedCORE !== "ALL") {
      parts.push(state.selectedCORE === "N" ? "非 CORE" : "CORE " + state.selectedCORE);
    }

    if (state.selectedTHCPL !== "ALL") {
      parts.push(state.selectedTHCPL === "N" ? "非 THCPL" : "THCPL " + state.selectedTHCPL);
    }

    if (state.selectedField !== "ALL") {
      parts.push(dataset.ccfFieldAbbr[state.selectedField]);
    }

    if (state.selectedDirection !== "ALL") {
      parts.push(state.selectedDirection);
    }

    if (state.selectedYear !== "ALL") {
      parts.push(String(state.selectedYear));
    }

    if (state.selectedType !== "ALL") {
      parts.push(state.selectedType === "journal" ? "期刊" : "会议");
    }

    if (state.searchQuery.trim()) {
      parts.push('搜索 "' + state.searchQuery.trim() + '"');
    }

    if (!parts.length) {
      summary = "当前展示全部论文";
    } else {
      summary = "当前条件：" + parts.join(" · ");
    }

    summary += " · 命中 " + filteredCount + " 篇";
    summary += state.yearSortOrder === "ASC" ? " · 年份升序" : " · 年份降序";

    if (dataset.failedFiles.length) {
      summary += " · 未加载 " + dataset.failedFiles.length + " 篇数据";
    }

    return summary;
  }

  function renderPaperCard(paper) {
    const badges = [];
    const abstractText = paper.abstract.trim() || "暂无摘要";
    const figureFile = paper.id + ".png";
    const abstractClass = paper.abstract.trim() ? "paper-abstract" : "paper-abstract is-placeholder";

    badges.push(renderBadge("CCF " + paper.ccf, BADGE_CLASSES.ccf[paper.ccf] || "badge--ccf-none"));

    if (paper.core && paper.core !== "N") {
      badges.push(renderBadge("CORE " + paper.core, BADGE_CLASSES.core[paper.core] || "badge--ccf-none"));
    }

    if (paper.thcpl && paper.thcpl !== "N") {
      badges.push(renderBadge("THCPL " + paper.thcpl, BADGE_CLASSES.thcpl[paper.thcpl] || "badge--ccf-none"));
    }

    badges.push(renderBadge(paper.type === "journal" ? "期刊" : "会议", "badge--muted"));

    paper.researchDirections.forEach(function (direction) {
      badges.push(renderBadge(direction, DIRECTION_BADGES[direction] || "badge--soft"));
    });

    if (paper.accepted) {
      badges.push(renderBadge("已录用", "badge--accepted"));
    }

    const metaItems = [
      '<span class="paper-card__venue">' + escapeHtml(paper.venue) + "</span>",
      "<span>" + paper.year + "</span>",
    ]
      .concat(
        paper.fields.map(function (field) {
          return '<span class="field-tag">' + escapeHtml(dataset.ccfFieldAbbr[field] || field) + "</span>";
        }),
      )
      .concat(
        [paper.link ? { label: "原文链接", href: paper.link } : null, paper.pdf ? { label: "PDF", href: paper.pdf } : null, paper.doi ? { label: "DOI", href: paper.doi } : null]
          .filter(Boolean)
          .map(function (link) {
            return '<a class="paper-card__meta-link" href="' + escapeAttribute(link.href) + '" target="_blank" rel="noreferrer">' + escapeHtml(link.label) + "</a>";
          }),
      )
      .join("");

    return (
      '<article class="paper-card">' +
      '<div class="paper-card__body">' +
      '<div class="paper-card__badges">' +
      badges.join("") +
      "</div>" +
      '<h3 class="paper-card__title">' +
      escapeHtml(paper.title) +
      "</h3>" +
      '<p class="paper-card__authors">' +
      escapeHtml(paper.authors) +
      "</p>" +
      '<div class="paper-card__meta">' +
      metaItems +
      "</div>" +
      '<div class="paper-card__content">' +
      '<section class="paper-card__panel paper-card__panel--abstract">' +
      '<div class="paper-card__panel-head"><span>摘要</span></div>' +
      '<p class="' +
      abstractClass +
      '">' +
      escapeHtml(abstractText) +
      "</p>" +
      "</section>" +
      '<figure class="paper-card__panel paper-card__figure" data-figure-file="' +
      escapeAttribute(figureFile) +
      '">' +
      '<div class="paper-card__panel-head"><span>图片</span></div>' +
      '<div class="paper-card__figure-media">' +
      '<img src="' +
      escapeAttribute(paper.figurePath) +
      '" alt="' +
      escapeAttribute(paper.title + " 本地图") +
      '" loading="lazy">' +
      "</div>" +
      "</figure>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderBadge(label, className) {
    return '<span class="badge ' + className + '">' + escapeHtml(label) + "</span>";
  }

  function renderSortControls() {
    if (!elements.sortControls) {
      return;
    }

    const buttons = elements.sortControls.querySelectorAll("[data-sort-order]");

    buttons.forEach(function (button) {
      const isActive = button.dataset.sortOrder === state.yearSortOrder;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  async function loadDataset(sourceManifest) {
    if (!sourceManifest || !Array.isArray(sourceManifest.paperFiles)) {
      throw new Error("LAB_PAPERS_DATA.paperFiles is missing. Please check data.js.");
    }

    const results = await Promise.allSettled(
      sourceManifest.paperFiles.map(function (fileId) {
        return loadPaperFile(fileId);
      }),
    );

    const loadedPapers = [];
    const failedFiles = [];

    results.forEach(function (result, index) {
      if (result.status === "fulfilled") {
        loadedPapers.push(result.value);
      } else {
        failedFiles.push(sourceManifest.paperFiles[index]);
      }
    });

    if (!loadedPapers.length && window.location.protocol === "file:") {
      const localFileError = new Error("浏览器在 file:// 模式下拦截了 datas/*.json 的自动读取。");
      localFileError.code = "LOCAL_JSON_BLOCKED";
      throw localFileError;
    }

    return {
      ccfFields: sourceManifest.ccfFields || [],
      researchDirections: sourceManifest.researchDirections || [],
      ccfFieldAbbr: sourceManifest.ccfFieldAbbr || {},
      failedFiles: failedFiles,
      papers: loadedPapers,
    };
  }

  function createBundledDataset(sourceManifest, bundledPapers) {
    return {
      ccfFields: sourceManifest.ccfFields || [],
      researchDirections: sourceManifest.researchDirections || [],
      ccfFieldAbbr: sourceManifest.ccfFieldAbbr || {},
      failedFiles: [],
      papers: bundledPapers.map(function (paper) {
        return normalizePaper(paper, paper.id || paper.title || "paper");
      }),
    };
  }

  function enrichDataset(sourceDataset) {
    const directions = [];
    const seenDirections = new Set();

    (sourceDataset.researchDirections || []).forEach(function (direction) {
      if (!direction || seenDirections.has(direction)) {
        return;
      }

      seenDirections.add(direction);
      directions.push(direction);
    });

    sourceDataset.papers.forEach(function (paper) {
      paper.researchDirections.forEach(function (direction) {
        if (!direction || seenDirections.has(direction)) {
          return;
        }

        seenDirections.add(direction);
        directions.push(direction);
      });
    });

    return {
      ccfFields: sourceDataset.ccfFields || [],
      researchDirections: directions,
      ccfFieldAbbr: sourceDataset.ccfFieldAbbr || {},
      failedFiles: sourceDataset.failedFiles || [],
      papers: sourceDataset.papers || [],
    };
  }

  async function loadPaperFile(fileId) {
    const response = await fetch("./datas/" + encodeURIComponent(fileId) + ".json", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to load " + fileId + ".json");
    }

    const paper = await response.json();

    return normalizePaper(paper, fileId);
  }

  function normalizePaper(paper, fileId) {
    const researchDirections = normalizeResearchDirections(paper);

    return {
      id: paper.id || fileId,
      title: paper.title || fileId,
      authors: paper.authors || "",
      year: Number(paper.year) || 0,
      venue: paper.venue || "",
      ccf: normalizeRank(paper.ccf, "N"),
      core: normalizeRank(paper.core, "N"),
      thcpl: normalizeRank(paper.thcpl, "N"),
      type: paper.type === "journal" ? "journal" : "conference",
      accepted: Boolean(paper.accepted),
      fields: Array.isArray(paper.fields) ? paper.fields : [],
      researchDirections: researchDirections,
      abstract: paper.abstract || "",
      link: paper.link || "",
      pdf: paper.pdf || "",
      doi: paper.doi || "",
      figurePath: "./figures/" + fileId + ".png",
    };
  }

  function normalizeResearchDirections(paper) {
    const directions = Array.isArray(paper.researchDirections)
      ? paper.researchDirections
        .map(function (direction) {
          return String(direction).trim();
        })
        .filter(Boolean)
      : typeof paper.researchDirection === "string" && paper.researchDirection.trim()
        ? [paper.researchDirection.trim()]
        : [];

    return directions.filter(function (direction, index) {
      return directions.indexOf(direction) === index;
    });
  }

  function normalizeRank(value, fallback) {
    const normalized = String(value || fallback).trim();

    if (!normalized || normalized === "None") {
      return fallback;
    }

    return normalized;
  }

  function renderFatalState(error) {
    const message = error && error.message ? error.message : "页面初始化失败。";
    elements.resultsCount.textContent = "数据加载失败";
    elements.activeSummary.textContent = message;

    elements.papersList.innerHTML =
      '<div class="empty-state">' +
      "<h3>页面初始化失败</h3>" +
      "<p>" +
      escapeHtml(message) +
      "</p>" +
      "<p>请确认 papers-data.js 已生成且可正常加载。</p>" +
      "</div>";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }
})();
