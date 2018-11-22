/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Script = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        function smoothScroll(event) {
          event.preventDefault();
          if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        }

        function scroller() {
          var targets = document.querySelectorAll('[data-scroll]');
          for (i = 0; i < targets.length; ++i) {
            targets[i].addEventListener("onClick", smoothScroll, false);
          }
        }

        function navigation () {
          var navToggle = document.getElementById("navigationToggle");
          var nav = document.getElementById("navigation");

          function toggleNav() {
            nav.classList.toggle("js--open");
          }
          navToggle.onclick = toggleNav;
        }



        window.onload = function(event) {
          event.preventDefault();
          var windowElement = $('html');
          var bodyElement = $('body');
          scroller();
          navigation();
        };

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        var header = document.getElementById("site-header");
        var headroom  = new Headroom(header, {
          "offset": header.innerHeight,
          "tolerance": 1,
          "classes": {
            "initial": "site-header",
            "pinned": "site-header--pinned",
            "unpinned": "site-header--unpinned",
            "top":"window--scroll-y-0",
            "notTop":"window--scroll-y-0--false",
            "bottom":"window--scroll-y-100",
            "notBottom":"window--scroll-y-100--false"
          }
        });
        headroom.init();
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page

      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Script;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
