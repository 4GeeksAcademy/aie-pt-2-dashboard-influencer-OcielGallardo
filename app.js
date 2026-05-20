const campaigns = [
  {
    date: "2026-04-02",
    platform: "Instagram",
    product: "Serum Vitamina C",
    price: 24,
    impressions: 104000,
    reach: 52000,
    clicks: 6240,
    leads: 1260,
    qualifiedLeads: 860,
    conversions: 702,
    subscriptions: 240,
    churned: 22,
    completions: 830,
    processStarts: 1120,
    revenue: 8424,
    cost: 2100,
    engagements: 4520,
    likes: 2780,
    comments: 760,
    shares: 510,
    saves: 470,
    posts: 11,
    stories: 26,
    reels: 12,
    videos: 0,
    attendance: 910,
    passCount: 620,
    nps: 58,
    csat: 82,
    avgHoursToClose: 36,
  },
  {
    date: "2026-04-08",
    platform: "Instagram",
    product: "Leggings Fit Pro",
    price: 39,
    impressions: 92000,
    reach: 48000,
    clicks: 5420,
    leads: 1100,
    qualifiedLeads: 700,
    conversions: 530,
    subscriptions: 165,
    churned: 18,
    completions: 598,
    processStarts: 980,
    revenue: 6890,
    cost: 2300,
    engagements: 3960,
    likes: 2510,
    comments: 530,
    shares: 480,
    saves: 440,
    posts: 8,
    stories: 21,
    reels: 9,
    videos: 0,
    attendance: 760,
    passCount: 470,
    nps: 54,
    csat: 78,
    avgHoursToClose: 41,
  },
  {
    date: "2026-04-11",
    platform: "TikTok",
    product: "Serum Vitamina C",
    price: 24,
    impressions: 150000,
    reach: 76000,
    clicks: 9830,
    leads: 1800,
    qualifiedLeads: 1240,
    conversions: 915,
    subscriptions: 330,
    churned: 40,
    completions: 1050,
    processStarts: 1660,
    revenue: 10980,
    cost: 3200,
    engagements: 6840,
    likes: 4310,
    comments: 910,
    shares: 890,
    saves: 730,
    posts: 16,
    stories: 0,
    reels: 0,
    videos: 15,
    attendance: 1280,
    passCount: 890,
    nps: 61,
    csat: 84,
    avgHoursToClose: 30,
  },
  {
    date: "2026-04-14",
    platform: "TikTok",
    product: "Auriculares Pulse",
    price: 44,
    impressions: 161000,
    reach: 84000,
    clicks: 9240,
    leads: 1700,
    qualifiedLeads: 1120,
    conversions: 760,
    subscriptions: 280,
    churned: 42,
    completions: 910,
    processStarts: 1580,
    revenue: 9120,
    cost: 3500,
    engagements: 7590,
    likes: 4680,
    comments: 840,
    shares: 1220,
    saves: 850,
    posts: 14,
    stories: 0,
    reels: 0,
    videos: 13,
    attendance: 1200,
    passCount: 790,
    nps: 48,
    csat: 75,
    avgHoursToClose: 46,
  },
  {
    date: "2026-04-20",
    platform: "YouTube",
    product: "Leggings Fit Pro",
    price: 39,
    impressions: 86000,
    reach: 39000,
    clicks: 5160,
    leads: 1010,
    qualifiedLeads: 760,
    conversions: 610,
    subscriptions: 270,
    churned: 20,
    completions: 700,
    processStarts: 980,
    revenue: 7930,
    cost: 1950,
    engagements: 2870,
    likes: 1540,
    comments: 520,
    shares: 410,
    saves: 400,
    posts: 4,
    stories: 0,
    reels: 0,
    videos: 8,
    attendance: 840,
    passCount: 610,
    nps: 66,
    csat: 87,
    avgHoursToClose: 33,
  },
  {
    date: "2026-04-24",
    platform: "YouTube",
    product: "Auriculares Pulse",
    price: 44,
    impressions: 93000,
    reach: 43000,
    clicks: 5470,
    leads: 970,
    qualifiedLeads: 640,
    conversions: 655,
    subscriptions: 240,
    churned: 25,
    completions: 730,
    processStarts: 1020,
    revenue: 7860,
    cost: 2400,
    engagements: 3010,
    likes: 1620,
    comments: 560,
    shares: 450,
    saves: 380,
    posts: 5,
    stories: 0,
    reels: 0,
    videos: 9,
    attendance: 790,
    passCount: 520,
    nps: 57,
    csat: 80,
    avgHoursToClose: 40,
  },
  {
    date: "2026-04-27",
    platform: "TikTok",
    product: "Proteina Active+",
    price: 35,
    impressions: 138000,
    reach: 68000,
    clicks: 8650,
    leads: 1600,
    qualifiedLeads: 1150,
    conversions: 810,
    subscriptions: 315,
    churned: 29,
    completions: 950,
    processStarts: 1430,
    revenue: 10530,
    cost: 2900,
    engagements: 5880,
    likes: 3620,
    comments: 760,
    shares: 840,
    saves: 660,
    posts: 13,
    stories: 0,
    reels: 0,
    videos: 12,
    attendance: 1120,
    passCount: 790,
    nps: 63,
    csat: 85,
    avgHoursToClose: 28,
  },
  {
    date: "2026-05-01",
    platform: "Instagram",
    product: "Proteina Active+",
    price: 35,
    impressions: 79000,
    reach: 41000,
    clicks: 4360,
    leads: 860,
    qualifiedLeads: 590,
    conversions: 470,
    subscriptions: 175,
    churned: 16,
    completions: 560,
    processStarts: 820,
    revenue: 6110,
    cost: 1750,
    engagements: 3320,
    likes: 2040,
    comments: 510,
    shares: 420,
    saves: 350,
    posts: 9,
    stories: 20,
    reels: 8,
    videos: 0,
    attendance: 670,
    passCount: 450,
    nps: 55,
    csat: 79,
    avgHoursToClose: 37,
  },
];

