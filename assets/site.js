/* ============================================================
   Always On Time Transportation — site runtime
   Single source of truth for the LOGO, header and footer.
   Change the logo in ONE place (the <aot-logo> component or the
   three files in assets/logo/) and it updates on every page:
   header, footer, and favicon.
   ============================================================ */
(function () {
  "use strict";

  /* -------- shared business content -------- */
  var CONTACT = {
    name: "Always On Time Transportation",
    email: "alwaysontimetransportation@gmail.com",
    hours: "24/7 with advance notice",
    offices: [
      {
        region: "Palm Beach County",
        phone: "(561) 444-7411",
        tel: "+15614447411",
        line1: "100 E Linton Blvd, Ste 153A/152A",
        line2: "Delray Beach, FL 33483"
      },
      {
        region: "Martin / St. Lucie County",
        phone: "(772) 888-6230",
        tel: "+17728886230",
        line1: "611 SW Federal Hwy, Ste D",
        line2: "Stuart, FL 34994"
      }
    ]
  };

  /* -------- logo asset paths (single source) -------- */
  /* All pages live flat in website/, assets are at assets/. */
  var LOGO = {
    lockupColor: "assets/logo/aot-lockup-color.png",
    lockupMask: "assets/logo/aot-lockup-mask.png",
    mark: "assets/logo/aot-mark.png"
  };
  var LOGO_LABEL = "Always On Time Transportation";

  /* -------- inline icon set (Lucide-style, self-contained) -------- */
  var P = {
    phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    accessibility: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-3.72-6.55"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    ship: '<path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.19-3.64a2 2 0 0 0-1.62 0L3 14a11.6 11.6 0 0 0 1.62 6"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    heart: '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-2.814.114L6.5 15C5 13.5 2 11.79 2 9.5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>'
  };
  function icon(name) {
    var d = P[name] || "";
    return '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (el) {
      if (el.dataset.iconDone) return;
      el.innerHTML = icon(el.getAttribute("data-icon"));
      el.dataset.iconDone = "1";
    });
  }

  /* ============================================================
     <aot-logo> — the reusable brand mark.
     Attributes:
       variant = "lockup" (default) | "mark"
       tone    = "color"  (default) | "reversed" | "mono"
     Size is controlled with CSS height on the element.
     ============================================================ */
  class AOTLogoEl extends HTMLElement {
    static get observedAttributes() { return ["variant", "tone", "label"]; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      var variant = this.getAttribute("variant") || "lockup";
      var tone = this.getAttribute("tone") || "color";
      var label = this.getAttribute("label") || LOGO_LABEL;
      if (tone === "color") {
        var src = variant === "mark" ? LOGO.mark : LOGO.lockupColor;
        this.innerHTML = '<img src="' + src + '" alt="' + label + '">';
      } else {
        var maskUrl = variant === "mark" ? LOGO.mark : LOGO.lockupMask;
        var cls = "aot-msk " + (tone === "reversed" ? "is-reversed" : "is-mono");
        this.innerHTML =
          '<span class="' + cls + '" role="img" aria-label="' + label + '" ' +
          'style="-webkit-mask-image:url(' + maskUrl + ');mask-image:url(' + maskUrl + ')"></span>';
      }
    }
  }
  customElements.define("aot-logo", AOTLogoEl);

  /* -------- nav model -------- */
  var NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ];

  /* ============================================================
     <site-header active="home">
     ============================================================ */
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      var active = this.getAttribute("active") || "";
      var o = CONTACT.offices[0];
      var navHtml = NAV.map(function (n) {
        return '<a href="' + n.href + '"' + (n.key === active ? ' class="is-active" aria-current="page"' : "") + ">" + n.label + "</a>";
      }).join("");
      var mLinks = NAV.map(function (n) {
        return '<a class="m-link" href="' + n.href + '">' + n.label + "</a>";
      }).join("");
      var callsHtml = CONTACT.offices.map(function (c) {
        return '<a class="btn btn-ghost" href="tel:' + c.tel + '"><span class="i" data-icon="phone"></span>' + c.phone + " · " + c.region.split(" ")[0] + "</a>";
      }).join("");

      this.innerHTML =
        '<div class="site-hdr">' +
          '<div class="container"><div class="site-hdr__bar">' +
            '<a class="site-hdr__brand" href="index.html" aria-label="' + LOGO_LABEL + ' — home"><aot-logo variant="lockup"></aot-logo></a>' +
            '<nav class="site-hdr__nav" aria-label="Primary">' + navHtml + "</nav>" +
            '<div class="site-hdr__right">' +
              '<a class="hdr-call" href="tel:' + o.tel + '"><span class="i" data-icon="phone"></span><span><small>Call now</small>' + o.phone + "</span></a>" +
              '<a class="btn btn-accent" href="book.html">Schedule a ride</a>' +
            "</div>" +
            '<button class="hdr-toggle" type="button" aria-expanded="false" aria-controls="m-menu" aria-label="Open menu"><span class="i" data-icon="menu"></span></button>' +
          "</div></div>" +
          '<div class="site-hdr__mobile" id="m-menu" hidden>' +
            mLinks +
            '<div class="m-calls">' + callsHtml +
              '<a class="btn btn-accent btn-block" href="book.html">Schedule a ride</a>' +
            "</div>" +
          "</div>" +
        "</div>";

      hydrateIcons(this);

      var hdr = this.querySelector(".site-hdr");
      var toggle = this.querySelector(".hdr-toggle");
      var menu = this.querySelector("#m-menu");
      toggle.addEventListener("click", function () {
        var open = menu.hasAttribute("hidden");
        if (open) { menu.removeAttribute("hidden"); } else { menu.setAttribute("hidden", ""); }
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        toggle.querySelector("[data-icon]").innerHTML = icon(open ? "close" : "menu");
      });
      var onScroll = function () { hdr.classList.toggle("is-scrolled", window.scrollY > 8); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }
  customElements.define("site-header", SiteHeader);

  /* ============================================================
     <site-footer>
     ============================================================ */
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var officesHtml = CONTACT.offices.map(function (c) {
        return '<div class="ftr-office">' +
          '<div class="rg">' + c.region + "</div>" +
          '<a class="ph" href="tel:' + c.tel + '"><span class="i" data-icon="phone"></span>' + c.phone + "</a>" +
          '<div style="margin-top:6px;color:#9fc0d8">' + c.line1 + "<br>" + c.line2 + "</div>" +
        "</div>";
      }).join("");

      var svcLinks = [
        ["Non-emergency medical", "services.html#nemt"],
        ["Ambulatory", "services.html#ambulatory"],
        ["Airport & cruise", "services.html#airport"],
        ["Private & events", "services.html#private"],
        ["Stretcher", "services.html#stretcher"]
      ].map(function (s) { return '<li><a href="' + s[1] + '">' + s[0] + "</a></li>"; }).join("");

      var coLinks = [
        ["About us", "about.html"],
        ["Contact", "contact.html"],
        ["Schedule a ride", "book.html"]
      ].map(function (s) { return '<li><a href="' + s[1] + '">' + s[0] + "</a></li>"; }).join("");

      this.innerHTML =
        '<footer class="site-ftr"><div class="container">' +
          '<div class="ftr-top">' +
            '<div class="ftr-brand">' +
              '<aot-logo variant="lockup" tone="reversed" label="' + LOGO_LABEL + '"></aot-logo>' +
              "<p>Comfortable, dignified non-emergency medical &amp; wheelchair transportation across Palm Beach and the Treasure Coast. Here when you need us.</p>" +
            "</div>" +
            '<div class="ftr-col"><h4>Services</h4><ul>' + svcLinks + "</ul></div>" +
            '<div class="ftr-col"><h4>Company</h4><ul>' + coLinks +
              '<li><a href="mailto:' + CONTACT.email + '">Email us</a></li></ul></div>' +
            '<div class="ftr-col"><h4>Call us</h4><div class="stack">' + officesHtml + "</div></div>" +
          "</div>" +
          '<div class="ftr-bottom">' +
            "<div>© " + new Date().getFullYear() + " " + CONTACT.name + ", Inc. All rights reserved.</div>" +
            '<div class="lic"><span class="i" data-icon="shield"></span> Licensed &amp; insured · Available ' + CONTACT.hours + "</div>" +
          "</div>" +
        "</div></footer>";

      hydrateIcons(this);
    }
  }
  customElements.define("site-footer", SiteFooter);

  /* -------- request form handler (no backend on the static preview) -------- */
  function wireForms() {
    document.querySelectorAll("form[data-ride-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var ok = form.querySelector("[data-form-ok]");
        var name = (form.querySelector('[name="name"]') || {}).value || "";
        if (ok) {
          ok.querySelector("[data-ok-name]") && (ok.querySelector("[data-ok-name]").textContent = name ? ", " + name.trim().split(" ")[0] : "");
          form.querySelector("[data-form-body]").setAttribute("hidden", "");
          ok.removeAttribute("hidden");
          ok.setAttribute("tabindex", "-1");
          ok.focus();
        }
      });
    });
  }

  /* -------- boot -------- */
  function boot() {
    hydrateIcons(document);
    wireForms();
    // set favicon from the single logo source
    var link = document.querySelector('link[rel="icon"]');
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.type = "image/png";
    link.href = LOGO.mark;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }

  window.AOT = { CONTACT: CONTACT, icon: icon, hydrateIcons: hydrateIcons };
})();
