/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static_src/sass/main.scss":
/*!***********************************!*\
  !*** ./static_src/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static_src/javascript/components/header-search-panel.js":
/*!*****************************************************************!*\
  !*** ./static_src/javascript/components/header-search-panel.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./static_src/javascript/components/utils.js");


class HeaderSearch {
    static selector() {
        return '[data-toggle-search-panel]';
    }

    constructor(node) {
        this.searchToggleButton = node;

        this.searchDropdown = document.querySelector('[data-search-panel]');
        this.searchDropdownContent = document.querySelector(
            '[data-search-content]',
        );
        this.searchInput = this.searchDropdown.querySelector(
            '[data-search-input]',
        );
        this.navigationMenuItems = document.querySelectorAll(
            '[data-desktop-nav-item]',
        );

        this.bindEvents();
    }

    openSearch() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showDropdownElement)(this.searchDropdown);

        // Make sure that the page is not scrollable.
        document.body.style.overflowY = 'hidden';

        // Focus on the input.
        this.searchInput.focus();
    }

    closeSearch() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideDropdownElement)(this.searchDropdown);

        // Set the page to be scrollable.
        document.body.style.overflowY = 'visible';
    }

    bindEvents() {
        this.searchToggleButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.searchDropdown.classList.contains('invisible')) {
                this.openSearch();
            } else {
                this.closeSearch();
            }
        });

        this.searchDropdown.addEventListener('click', (e) => {
            // Close the dropdown if clicking anywhere else on the page
            if (!this.searchDropdownContent.contains(e.target)) {
                this.closeSearch();
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderSearch);


/***/ }),

/***/ "./static_src/javascript/components/mobile-menu.js":
/*!*********************************************************!*\
  !*** ./static_src/javascript/components/mobile-menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./static_src/javascript/components/utils.js");


class MobileMenu {
    static selector() {
        return '[data-mobile-menu-toggle]';
    }

    constructor(node) {
        this.node = node;
        this.body = document.querySelector('body');
        this.mobileMenu = document.querySelector('[data-mobile-menu-content]');
        this.headerLogo = document.querySelector('[data-header-logo]');

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.node.addEventListener('click', () => {
            if (this.mobileMenu.classList.contains('invisible')) {
                this.open();
            } else {
                this.close();
            }
        });
    }

    open() {
        // Set the menu button to be a cross.
        this.node.classList.add('mobile-menu-is-open');
        this.headerLogo.classList.add('mobile-menu-is-open');
        this.node.setAttribute('aria-expanded', 'true');
        this.node.setAttribute('aria-label', 'close navigation menu');
        this.body.classList.add('no-scroll');

        // Make sure that the page is not scrollable. Only the drawer.
        document.body.style.overflowY = 'hidden';

        // Open the mobile menu. Mobile menu slides from the right.
        this.mobileMenu.classList.remove('invisible');
        this.mobileMenu.classList.remove('translate-x-full');
        this.mobileMenu.classList.add('translate-x-0');

        // Focus on the first link in the mobile menu.
        const firstItem = this.mobileMenu.querySelector('a');
        firstItem?.focus();
    }

    close() {
        // Set the cross button to be a menu button.
        this.node.classList.remove('mobile-menu-is-open');
        this.headerLogo.classList.remove('mobile-menu-is-open');
        this.node.setAttribute('aria-expanded', 'false');
        this.node.setAttribute('aria-label', 'Open navigation menu');
        this.body.classList.remove('no-scroll');

        // Set the page to be scrollable.
        document.body.style.overflowY = 'visible';

        // Close the mobile menu.
        this.mobileMenu.classList.add('invisible');
        this.mobileMenu.classList.add('translate-x-full');
        this.mobileMenu.classList.remove('translate-x-0');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);


/***/ }),

/***/ "./static_src/javascript/components/skip-link.js":
/*!*******************************************************!*\
  !*** ./static_src/javascript/components/skip-link.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SkipLink {
    static selector() {
        return '[data-skip-link]';
    }

    constructor(node) {
        this.skipLink = node;
        this.main = document.querySelector('main');

        if (this.skipLink && this.main) {
            this.skipLink.addEventListener('click', () => this.handleClick());
        }
    }

    handleClick() {
        this.main.setAttribute('tabindex', -1);
        this.main.addEventListener('blur', () => this.handleBlur());
        this.main.addEventListener('focusout', () => this.handleBlur());
        this.main.focus();
    }

    handleBlur() {
        this.main.removeAttribute('tabindex');
        this.main.removeEventListener('blur', this.handleBlur);
        this.main.removeEventListener('focusout', this.handleBlur);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipLink);


/***/ }),

