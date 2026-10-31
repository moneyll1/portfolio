/**
 * MANIL GHIMIRE — PORTFOLIO JAVASCRIPT
 * Vanilla, Lightweight, Accessible, Dependency-Free
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. THEME CONTROLLER (Persisted with localStorage & prefers-color-scheme)
     -------------------------------------------------------------------------- */
  function initTheme() {
    var root = document.documentElement;
    var savedTheme = localStorage.getItem('mg-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

    root.setAttribute('data-theme', theme);

    var toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(function (btn) {
      updateToggleVisual(btn, theme);
      btn.addEventListener('click', function () {
        var current = root.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('mg-theme', next);
        toggles.forEach(function (b) { updateToggleVisual(b, next); });
      });
    });

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('mg-theme')) {
          var sysNext = e.matches ? 'dark' : 'light';
          root.setAttribute('data-theme', sysNext);
          toggles.forEach(function (b) { updateToggleVisual(b, sysNext); });
        }
      });
    }
  }

  function updateToggleVisual(btn, theme) {
    if (!btn) return;
    if (theme === 'dark') {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
      btn.setAttribute('aria-label', 'Switch to light theme');
      btn.setAttribute('title', 'Switch to light theme');
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      btn.setAttribute('aria-label', 'Switch to dark theme');
      btn.setAttribute('title', 'Switch to dark theme');
    }
  }

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  function initMobileNav() {
    var burger = document.querySelector('.burger-btn');
    var panel = document.querySelector('.mobile-nav-panel');
    if (!burger || !panel) return;

    function toggleMenu(forceClose) {
      var isOpen = forceClose ? false : !panel.classList.contains('open');
      burger.classList.toggle('open', isOpen);
      panel.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    burger.addEventListener('click', function () {
      toggleMenu();
    });

    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(true);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        toggleMenu(true);
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. DYNAMIC FOOTER YEAR
     -------------------------------------------------------------------------- */
  function initDynamicYear() {
    var yearEls = document.querySelectorAll('.dynamic-year');
    var currentYear = new Date().getFullYear();
    yearEls.forEach(function (el) {
      el.textContent = currentYear;
    });
  }

  /* --------------------------------------------------------------------------
     4. QUICK CLIPBOARD COPY BUTTONS
     -------------------------------------------------------------------------- */
  function initClipboardButtons() {
    var copyButtons = document.querySelectorAll('[data-copy-target]');
    copyButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var textToCopy = btn.getAttribute('data-copy-target');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(function () {
          var originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.style.color = '#10B981';
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.color = '';
          }, 2000);
        }).catch(function () {
          // Fallback
          var tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);

          var originalText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(function () {
            btn.textContent = originalText;
          }, 2000);
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. CONTACT FORM HANDLER
     -------------------------------------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    var statusEl = document.getElementById('formStatus');
    if (!form || !statusEl) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('senderName') ? document.getElementById('senderName').value.trim() : '';
      var email = document.getElementById('senderEmail') ? document.getElementById('senderEmail').value.trim() : '';
      var subject = document.getElementById('msgSubject') ? document.getElementById('msgSubject').value.trim() : 'Inquiry via Portfolio';
      var message = document.getElementById('msgBody') ? document.getElementById('msgBody').value.trim() : '';

      if (!name || !email || !message) {
        statusEl.className = 'form-status-msg error';
        statusEl.textContent = 'Please fill in all required fields (Name, Email, Message).';
        statusEl.style.display = 'block';
        return;
      }

      // Compose mailto fallback link and open default client
      var mailtoUrl = 'mailto:mon.neyl108@gmail.com?subject=' +
        encodeURIComponent(subject + ' — from ' + name) +
        '&body=' + encodeURIComponent('Sender: ' + name + ' (' + email + ')\n\n' + message);

      statusEl.className = 'form-status-msg success';
      statusEl.textContent = 'Opening your email client to send message to mon.neyl108@gmail.com...';
      statusEl.style.display = 'block';

      setTimeout(function () {
        window.location.href = mailtoUrl;
      }, 400);

      form.reset();
    });
  }

  /* --------------------------------------------------------------------------
     6. ACTIVE LINK OBSERVER / SCROLL SPY
     -------------------------------------------------------------------------- */
  function initScrollSpy() {
    var navLinks = document.querySelectorAll('.site-nav .nav-link');
    var sections = document.querySelectorAll('section[id]');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + id || href.endsWith('#' + id)) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* --------------------------------------------------------------------------
     INITIALIZE ON DOM CONTENT LOADED
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileNav();
    initDynamicYear();
    initClipboardButtons();
    initContactForm();
    initScrollSpy();
  });
})();
