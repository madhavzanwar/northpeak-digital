(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after a nav link is chosen (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Contact form validation ---- */
  var form = document.getElementById("contactForm");
  if (!form) return;

  var status = document.getElementById("formStatus");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var validators = {
    name: function (v) {
      return v.trim().length >= 2 ? "" : "Enter your name.";
    },
    email: function (v) {
      if (!v.trim()) return "Enter your email.";
      return emailPattern.test(v.trim()) ? "" : "Enter a valid email address.";
    },
    budget: function (v) {
      return v ? "" : "Select a budget range.";
    },
    message: function (v) {
      return v.trim().length >= 10 ? "" : "Tell us a little more (10+ characters).";
    }
  };

  function fieldFor(name) {
    return document.getElementById(name).closest(".field");
  }

  function showError(name, message) {
    var errorEl = document.getElementById("err-" + name);
    var field = fieldFor(name);
    if (errorEl) errorEl.textContent = message;
    if (field) field.classList.toggle("has-error", Boolean(message));
  }

  function validateField(name) {
    var input = document.getElementById(name);
    var message = validators[name](input.value);
    showError(name, message);
    return message === "";
  }

  // Live-validate on blur, clear error as soon as it's fixed
  Object.keys(validators).forEach(function (name) {
    var input = document.getElementById(name);
    input.addEventListener("blur", function () {
      validateField(name);
    });
    input.addEventListener("input", function () {
      var field = fieldFor(name);
      if (field && field.classList.contains("has-error")) {
        validateField(name);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var names = Object.keys(validators);
    var allValid = names
      .map(validateField)
      .every(Boolean);

    if (!allValid) {
      status.textContent = "Please fix the highlighted fields.";
      status.className = "form-status error";
      var firstInvalid = names.find(function (name) {
        return fieldFor(name).classList.contains("has-error");
      });
      if (firstInvalid) document.getElementById(firstInvalid).focus();
      return;
    }

    // No backend wired up for this demo — simulate a successful send.
    status.textContent = "Thanks — your brief is in. We'll reply within one business day.";
    status.className = "form-status success";
    form.reset();
  });
})();
