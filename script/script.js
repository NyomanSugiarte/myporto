// ===== Year (aman di semua halaman) =====
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ===== Theme (aman di semua halaman) =====
(function () {
  const themeBtn = document.getElementById("themeBtn");
  const root = document.documentElement;

  const themes = {
    dark: { bg:"#0b0f19", card:"#111827", muted:"#94a3b8", text:"#e5e7eb", brand:"#7c3aed", brand2:"#22c55e", border:"rgba(148,163,184,.18)" },
    light:{ bg:"#f8fafc", card:"#ffffff", muted:"#475569", text:"#0f172a", brand:"#7c3aed", brand2:"#16a34a", border:"rgba(15,23,42,.12)" }
  };

  function applyTheme(mode){
    const t = themes[mode] || themes.dark;
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

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem("theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();

// ===== Contact Form (aman: hanya jalan jika form ada) =====
(function () {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("contactNote");
  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    note.textContent = `✅ Terima kasih, ${data.get("name")}. (Demo)`;
    form.reset();
  });
})();

// ===== Dropdown Navbar (aman di semua halaman) =====
(function () {
  const dd = document.querySelector(".dropdown");
  const btn = document.getElementById("navDropdownBtn");
  const menu = document.getElementById("navDropdownMenu");
  if (!dd || !btn || !menu) return;

  const close = () => {
    dd.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggle = () => {
    dd.classList.toggle("open");
    btn.setAttribute("aria-expanded", dd.classList.contains("open") ? "true" : "false");
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggle();
  });

  document.addEventListener("click", (e) => {
    if (!dd.contains(e.target)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