/***/ "./static_src/javascript/components/theme-toggle.js":
/*!**********************************************************!*\
  !*** ./static_src/javascript/components/theme-toggle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ThemeToggle {
    static selector() {
        return '[data-theme-toggle]';
    }

    constructor(node) {
        this.toggleSwitch = node;
        this.currentTheme = localStorage.getItem('theme');

        if (this.currentTheme) {
            document.documentElement.classList.add('theme', this.currentTheme);
            if (this.currentTheme === 'dark') {
                this.toggleSwitch.checked = true;
            }
        }
        this.bindEvents()
    }

    bindEvents() {
        this.toggleSwitch.addEventListener('change', this.switchTheme, false);
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.classList.add('theme', 'dark');
            document.documentElement.classList.remove('theme', 'light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('theme', 'light');
            document.documentElement.classList.remove('theme', 'dark');
            localStorage.setItem('theme', 'light');
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);


/***/ }),

/***/ "./static_src/javascript/components/utils.js":
/*!***************************************************!*\
  !*** ./static_src/javascript/components/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideDropdownElement: () => (/* binding */ hideDropdownElement),
/* harmony export */   isMobileOperatingSystem: () => (/* binding */ isMobileOperatingSystem),
/* harmony export */   showDropdownElement: () => (/* binding */ showDropdownElement)
/* harmony export */ });
/**
 * Hides a dropdown element, used in desktop navigation dropdowns and the search dropdown.
 */
const hideDropdownElement = (element) => {
    element.classList.add('invisible');
    element.classList.add('-translate-y-2');
    element.classList.remove('translate-y-0');
};

/**
 * Shows a dropdown element, used in desktop navigation dropdowns and the search dropdown.
 */
const showDropdownElement = (element) => {
    element.classList.remove('invisible');
    element.classList.remove('-translate-y-2');
    element.classList.add('translate-y-0');
};

/**
 * Determine if the client is using a mobile operating system based off
 * regex matching OS names and the client's user agent.
 * Returns true if user agent matches 'iOS', 'Android' or 'Windows Phone'.
 *
 * @returns {boolean}
 */
const isMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    if (/android/i.test(userAgent)) {
        return true;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    return false;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./static_src/javascript/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme-toggle */ "./static_src/javascript/components/theme-toggle.js");
/* harmony import */ var _components_header_search_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header-search-panel */ "./static_src/javascript/components/header-search-panel.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu */ "./static_src/javascript/components/mobile-menu.js");
/* harmony import */ var _components_skip_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skip-link */ "./static_src/javascript/components/skip-link.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/main.scss */ "./static_src/sass/main.scss");








function initComponent(ComponentClass) {
    const items = document.querySelectorAll(ComponentClass.selector());
    items.forEach((item) => new ComponentClass(item));
}

