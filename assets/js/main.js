/* Ten80Ten — interaction & animation engine
   Behaviors spec: docs/research/BEHAVIORS.md */
(function () {
  "use strict";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- smooth scroll (lerp) ---------- */
  // Lightweight Lenis-style smoothing on wheel for fine pointers only.
  if (!reduced && window.matchMedia("(pointer: fine)").matches) {
    let target = window.scrollY, current = window.scrollY, raf = null;
    const max = () => document.documentElement.scrollHeight - window.innerHeight;
    const loop = () => {
      current += (target - current) * 0.11;
      if (Math.abs(target - current) < 0.5) { current = target; raf = null; }
      window.scrollTo(0, current);
      if (raf !== null) raf = requestAnimationFrame(loop);
    };
    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey) return;
      const t = e.target;
      if (t.closest && t.closest("[data-native-scroll]")) return;
      e.preventDefault();
      target = Math.max(0, Math.min(max(), target + e.deltaY));
      if (raf === null) raf = requestAnimationFrame(loop);
    }, { passive: false });
    ["keydown", "touchstart", "mousedown"].forEach((ev) =>
      window.addEventListener(ev, () => { if (raf === null) target = window.scrollY; }, { passive: true })
    );
    window.addEventListener("scroll", () => { if (raf === null) { target = window.scrollY; current = window.scrollY; } }, { passive: true });
  }

  /* ---------- text splitting ---------- */
  function splitInto(el, mode) {
    if (el.dataset.split) return;
    el.dataset.split = "1";
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3 && child.textContent.trim().length) {
          const frag = document.createDocumentFragment();
          const words = child.textContent.split(/(\s+)/);
          words.forEach((p) => {
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            if (!p.length) return;
            if (mode === "chars") {
              // word wrapper keeps chars from breaking mid-word
              const w = document.createElement("span");
              w.className = "w";
              w.style.display = "inline-block";
              [...p].forEach((c) => {
                const s = document.createElement("span");
                s.className = "ch";
                s.textContent = c;
                w.appendChild(s);
              });
              frag.appendChild(w);
            } else {
              const s = document.createElement("span");
              s.className = "wd";
              s.textContent = p;
              frag.appendChild(s);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && !child.classList.contains("ch") && !child.classList.contains("wd")) {
          walk(child);
        }
      });
    };
    walk(el);
    el.querySelectorAll(mode === "chars" ? ".ch" : ".wd").forEach((s, i) => s.style.setProperty("--i", i));
  }
  document.querySelectorAll('[data-anim="chars"]').forEach((el) => splitInto(el, "chars"));
  document.querySelectorAll('[data-anim="words"]').forEach((el) => splitInto(el, "words"));
  document.querySelectorAll('[data-anim="stagger"]').forEach((el) =>
    [...el.children].forEach((c, i) => c.style.setProperty("--i", i))
  );

  /* ---------- count-up ---------- */
  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const to = parseFloat(el.dataset.to || "0");
    const dur = 1400, t0 = performance.now();
    const fmt = (v) => (el.dataset.decimals ? v.toFixed(+el.dataset.decimals) : Math.round(v).toString());
    if (reduced) { el.textContent = fmt(to); return; }
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(to * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- reveal observer ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      el.querySelectorAll("[data-count]").forEach(countUp);
      if (el.dataset.count !== undefined) countUp(el);
      io.unobserve(el);
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll("[data-anim], [data-count]").forEach((el) => io.observe(el));

  /* ---------- menu overlay ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".menu-overlay");
  if (menuBtn && overlay) {
    overlay.querySelectorAll("nav a").forEach((a, i) => a.style.setProperty("--i", i));
    const toggle = () => {
      const open = overlay.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      menuBtn.setAttribute("aria-expanded", open);
      const plus = menuBtn.querySelector(".plus-ico");
      if (plus) plus.style.transform = open ? "rotate(45deg)" : "";
    };
    menuBtn.addEventListener("click", toggle);
    overlay.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape" && overlay.classList.contains("open")) toggle(); });
  }

  /* ---------- letter flip prep (menu btn + any .flip-txt) ---------- */
  document.querySelectorAll(".flip-txt").forEach((el) => {
    if (el.dataset.built) return;
    el.dataset.built = "1";
    const txt = el.textContent;
    el.textContent = "";
    [...txt].forEach((c, i) => {
      const s = document.createElement("span");
      s.textContent = c;
      s.dataset.c = c;
      s.style.setProperty("--i", i);
      el.appendChild(s);
    });
  });

  /* ---------- button swap text prep ---------- */
  document.querySelectorAll(".btn[data-swap]").forEach((btn) => {
    const label = btn.querySelector(".swap");
    if (!label || label.querySelector("i")) return;
    const t = label.textContent.trim();
    label.innerHTML = "<i>" + t + "</i><i aria-hidden='true'>" + t + "</i>";
  });

  /* ---------- floating call pill ---------- */
  const pill = document.querySelector(".call-pill");
  if (pill) {
    const onScroll = () => pill.classList.toggle("show", window.scrollY > 500 && !document.body.classList.contains("menu-open"));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- ticker: duplicate track for seamless loop ---------- */
  document.querySelectorAll(".ticker-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q"), a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const parent = item.parentElement;
      parent.querySelectorAll(".faq-item.open").forEach((o) => {
        if (o !== item) { o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = "0px"; }
      });
      const open = item.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });
  const firstFaq = document.querySelector(".faq-list .faq-item");
  if (firstFaq) {
    firstFaq.classList.add("open");
    const a = firstFaq.querySelector(".faq-a");
    if (a) a.style.maxHeight = a.scrollHeight + 40 + "px";
  }

  /* ---------- pricing toggle ---------- */
  const priceToggle = document.querySelector("[data-price-toggle]");
  if (priceToggle) {
    priceToggle.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        priceToggle.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
        const annual = b.dataset.period === "annual";
        document.querySelectorAll("[data-monthly]").forEach((p) => {
          p.style.opacity = 0;
          setTimeout(() => { p.textContent = annual ? p.dataset.annual : p.dataset.monthly; p.style.opacity = 1; }, 180);
        });
      });
    });
  }

  /* ---------- hover thumbnail follower (More projects) ---------- */
  const rowsWrap = document.querySelector("[data-hover-thumbs]");
  if (rowsWrap && window.matchMedia("(pointer: fine)").matches) {
    const thumb = document.createElement("div");
    thumb.className = "hover-thumb";
    document.body.appendChild(thumb);
    rowsWrap.querySelectorAll("[data-thumb]").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        thumb.style.backgroundImage = "url('" + row.dataset.thumb + "')";
        thumb.classList.add("show");
      });
      row.addEventListener("mouseleave", () => thumb.classList.remove("show"));
    });
    window.addEventListener("mousemove", (e) => {
      thumb.style.left = e.clientX + 24 + "px";
      thumb.style.top = e.clientY - 90 + "px";
    }, { passive: true });
  }

  /* ---------- back to top ---------- */
  document.querySelectorAll("[data-top]").forEach((b) =>
    b.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); })
  );

  /* ---------- forms: mailto fallback ---------- */
  document.querySelectorAll("form[data-mailto]").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(f);
      const subject = f.dataset.subject || "Website inquiry — Ten80Ten";
      let body = "";
      data.forEach((v, k) => { body += k + ": " + v + "\n"; });
      window.location.href = "mailto:hello@ten80ten.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  });
})();
