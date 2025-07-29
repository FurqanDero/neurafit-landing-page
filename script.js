document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // TESTIMONIAL SLIDER
  // =======================
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.remove("active");
      if (i === index) t.classList.add("active");
    });
  }

  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 4000);

  // =======================
  // PRICING TOGGLE
  // =======================
  const pricingToggle = document.getElementById("togglePricing");
  const prices = document.querySelectorAll(".price");

  pricingToggle.addEventListener("change", () => {
    prices.forEach((price) => {
      const monthly = price.getAttribute("data-monthly");
      const yearly = price.getAttribute("data-yearly");
      price.textContent = pricingToggle.checked ? yearly : monthly;
    });
  });

  // =======================
  // DARK MODE TOGGLE
  // =======================
  const modeToggle = document.getElementById("modeToggle");

  modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", modeToggle.checked);
  });

  // =======================
  // CONTACT FORM VALIDATION
  // =======================
  const form = document.getElementById("contactForm");

  form?.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      e.preventDefault();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });

  // =======================
  // FADE-IN ON SCROLL
  // =======================
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
