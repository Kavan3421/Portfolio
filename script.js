// Global Variables
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeLoading();
  initializeParticles();
  initializeNavigation();
  initializeTypingAnimation();
  initializeScrollAnimations();
  initializeSkillAnimations();
  initializeCounterAnimations();
  initializeProjectFilters();
  initializeTestimonials();
  initializeContactForm();
  initializeThemeToggle();
  initializeCustomCursor();
  initializeScrollToTop();

  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory.includes(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Loading Screen
function initializeLoading() {
  const loadingScreen = document.querySelector(".loading-screen");
  const loadingProgress = document.querySelector(".loading-progress");

  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
      }, 500);
    }
    loadingProgress.style.width = progress + "%";
  }, 200);
}

// Particle Background
function initializeParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.1, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
}

// Navigation
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Active link highlighting
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Typing Animation
function initializeTypingAnimation() {
  const typingText = document.getElementById("typing-text");
  const texts = [
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
  }

  typeText();
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Skill Animations
function initializeSkillAnimations() {
  const skillBubbles = document.querySelectorAll(".skill-bubble");

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillLevel = entry.target.getAttribute("data-skill");
          const bubble = entry.target;

          // Add animation class
          bubble.style.animation = "skillPulse 0.6s ease-out";

          // Animate skill percentage
          const levelElement = bubble.querySelector(".skill-level");
          animateNumber(levelElement, 0, skillLevel, 1000, "%");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBubbles.forEach((bubble) => {
    skillObserver.observe(bubble);
  });
}

// Counter Animations
function initializeCounterAnimations() {
  const counters = document.querySelectorAll("[data-count]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-count"));
          animateNumber(counter, 0, target, 2000);
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Number Animation Helper
function animateNumber(element, start, end, duration, suffix = "") {
  const startTime = performance.now();

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.floor(start + (end - start) * easeOutQuart(progress));
    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}

// Easing function
function easeOutQuart(t) {
  return 1 - --t * t * t * t;
}

// Project Filters
function initializeProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category").split(" ");

        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// Testimonials
function initializeTestimonials() {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => changeTestimonial(-1));
    nextBtn.addEventListener("click", () => changeTestimonial(1));

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTestimonial = index;
        updateTestimonials();
      });
    });

    // Auto-play testimonials
    setInterval(() => {
      changeTestimonial(1);
    }, 5000);
  }
}

function changeTestimonial(direction) {
  currentTestimonial += direction;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  } else if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  updateTestimonials();
}

function updateTestimonials() {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.toggle("active", index === currentTestimonial);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonial);
  });
}

// Contact Form
function initializeContactForm() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector(".submit-btn");
      const formData = new FormData(form);

      // Show loading state
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      try {
        // Using Formspree for form submission
        const response = await fetch("https://formspree.io/f/manboyqp", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          showToast(
            "Message sent successfully! I'll get back to you soon.",
            "success"
          );
          form.reset();

          // Reset form labels
          const labels = form.querySelectorAll("label");
          labels.forEach((label) => {
            label.style.top = "1rem";
            label.style.fontSize = "1rem";
            label.style.color = "var(--text-light)";
          });
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        showToast(
          "Failed to send message. Please try again or contact me directly.",
          "error"
        );
      } finally {
        // Hide loading state
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
      }
    });

    // Form validation and styling
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", validateField);
      input.addEventListener("input", validateField);
    });
  }
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Remove existing validation classes
  field.classList.remove("valid", "invalid");

  // Validate based on field type
  let isValid = false;

  switch (field.type) {
    case "email":
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      break;
    case "text":
      isValid = value.length >= 2;
      break;
    default:
      isValid = value.length >= 5;
  }

  // Add validation class
  field.classList.add(isValid ? "valid" : "invalid");

  return isValid;
}

// Toast Notifications
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastIcon = toast.querySelector(".toast-icon");
  const toastMessage = toast.querySelector(".toast-message");
  const toastClose = toast.querySelector(".toast-close");

  // Set content
  toastMessage.textContent = message;

  // Set icon based on type
  if (type === "success") {
    toastIcon.className = "toast-icon fas fa-check-circle";
    toast.className = "toast success";
  } else if (type === "error") {
    toastIcon.className = "toast-icon fas fa-exclamation-circle";
    toast.className = "toast error";
  }

  // Show toast
  toast.classList.add("show");

  // Auto hide after 5 seconds
  const autoHide = setTimeout(() => {
    hideToast();
  }, 5000);

  // Close button
  toastClose.onclick = () => {
    clearTimeout(autoHide);
    hideToast();
  };

  function hideToast() {
    toast.classList.remove("show");
  }
}

// Theme Toggle
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Set initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle.querySelector("i");

  if (theme === "dark") {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

// Custom Cursor
function initializeCustomCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (window.innerWidth > 768) {
    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Smooth follower animation
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-bubble"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(1.5)";
        cursorFollower.style.transform += " scale(1.5)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = cursor.style.transform.replace(
          " scale(1.5)",
          ""
        );
        cursorFollower.style.transform = cursorFollower.style.transform.replace(
          " scale(1.5)",
          ""
        );
      });
    });
  }
}

// Scroll to Top
function initializeScrollToTop() {
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 70; // Account for fixed navbar

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add CSS animation keyframes dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes skillPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: var(--success-color);
    }
    
    .form-group input.invalid,
    .form-group textarea.invalid {
        border-color: var(--error-color);
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Any scroll-heavy operations can go here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Preload critical images
function preloadImages() {
  const imageUrls = [
    "/placeholder.svg?height=400&width=400&text=Kavan+Patel",
    "/placeholder.svg?height=300&width=300&text=About+Me",
    "/placeholder.svg?height=300&width=400&text=SurveilEye+System",
    "/placeholder.svg?height=300&width=400&text=LionsFit+App",
    "/placeholder.svg?height=300&width=400&text=Amazon+Clone",
    "/placeholder.svg?height=300&width=400&text=Rock+Paper+Scissors",
  ];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Initialize image preloading
preloadImages();

// Error handling for missing elements
function safeQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element not found: ${selector}`);
  }
  return element;
}

// Add intersection observer for lazy loading
const lazyImages = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));
