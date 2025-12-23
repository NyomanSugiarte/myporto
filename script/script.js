document.getElementById("year").textContent = new Date().getFullYear();

  const themeBtn = document.getElementById("themeBtn");
  const root = document.documentElement;

  const themes = {
    dark: {bg:"#0b0f19", card:"#111827", muted:"#94a3b8", text:"#e5e7eb", brand:"#7c3aed", brand2:"#22c55e", border:"rgba(148,163,184,.18)"},
    light:{bg:"#f8fafc", card:"#ffffff", muted:"#475569", text:"#0f172a", brand:"#7c3aed", brand2:"#16a34a", border:"rgba(15,23,42,.12)"}
  };

  function applyTheme(mode){
    const t = themes[mode];
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--card", t.card);
    root.style.setProperty("--muted", t.muted);
    root.style.setProperty("--text", t.text);
    root.style.setProperty("--brand", t.brand);
    root.style.setProperty("--brand2", t.brand2);
    root.style.setProperty("--border", t.border);
    localStorage.setItem("theme", mode);
  }

  applyTheme(localStorage.getItem("theme") || "dark");
  themeBtn.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  const form = document.getElementById("contactForm");
  const note = document.getElementById("contactNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    note.textContent = `✅ Terima kasih, ${data.get("komangugik821@gmail.com")}. (Demo) — untuk pengiriman real, gunakan email.`;
    form.reset();
  });