document.addEventListener('DOMContentLoaded', () => {
    initComponent(_components_theme_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]);
    initComponent(_components_theme_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]);
    initComponent(_components_skip_link__WEBPACK_IMPORTED_MODULE_3__["default"]);
    initComponent(_components_header_search_panel__WEBPACK_IMPORTED_MODULE_1__["default"]);
    initComponent(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW1FOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFtQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFtQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGtCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVCeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzNCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNhO0FBQ2Y7QUFDSjs7QUFFbkI7OztBQUczQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnRUFBVztBQUM3QixrQkFBa0IsZ0VBQVc7QUFDN0Isa0JBQWtCLDZEQUFRO0FBQzFCLGtCQUFrQix1RUFBaUI7QUFDbkMsa0JBQWtCLCtEQUFVO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0Ly4vc3RhdGljX3NyYy9zYXNzL21haW4uc2Nzcz9hYzNhIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9oZWFkZXItc2VhcmNoLXBhbmVsLmpzIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0Ly4vc3RhdGljX3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvc2tpcC1saW5rLmpzIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy90aGVtZS10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC8uL3N0YXRpY19zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0Ly4vc3RhdGljX3NyYy9qYXZhc2NyaXB0L21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgaGlkZURyb3Bkb3duRWxlbWVudCwgc2hvd0Ryb3Bkb3duRWxlbWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBIZWFkZXJTZWFyY2gge1xuICAgIHN0YXRpYyBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS10b2dnbGUtc2VhcmNoLXBhbmVsXSc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLnNlYXJjaFRvZ2dsZUJ1dHRvbiA9IG5vZGU7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1wYW5lbF0nKTtcbiAgICAgICAgdGhpcy5zZWFyY2hEcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ1tkYXRhLXNlYXJjaC1jb250ZW50XScsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSB0aGlzLnNlYXJjaERyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnW2RhdGEtc2VhcmNoLWlucHV0XScsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbk1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnW2RhdGEtZGVza3RvcC1uYXYtaXRlbV0nLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIG9wZW5TZWFyY2goKSB7XG4gICAgICAgIHNob3dEcm9wZG93bkVsZW1lbnQodGhpcy5zZWFyY2hEcm9wZG93bik7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHBhZ2UgaXMgbm90IHNjcm9sbGFibGUuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgICAgICAgLy8gRm9jdXMgb24gdGhlIGlucHV0LlxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgY2xvc2VTZWFyY2goKSB7XG4gICAgICAgIGhpZGVEcm9wZG93bkVsZW1lbnQodGhpcy5zZWFyY2hEcm9wZG93bik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBwYWdlIHRvIGJlIHNjcm9sbGFibGUuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblNlYXJjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIGlmIGNsaWNraW5nIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hEcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclNlYXJjaDtcbiIsImltcG9ydCB7IGhpZGVEcm9wZG93bkVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgTW9iaWxlTWVudSB7XG4gICAgc3RhdGljIHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLW1vYmlsZS1tZW51LXRvZ2dsZV0nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2JpbGUtbWVudS1jb250ZW50XScpO1xuICAgICAgICB0aGlzLmhlYWRlckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oZWFkZXItbG9nb10nKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBtZW51IGJ1dHRvbiB0byBiZSBhIGNyb3NzLlxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW1lbnUtaXMtb3BlbicpO1xuICAgICAgICB0aGlzLmhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW1lbnUtaXMtb3BlbicpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdjbG9zZSBuYXZpZ2F0aW9uIG1lbnUnKTtcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwYWdlIGlzIG5vdCBzY3JvbGxhYmxlLiBPbmx5IHRoZSBkcmF3ZXIuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgICAgICAgLy8gT3BlbiB0aGUgbW9iaWxlIG1lbnUuIE1vYmlsZSBtZW51IHNsaWRlcyBmcm9tIHRoZSByaWdodC5cbiAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlLXgtZnVsbCcpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlLXgtMCcpO1xuXG4gICAgICAgIC8vIEZvY3VzIG9uIHRoZSBmaXJzdCBsaW5rIGluIHRoZSBtb2JpbGUgbWVudS5cbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gdGhpcy5tb2JpbGVNZW51LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgZmlyc3RJdGVtPy5mb2N1cygpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBTZXQgdGhlIGNyb3NzIGJ1dHRvbiB0byBiZSBhIG1lbnUgYnV0dG9uLlxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW1lbnUtaXMtb3BlbicpO1xuICAgICAgICB0aGlzLmhlYWRlckxvZ28uY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW1lbnUtaXMtb3BlbicpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnT3BlbiBuYXZpZ2F0aW9uIG1lbnUnKTtcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgcGFnZSB0byBiZSBzY3JvbGxhYmxlLlxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcblxuICAgICAgICAvLyBDbG9zZSB0aGUgbW9iaWxlIG1lbnUuXG4gICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZS14LWZ1bGwnKTtcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZS14LTAnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XG4iLCJjbGFzcyBTa2lwTGluayB7XG4gICAgc3RhdGljIHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gJ1tkYXRhLXNraXAtbGlua10nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgdGhpcy5za2lwTGluayA9IG5vZGU7XG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgICAgICBpZiAodGhpcy5za2lwTGluayAmJiB0aGlzLm1haW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2tpcExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMubWFpbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgICB0aGlzLm1haW4uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRoaXMuaGFuZGxlQmx1cigpKTtcbiAgICAgICAgdGhpcy5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCkpO1xuICAgICAgICB0aGlzLm1haW4uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVCbHVyKCkge1xuICAgICAgICB0aGlzLm1haW4ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB0aGlzLm1haW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1cik7XG4gICAgICAgIHRoaXMubWFpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuaGFuZGxlQmx1cik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lwTGluaztcbiIsImNsYXNzIFRoZW1lVG9nZ2xlIHtcbiAgICBzdGF0aWMgc2VsZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiAnW2RhdGEtdGhlbWUtdG9nZ2xlXSc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVN3aXRjaCA9IG5vZGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRoZW1lKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGhlbWUnLCB0aGlzLmN1cnJlbnRUaGVtZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpXG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zd2l0Y2hUaGVtZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN3aXRjaFRoZW1lKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGU7XG4iLCIvKipcbiAqIEhpZGVzIGEgZHJvcGRvd24gZWxlbWVudCwgdXNlZCBpbiBkZXNrdG9wIG5hdmlnYXRpb24gZHJvcGRvd25zIGFuZCB0aGUgc2VhcmNoIGRyb3Bkb3duLlxuICovXG5leHBvcnQgY29uc3QgaGlkZURyb3Bkb3duRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10cmFuc2xhdGUteS0yJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteS0wJyk7XG59O1xuXG4vKipcbiAqIFNob3dzIGEgZHJvcGRvd24gZWxlbWVudCwgdXNlZCBpbiBkZXNrdG9wIG5hdmlnYXRpb24gZHJvcGRvd25zIGFuZCB0aGUgc2VhcmNoIGRyb3Bkb3duLlxuICovXG5leHBvcnQgY29uc3Qgc2hvd0Ryb3Bkb3duRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10cmFuc2xhdGUteS0yJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGUteS0wJyk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgY2xpZW50IGlzIHVzaW5nIGEgbW9iaWxlIG9wZXJhdGluZyBzeXN0ZW0gYmFzZWQgb2ZmXG4gKiByZWdleCBtYXRjaGluZyBPUyBuYW1lcyBhbmQgdGhlIGNsaWVudCdzIHVzZXIgYWdlbnQuXG4gKiBSZXR1cm5zIHRydWUgaWYgdXNlciBhZ2VudCBtYXRjaGVzICdpT1MnLCAnQW5kcm9pZCcgb3IgJ1dpbmRvd3MgUGhvbmUnLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNNb2JpbGVPcGVyYXRpbmdTeXN0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcblxuICAgIC8vIFdpbmRvd3MgUGhvbmUgbXVzdCBjb21lIGZpcnN0IGJlY2F1c2UgaXRzIFVBIGFsc28gY29udGFpbnMgXCJBbmRyb2lkXCJcbiAgICBpZiAoL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGlPUyBkZXRlY3Rpb24gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTAzOTg4NS8xNzc3MTBcbiAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUaGVtZVRvZ2dsZSBmcm9tIFwiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZVwiO1xuaW1wb3J0IEhlYWRlclNlYXJjaFBhbmVsIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLXNlYXJjaC1wYW5lbFwiO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tb2JpbGUtbWVudVwiO1xuaW1wb3J0IFNraXBMaW5rIGZyb20gJy4vY29tcG9uZW50cy9za2lwLWxpbmsnO1xuXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJztcblxuXG5mdW5jdGlvbiBpbml0Q29tcG9uZW50KENvbXBvbmVudENsYXNzKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKENvbXBvbmVudENsYXNzLnNlbGVjdG9yKCkpO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IG5ldyBDb21wb25lbnRDbGFzcyhpdGVtKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaW5pdENvbXBvbmVudChUaGVtZVRvZ2dsZSk7XG4gICAgaW5pdENvbXBvbmVudChUaGVtZVRvZ2dsZSk7XG4gICAgaW5pdENvbXBvbmVudChTa2lwTGluayk7XG4gICAgaW5pdENvbXBvbmVudChIZWFkZXJTZWFyY2hQYW5lbCk7XG4gICAgaW5pdENvbXBvbmVudChNb2JpbGVNZW51KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9