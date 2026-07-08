/* Ten80Ten — interactions
   Reveal-on-scroll, tickers, horizontal accordion, testimonial slider,
   billing toggle, FAQ accordion, nav state, form handling. */

(function () {
  "use strict";

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseFloat(e.target.dataset.delay || 0);
            setTimeout(() => e.target.classList.add("in"), delay * 1000);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Tickers: duplicate track content for seamless loop ---------- */
  document.querySelectorAll(".ticker-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- Navbar: shrink + dark-section awareness + mobile menu ---------- */
  const nav = document.querySelector(".nav");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
      const probe = document.elementFromPoint(Math.floor(window.innerWidth / 2), 95);
      const darkHost = probe && probe.closest(
        ".capabilities, .process, .feature, .subhero-panel--dark, .section-pad--dark"
      );
      nav.classList.toggle("on-dark", !!darkHost);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = nav.querySelector(".nav-burger");
    if (burger && mobileMenu) {
      burger.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");
        nav.classList.toggle("menu-open", open);
        document.body.style.overflow = open ? "hidden" : "";
      });
      mobileMenu.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          nav.classList.remove("menu-open");
          document.body.style.overflow = "";
        })
      );
    }
  }

  /* ---------- Horizontal accordion (capabilities) ---------- */
  const hacc = document.querySelector(".hacc");
  if (hacc) {
    const items = hacc.querySelectorAll(".hacc-item");
    items.forEach((item) => {
      const activate = () => {
        items.forEach((i) => i.classList.remove("open"));
        item.classList.add("open");
      };
      item.addEventListener("click", activate);
      item.addEventListener("mouseenter", () => {
        if (window.matchMedia("(min-width: 1200px)").matches) activate();
      });
    });
  }

  /* ---------- Process step accordion (one open at a time) ---------- */
  document.querySelectorAll(".steps").forEach((wrap) => {
    const items = wrap.querySelectorAll(".step");
    items.forEach((item) => {
      const activate = () => {
        items.forEach((i) => i.classList.remove("open"));
        item.classList.add("open");
      };
      item.addEventListener("click", activate);
      item.addEventListener("mouseenter", () => {
        if (window.matchMedia("(min-width: 1025px)").matches) activate();
      });
    });
  });

  /* ---------- Testimonial slider ---------- */
  const slider = document.querySelector(".exp-slider");
  if (slider) {
    const track = slider.querySelector(".exp-track");
    const slides = track.children;
    const prev = document.querySelector(".exp-btn--prev");
    const next = document.querySelector(".exp-btn--next");
    let idx = 0;
    const step = () => (slides[0] ? slides[0].getBoundingClientRect().width + 16 : 300);
    const maxIdx = () => {
      const visible = Math.floor(slider.clientWidth / step());
      return Math.max(0, slides.length - Math.max(visible, 1));
    };
    const go = (n) => {
      idx = Math.max(0, Math.min(n, maxIdx()));
      track.style.transform = "translateX(" + -idx * step() + "px)";
    };
    if (prev) prev.addEventListener("click", () => go(idx - 1));
    if (next) next.addEventListener("click", () => go(idx + 1));
    window.addEventListener("resize", () => go(idx));

    let startX = 0, dragging = false;
    slider.addEventListener("pointerdown", (e) => { dragging = true; startX = e.clientX; });
    window.addEventListener("pointerup", (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      if (dx < -40) go(idx + 1);
      else if (dx > 40) go(idx - 1);
    });

    let auto = setInterval(() => go(idx >= maxIdx() ? 0 : idx + 1), 5000);
    slider.addEventListener("pointerenter", () => clearInterval(auto));
    slider.addEventListener("pointerleave", () => {
      auto = setInterval(() => go(idx >= maxIdx() ? 0 : idx + 1), 5000);
    });
  }

  /* ---------- Billing toggle ---------- */
  const toggle = document.querySelector(".billing-toggle");
  if (toggle) {
    const priceEls = document.querySelectorAll("[data-monthly]");
    const flip = () => {
      const yearly = toggle.classList.toggle("yearly");
      priceEls.forEach((el) => {
        el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
      });
    };
    toggle.querySelector(".bt-switch").addEventListener("click", flip);
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = "0px";
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Contact form (mailto handoff, no backend required) ---------- */
  document.querySelectorAll("form[data-contact]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Free audit request — " + (data.get("name") || "New lead"));
      const bodyLines = [];
      data.forEach((v, k) => bodyLines.push(k + ": " + v));
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = "mailto:hello@ten80ten.com?subject=" + subject + "&body=" + body;
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "// Opening your email client — or write us at hello@ten80ten.com";
        status.classList.add("show");
      }
    });
  });

  /* ---------- Corner badge: hide near footer ---------- */
  const badge = document.querySelector(".corner-badge");
  const footer = document.querySelector(".footer");
  if (badge && footer && "IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => badge.classList.toggle("hidden", entries[0].isIntersecting),
      { threshold: 0.05 }
    ).observe(footer);
  }

  /* ---------- Count-up metrics ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const dur = 1400;
        const t0 = performance.now();
        const tickFn = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(tickFn);
        };
        requestAnimationFrame(tickFn);
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => cio.observe(c));
  }
})();