const formatterCurrency = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const formatterNumber = new Intl.NumberFormat("es-ES");

const kpiGrid = document.getElementById("kpiGrid");
const campaignBody = document.getElementById("campaignBody");
const productTableBody = document.getElementById("productTableBody");
const platformTableBody = document.getElementById("platformTableBody");
const alertsList = document.getElementById("alertsList");
const topsList = document.getElementById("topsList");
const opportunitiesList = document.getElementById("opportunitiesList");

const platformFilter = document.getElementById("platformFilter");
const productFilter = document.getElementById("productFilter");
const topTypeFilter = document.getElementById("topTypeFilter");
const topMetricFilter = document.getElementById("topMetricFilter");
const themeToggle = document.getElementById("themeToggle");

const listProducts = [...new Set(campaigns.map((item) => item.product))];
const listPlatforms = [...new Set(campaigns.map((item) => item.platform))];

listPlatforms.forEach((platform) => {
  platformFilter.insertAdjacentHTML(
    "beforeend",
    `<option value="${platform}">${platform}</option>`
  );
});

listProducts.forEach((product) => {
  productFilter.insertAdjacentHTML(
    "beforeend",
    `<option value="${product}">${product}</option>`
  );
});

function sumBy(data, key) {
  return data.reduce((acc, row) => acc + row[key], 0);
}

function avgBy(data, key) {
  return data.length === 0 ? 0 : sumBy(data, key) / data.length;
}

function groupBy(data, key) {
  return data.reduce((acc, row) => {
    const group = row[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(row);
    return acc;
  }, {});
}

function asPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function asRatio(value) {
  return `${value.toFixed(2)}x`;
}

function getRoi(revenue, cost) {
  return cost === 0 ? 0 : revenue / cost;
}

function getRate(numerator, denominator) {
  return denominator === 0 ? 0 : numerator / denominator;
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("dashboard-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "Modo: Oscuro" : "Modo: Dia";
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("dashboard-theme", nextTheme);
  applyTheme(nextTheme);
}

function asDate(value) {
  return new Date(value).toLocaleDateString("es-ES");
}

function asPerformanceTag(roi, conversionRate) {
  if (roi >= 3 && conversionRate >= 0.01) {
    return "Alto";
  }
  if (roi >= 2) {
    return "Medio";
  }
  return "Bajo";
}

function renderBars(containerId, rows, valueFormatter) {
  const container = document.getElementById(containerId);
  if (rows.length === 0) {
    container.innerHTML = "<p>Sin datos para este filtro.</p>";
    return;
  }

  const maxValue = Math.max(...rows.map((row) => row.value), 1);

  container.innerHTML = rows
    .map((row) => {
      const width = (row.value / maxValue) * 100;
      const detail = row.detail
        ? `<span class="badge">${row.detail}</span>`
        : "";
      return `
        <div class="bar-row">
          <span class="bar-label">${row.label}${detail}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
          <span class="bar-value">${valueFormatter(row.value)}</span>
        </div>
      `;
    })
    .join("");
}

function getFilteredCampaigns() {
  const selectedPlatform = platformFilter.value;
  const selectedProduct = productFilter.value;

  return campaigns.filter((row) => {
    const platformOk = selectedPlatform === "all" || row.platform === selectedPlatform;
    const productOk = selectedProduct === "all" || row.product === selectedProduct;
    return platformOk && productOk;
  });
}

function renderKpiBlock(filtered) {
  const volumeSales = sumBy(filtered, "conversions");
  const volumeSubscriptions = sumBy(filtered, "subscriptions");
  const volumeActiveUsers = sumBy(filtered, "qualifiedLeads");
  const volumeImpressions = sumBy(filtered, "impressions");

  const revenue = sumBy(filtered, "revenue");
  const mrr = sumBy(filtered, "subscriptions") * 12;
  const averagePrice = getRate(revenue, Math.max(volumeSales, 1));

  const interactions = sumBy(filtered, "engagements");
  const engagementRate = getRate(interactions, sumBy(filtered, "reach"));
  const conversionRate = getRate(volumeSales, sumBy(filtered, "reach"));

  const churnRate = getRate(sumBy(filtered, "churned"), Math.max(sumBy(filtered, "subscriptions"), 1));
  const permanence = avgBy(filtered, "avgHoursToClose");
  const completionRate = getRate(sumBy(filtered, "completions"), sumBy(filtered, "processStarts"));

  const totalConversions = volumeSales;
  const ctr = getRate(sumBy(filtered, "clicks"), sumBy(filtered, "impressions"));

  const nps = avgBy(filtered, "nps");
  const csat = avgBy(filtered, "csat") / 100;

  const costPerResult = getRate(sumBy(filtered, "cost"), Math.max(totalConversions, 1));
  const margin = getRate(revenue - sumBy(filtered, "cost"), Math.max(revenue, 1));
  const times = avgBy(filtered, "avgHoursToClose");

  const kpis = [
    { label: "Volumen · Ventas", value: formatterNumber.format(volumeSales) },
    { label: "Volumen · Inscripciones", value: formatterNumber.format(volumeSubscriptions) },
    { label: "Volumen · Usuarios activos", value: formatterNumber.format(volumeActiveUsers) },
    { label: "Volumen · Impresiones", value: formatterNumber.format(volumeImpressions) },
    { label: "Ingresos · Revenue", value: formatterCurrency.format(revenue) },
    { label: "Ingresos · MRR", value: formatterCurrency.format(mrr) },
    { label: "Ingresos · Precio medio", value: formatterCurrency.format(averagePrice) },
    { label: "Engagement · Tasa", value: asPercent(engagementRate) },
    { label: "Engagement · Interacciones", value: formatterNumber.format(interactions) },
    { label: "Engagement · Conversion", value: asPercent(conversionRate) },
    { label: "Retencion · Churn", value: asPercent(churnRate) },
    { label: "Retencion · Permanencia", value: `${permanence.toFixed(1)} h` },
    { label: "Retencion · Complecion", value: asPercent(completionRate) },
    { label: "Rendimiento · Conversiones", value: formatterNumber.format(totalConversions) },
    { label: "Rendimiento · CTR", value: asPercent(ctr) },
    { label: "Rendimiento · Tasa conversion", value: asPercent(conversionRate) },
    { label: "Satisfaccion · NPS", value: `${nps.toFixed(1)} pts` },
    { label: "Satisfaccion · CSAT", value: asPercent(csat) },
    { label: "Eficiencia · Coste por resultado", value: formatterCurrency.format(costPerResult) },
    { label: "Eficiencia · Margen", value: asPercent(margin) },
    { label: "Eficiencia · Tiempo medio", value: `${times.toFixed(1)} h` },
  ];

  kpiGrid.innerHTML = kpis
    .map(
      (kpi) => `
      <article class="kpi">
        <small>${kpi.label}</small>
        <strong>${kpi.value}</strong>
      </article>
    `
    )
    .join("");
}

function renderDriverBlock(filtered) {
  const totalImpressions = sumBy(filtered, "impressions");
  const totalClicks = sumBy(filtered, "clicks");
  const totalLeads = sumBy(filtered, "leads");
  const totalConversions = sumBy(filtered, "conversions");

  renderBars(
    "funnelDrivers",
    [
      { label: "Impresiones", value: 1, detail: formatterNumber.format(totalImpressions) },
      {
        label: "Clicks",
        value: getRate(totalClicks, totalImpressions),
        detail: formatterNumber.format(totalClicks),
      },
      {
        label: "Leads",
        value: getRate(totalLeads, totalImpressions),
        detail: formatterNumber.format(totalLeads),
      },
      {
        label: "Conversiones",
        value: getRate(totalConversions, totalImpressions),
        detail: formatterNumber.format(totalConversions),
      },
    ],
    asPercent
  );

  const groupedPlatform = Object.entries(groupBy(filtered, "platform")).map(([label, rows]) => {
    const roi = getRoi(sumBy(rows, "revenue"), sumBy(rows, "cost"));
    const conversion = getRate(sumBy(rows, "conversions"), sumBy(rows, "reach"));
    const blended = roi * 0.6 + conversion * 120;
    return {
      label,
      value: blended,
      detail: `ROI ${asRatio(roi)} / Conv ${asPercent(conversion)}`,
    };
  });
  renderBars("platformPerformance", groupedPlatform.sort((a, b) => b.value - a.value), (v) => v.toFixed(1));

  const leadQuality = getRate(sumBy(filtered, "qualifiedLeads"), sumBy(filtered, "leads"));
  const attendanceRate = getRate(sumBy(filtered, "attendance"), sumBy(filtered, "leads"));
  const passRate = getRate(sumBy(filtered, "passCount"), sumBy(filtered, "attendance"));
  renderBars(
    "qualityDrivers",
    [
      { label: "Lead qualificado", value: leadQuality },
      { label: "Attendance rate", value: attendanceRate },
      { label: "Pass rate", value: passRate },
    ],
    asPercent
  );

  const productPerf = Object.entries(groupBy(filtered, "product"))
    .map(([label, rows]) => {
      const revenue = sumBy(rows, "revenue");
      const conversion = getRate(sumBy(rows, "conversions"), sumBy(rows, "reach"));
      const score = revenue * conversion;
      return {
        label,
        value: score,
        detail: `${formatterCurrency.format(revenue)} / ${asPercent(conversion)}`,
      };
    })
    .sort((a, b) => b.value - a.value);
  renderBars("productPerformance", productPerf, (v) => formatterNumber.format(Math.round(v)));

  const activityByPlatform = Object.entries(groupBy(filtered, "platform"))
    .map(([label, rows]) => {
      const activity = sumBy(rows, "posts") + sumBy(rows, "stories") + sumBy(rows, "reels") + sumBy(rows, "videos");
      return { label, value: activity };
    })
    .sort((a, b) => b.value - a.value);
  renderBars("activityDrivers", activityByPlatform, (v) => formatterNumber.format(v));

  const engagementByPlatform = Object.entries(groupBy(filtered, "platform"))
    .map(([label, rows]) => {
      const likes = sumBy(rows, "likes");
      const comments = sumBy(rows, "comments");
      const shares = sumBy(rows, "shares");
      const saves = sumBy(rows, "saves");
      return {
        label,
        value: likes + comments + shares + saves,
        detail: `MG ${formatterNumber.format(likes)} | C ${formatterNumber.format(comments)} | S ${formatterNumber.format(shares)} | G ${formatterNumber.format(saves)}`,
      };
    })
    .sort((a, b) => b.value - a.value);
  renderBars("engagementDrivers", engagementByPlatform, (v) => formatterNumber.format(v));
}

function renderOperationTables(filtered) {
  const groupedProducts = Object.entries(groupBy(filtered, "product")).map(([product, rows]) => {
    const revenue = sumBy(rows, "revenue");
    const conversions = sumBy(rows, "conversions");
    return {
      product,
      avgPrice: avgBy(rows, "price"),
      revenue,
      conversions,
      roi: getRoi(revenue, sumBy(rows, "cost")),
      conversionRate: getRate(conversions, sumBy(rows, "reach")),
    };
  });

  productTableBody.innerHTML = groupedProducts
    .sort((a, b) => b.revenue - a.revenue)
    .map(
      (row) => `
      <tr>
        <td>${row.product}</td>
        <td>${formatterCurrency.format(row.avgPrice)}</td>
        <td>${formatterCurrency.format(row.revenue)}</td>
        <td>${formatterNumber.format(row.conversions)}</td>
        <td>${asRatio(row.roi)}</td>
        <td>${asPercent(row.conversionRate)}</td>
      </tr>
    `
    )
    .join("");

  const platforms = Object.entries(groupBy(filtered, "platform")).map(([platform, rows]) => {
    const reach = sumBy(rows, "reach");
    const engagement = getRate(sumBy(rows, "engagements"), reach);
    const conversions = sumBy(rows, "conversions");
    const roi = getRoi(sumBy(rows, "revenue"), sumBy(rows, "cost"));
    const ctr = getRate(sumBy(rows, "clicks"), sumBy(rows, "impressions"));
    const conversionRate = getRate(conversions, reach);

    const metrics = [
      { name: "engagement", value: engagement },
      { name: "conversion", value: conversionRate },
      { name: "CTR", value: ctr },
      { name: "ROI", value: roi / 10 },
    ];
    metrics.sort((a, b) => b.value - a.value);

    return {
      platform,
      reach,
      engagement,
      conversions,
      roi,
      bestMetric: metrics[0].name,
    };
  });

  platformTableBody.innerHTML = platforms
    .sort((a, b) => b.roi - a.roi)
    .map(
      (row) => `
      <tr>
        <td>${row.platform}</td>
        <td>${formatterNumber.format(row.reach)}</td>
        <td>${asPercent(row.engagement)}</td>
        <td>${formatterNumber.format(row.conversions)}</td>
        <td>${asRatio(row.roi)}</td>
        <td><span class="metric-chip">${row.bestMetric}</span></td>
      </tr>
    `
    )
    .join("");

  campaignBody.innerHTML = filtered
    .map((row) => {
      const roi = getRoi(row.revenue, row.cost);
      const conversion = getRate(row.conversions, row.reach);
      return `
        <tr>
          <td>${asDate(row.date)}</td>
          <td>${row.platform}</td>
          <td>${row.product}</td>
          <td>${formatterNumber.format(row.impressions)}</td>
          <td>${formatterNumber.format(row.conversions)}</td>
          <td>${formatterCurrency.format(row.revenue)}</td>
          <td>${asRatio(roi)}</td>
          <td>${asPerformanceTag(roi, conversion)}</td>
        </tr>
      `;
    })
    .join("");
}

function getStdDev(numbers) {
  if (numbers.length <= 1) {
    return 0;
  }
  const mean = numbers.reduce((acc, value) => acc + value, 0) / numbers.length;
  const variance = numbers.reduce((acc, value) => acc + (value - mean) ** 2, 0) / numbers.length;
  return Math.sqrt(variance);
}

function renderAlertsAndLists(filtered) {
  const conversionRates = filtered.map((row) => getRate(row.conversions, row.reach));
  const meanConv = conversionRates.reduce((acc, value) => acc + value, 0) / Math.max(conversionRates.length, 1);
  const stdConv = getStdDev(conversionRates);

  const alerts = [];
  filtered.forEach((row) => {
    const conv = getRate(row.conversions, row.reach);
    const roi = getRoi(row.revenue, row.cost);
    if (conv < meanConv - stdConv * 0.9) {
      alerts.push(`Caida fuerte de conversion en ${row.platform} · ${row.product} (${asPercent(conv)}).`);
    }
    if (conv > meanConv + stdConv * 0.9) {
      alerts.push(`Pico de conversion en ${row.platform} · ${row.product} (${asPercent(conv)}).`);
    }
    if (roi < 1.7) {
      alerts.push(`Anomalia de rendimiento: ROI bajo (${asRatio(roi)}) en ${row.platform} · ${row.product}.`);
    }
  });

  alertsList.innerHTML = (alerts.length > 0 ? alerts.slice(0, 6) : ["Sin alertas criticas con el filtro actual."])
    .map((item) => `<li>${item}</li>`)
    .join("");

  const topType = topTypeFilter.value;
  const topMetric = topMetricFilter.value;
  let records = [];

  if (topType === "product") {
    records = Object.entries(groupBy(filtered, "product")).map(([name, rows]) => ({
      name,
      revenue: sumBy(rows, "revenue"),
      conversionRate: getRate(sumBy(rows, "conversions"), sumBy(rows, "reach")),
      roi: getRoi(sumBy(rows, "revenue"), sumBy(rows, "cost")),
      engagementRate: getRate(sumBy(rows, "engagements"), sumBy(rows, "reach")),
    }));
  }

  if (topType === "platform") {
    records = Object.entries(groupBy(filtered, "platform")).map(([name, rows]) => ({
      name,
      revenue: sumBy(rows, "revenue"),
      conversionRate: getRate(sumBy(rows, "conversions"), sumBy(rows, "reach")),
      roi: getRoi(sumBy(rows, "revenue"), sumBy(rows, "cost")),
      engagementRate: getRate(sumBy(rows, "engagements"), sumBy(rows, "reach")),
    }));
  }

  if (topType === "campaign") {
    records = filtered.map((row) => ({
      name: `${row.platform} · ${row.product} (${asDate(row.date)})`,
      revenue: row.revenue,
      conversionRate: getRate(row.conversions, row.reach),
      roi: getRoi(row.revenue, row.cost),
      engagementRate: getRate(row.engagements, row.reach),
    }));
  }

  records.sort((a, b) => b[topMetric] - a[topMetric]);

  topsList.innerHTML = records
    .slice(0, 4)
    .map((row, index) => {
      const value =
        topMetric === "revenue"
          ? formatterCurrency.format(row[topMetric])
          : topMetric === "roi"
            ? asRatio(row[topMetric])
            : asPercent(row[topMetric]);
      return `<li>${index + 1}. ${row.name}: ${value}</li>`;
    })
    .join("");

  const opportunities = [];
  const weakConversion = records.filter((r) => r.conversionRate < 0.01);
  const weakRoi = records.filter((r) => r.roi < 2);
  const weakEngagement = records.filter((r) => r.engagementRate < 0.07);

  if (weakConversion[0]) {
    opportunities.push(`Optimizar CTA y creatividades en ${weakConversion[0].name} por conversion inferior al 1%.`);
  }
  if (weakRoi[0]) {
    opportunities.push(`Reducir coste o renegociar comision en ${weakRoi[0].name} por ROI menor a 2x.`);
  }
  if (weakEngagement[0]) {
    opportunities.push(`Reforzar formato de contenido en ${weakEngagement[0].name} por engagement bajo.`);
  }
  if (opportunities.length === 0) {
    opportunities.push("No hay oportunidades criticas detectadas con el filtro actual.");
  }

  opportunitiesList.innerHTML = opportunities.map((item) => `<li>${item}</li>`).join("");
}

function renderDashboard() {
  const filtered = getFilteredCampaigns();
  renderKpiBlock(filtered);
  renderDriverBlock(filtered);
  renderOperationTables(filtered);
  renderAlertsAndLists(filtered);
}

platformFilter.addEventListener("change", renderDashboard);
productFilter.addEventListener("change", renderDashboard);
topTypeFilter.addEventListener("change", renderDashboard);
topMetricFilter.addEventListener("change", renderDashboard);
themeToggle.addEventListener("click", toggleTheme);

applyTheme(getPreferredTheme());
renderDashboard();
