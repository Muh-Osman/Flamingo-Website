// Outline for Search box on DarkMode
const parent = document.querySelector('.search-box')
const input = document.querySelector('.input-search')

input.addEventListener('focus', () => parent.style.outline = "var(--search-input-outline)")
input.addEventListener('blur', () => parent.style.outline = "none")



// Save and toggle (Dark Mode & Check box) in local storage
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

//On Load check if User checked input before
window.onload = load();
function load() {
    var checked = JSON.parse(localStorage.getItem('dark-mode-toggle'));
    document.getElementById("dark-mode-toggle").checked = checked;
}

const enableDarkMode = () => {
    // Delay a function
    setTimeout(function () {
        // 1. Add the class to the body
        document.body.classList.add('darkmode');
    }, 400);

    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // Delay a function 
    setTimeout(function () {
        // 1. Remove the class from the body
        document.body.classList.remove('darkmode');
    }, 400);

    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);

}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {

    // Delay a function
    setTimeout(function () {

        enableDarkMode();

    }, 400);

}

// When someone clicks the button
darkModeToggle.addEventListener('change', () => {

    navigator.vibrate(99); // vibrate for 99ms

    // set checked input in LocalStorage if User click on it
    localStorage.setItem('dark-mode-toggle', darkModeToggle.checked);

    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});




// Hide Dot Up Notification Bill
document.getElementById('dot-func').addEventListener('click', () => {
    document.querySelector(".notifi-dot").style.display = "none";
});











// From Bootstrab Carousel


/*!
  * Bootstrap carousel.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/index'), require('./dom/event-handler'), require('./dom/manipulator'), require('./dom/selector-engine'), require('./util/swipe'), require('./base-component')) :
        typeof define === 'function' && define.amd ? define(['./util/index', './dom/event-handler', './dom/manipulator', './dom/selector-engine', './util/swipe', './base-component'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.Index, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Swipe, global.BaseComponent));
})(this, (function (index, EventHandler, Manipulator, SelectorEngine, Swipe, BaseComponent) {
    'use strict';

    const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

    const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
    const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
    const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
    const Swipe__default = /*#__PURE__*/_interopDefaultLegacy(Swipe);
    const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.2.2): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * Constants
     */

    const NAME = 'carousel';
    const DATA_KEY = 'bs.carousel';
    const EVENT_KEY = `.${DATA_KEY}`;
    const DATA_API_KEY = '.data-api';
    const ARROW_LEFT_KEY = 'ArrowLeft';
    const ARROW_RIGHT_KEY = 'ArrowRight';
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    const ORDER_NEXT = 'next';
    const ORDER_PREV = 'prev';
    const DIRECTION_LEFT = 'left';
    const DIRECTION_RIGHT = 'right';
    const EVENT_SLIDE = `slide${EVENT_KEY}`;
    const EVENT_SLID = `slid${EVENT_KEY}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
    const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
    const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
    const CLASS_NAME_CAROUSEL = 'carousel';
    const CLASS_NAME_ACTIVE = 'active';
    const CLASS_NAME_SLIDE = 'slide';
    const CLASS_NAME_END = 'carousel-item-end';
    const CLASS_NAME_START = 'carousel-item-start';
    const CLASS_NAME_NEXT = 'carousel-item-next';
    const CLASS_NAME_PREV = 'carousel-item-prev';
    const SELECTOR_ACTIVE = '.active';
    const SELECTOR_ITEM = '.carousel-item';
    const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
    const SELECTOR_ITEM_IMG = '.carousel-item img';
    const SELECTOR_INDICATORS = '.carousel-indicators';
    const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const KEY_TO_DIRECTION = {
        [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
        [ARROW_RIGHT_KEY]: DIRECTION_LEFT
    };
    const Default = {
        interval: 5000,
        keyboard: true,
        pause: 'hover',
        ride: false,
        touch: true,
        wrap: true
    };
    const DefaultType = {
        interval: '(number|boolean)',
        // TODO:v6 remove boolean support
        keyboard: 'boolean',
        pause: '(string|boolean)',
        ride: '(boolean|string)',
        touch: 'boolean',
        wrap: 'boolean'
    };
    /**
     * Class definition
     */

    class Carousel extends BaseComponent__default.default {
        constructor(element, config) {
            super(element, config);
            this._interval = null;
            this._activeElement = null;
            this._isSliding = false;
            this.touchTimeout = null;
            this._swipeHelper = null;
            this._indicatorsElement = SelectorEngine__default.default.findOne(SELECTOR_INDICATORS, this._element);

            this._addEventListeners();

            if (this._config.ride === CLASS_NAME_CAROUSEL) {
                this.cycle();
            }
        } // Getters


        static get Default() {
            return Default;
        }

        static get DefaultType() {
            return DefaultType;
        }

        static get NAME() {
            return NAME;
        } // Public


        next() {
            this._slide(ORDER_NEXT);
        }

        nextWhenVisible() {
            // FIXME TODO use `document.visibilityState`
            // Don't call next when the page isn't visible
            // or the carousel or its parent isn't visible
            if (!document.hidden && index.isVisible(this._element)) {
                this.next();
            }
        }

        prev() {
            this._slide(ORDER_PREV);
        }

        pause() {
            if (this._isSliding) {
                index.triggerTransitionEnd(this._element);
            }

            this._clearInterval();
        }

        cycle() {
            this._clearInterval();

            this._updateInterval();

            this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }

        _maybeEnableCycle() {
            if (!this._config.ride) {
                return;
            }

            if (this._isSliding) {
                EventHandler__default.default.one(this._element, EVENT_SLID, () => this.cycle());
                return;
            }

            this.cycle();
        }

        to(index) {
            const items = this._getItems();

            if (index > items.length - 1 || index < 0) {
                return;
            }

            if (this._isSliding) {
                EventHandler__default.default.one(this._element, EVENT_SLID, () => this.to(index));
                return;
            }

            const activeIndex = this._getItemIndex(this._getActive());

            if (activeIndex === index) {
                return;
            }

            const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

            this._slide(order, items[index]);
        }

        dispose() {
            if (this._swipeHelper) {
                this._swipeHelper.dispose();
            }

            super.dispose();
        } // Private


        _configAfterMerge(config) {
            config.defaultInterval = config.interval;
            return config;
        }

        _addEventListeners() {
            if (this._config.keyboard) {
                EventHandler__default.default.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
            }

            if (this._config.pause === 'hover') {
                EventHandler__default.default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
                EventHandler__default.default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
            }

            if (this._config.touch && Swipe__default.default.isSupported()) {
                this._addTouchEventListeners();
            }
        }

        _addTouchEventListeners() {
            for (const img of SelectorEngine__default.default.find(SELECTOR_ITEM_IMG, this._element)) {
                EventHandler__default.default.on(img, EVENT_DRAG_START, event => event.preventDefault());
            }

            const endCallBack = () => {
                if (this._config.pause !== 'hover') {
                    return;
                } // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling


                this.pause();

                if (this.touchTimeout) {
                    clearTimeout(this.touchTimeout);
                }

                this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            };

            const swipeConfig = {
                leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
                rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
                endCallback: endCallBack
            };
            this._swipeHelper = new Swipe__default.default(this._element, swipeConfig);
        }

        _keydown(event) {
            if (/input|textarea/i.test(event.target.tagName)) {
                return;
            }

            const direction = KEY_TO_DIRECTION[event.key];

            if (direction) {
                event.preventDefault();

                this._slide(this._directionToOrder(direction));
            }
        }

        _getItemIndex(element) {
            return this._getItems().indexOf(element);
        }

        _setActiveIndicatorElement(index) {
            if (!this._indicatorsElement) {
                return;
            }

            const activeIndicator = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
            activeIndicator.removeAttribute('aria-current');
            const newActiveIndicator = SelectorEngine__default.default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

            if (newActiveIndicator) {
                newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
                newActiveIndicator.setAttribute('aria-current', 'true');
            }
        }

        _updateInterval() {
            const element = this._activeElement || this._getActive();

            if (!element) {
                return;
            }

            const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
            this._config.interval = elementInterval || this._config.defaultInterval;
        }

        _slide(order, element = null) {
            if (this._isSliding) {
                return;
            }

            const activeElement = this._getActive();

            const isNext = order === ORDER_NEXT;
            const nextElement = element || index.getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

            if (nextElement === activeElement) {
                return;
            }

            const nextElementIndex = this._getItemIndex(nextElement);

            const triggerEvent = eventName => {
                return EventHandler__default.default.trigger(this._element, eventName, {
                    relatedTarget: nextElement,
                    direction: this._orderToDirection(order),
                    from: this._getItemIndex(activeElement),
                    to: nextElementIndex
                });
            };

            const slideEvent = triggerEvent(EVENT_SLIDE);

            if (slideEvent.defaultPrevented) {
                return;
            }

            if (!activeElement || !nextElement) {
                // Some weirdness is happening, so we bail
                // todo: change tests that use empty divs to avoid this check
                return;
            }

            const isCycling = Boolean(this._interval);
            this.pause();
            this._isSliding = true;

            this._setActiveIndicatorElement(nextElementIndex);

            this._activeElement = nextElement;
            const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
            const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
            nextElement.classList.add(orderClassName);
            index.reflow(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);

            const completeCallBack = () => {
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE);
                activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
                this._isSliding = false;
                triggerEvent(EVENT_SLID);
            };

            this._queueCallback(completeCallBack, activeElement, this._isAnimated());

            if (isCycling) {
                this.cycle();
            }
        }

        _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_SLIDE);
        }

        _getActive() {
            return SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
        }

        _getItems() {
            return SelectorEngine__default.default.find(SELECTOR_ITEM, this._element);
        }

        _clearInterval() {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
        }

        _directionToOrder(direction) {
            if (index.isRTL()) {
                return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
            }

            return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
        }

        _orderToDirection(order) {
            if (index.isRTL()) {
                return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
            }

            return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
        } // Static


        static jQueryInterface(config) {
            return this.each(function () {
                const data = Carousel.getOrCreateInstance(this, config);

                if (typeof config === 'number') {
                    data.to(config);
                    return;
                }

                if (typeof config === 'string') {
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
                        throw new TypeError(`No method named "${config}"`);
                    }

                    data[config]();
                }
            });
        }

    }
    /**
     * Data API implementation
     */


    EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
        const target = index.getElementFromSelector(this);

        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
            return;
        }

        event.preventDefault();
        const carousel = Carousel.getOrCreateInstance(target);
        const slideIndex = this.getAttribute('data-bs-slide-to');

        if (slideIndex) {
            carousel.to(slideIndex);

            carousel._maybeEnableCycle();

            return;
        }

        if (Manipulator__default.default.getDataAttribute(this, 'slide') === 'next') {
            carousel.next();

            carousel._maybeEnableCycle();

            return;
        }

        carousel.prev();

        carousel._maybeEnableCycle();
    });
    EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
        const carousels = SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);

        for (const carousel of carousels) {
            Carousel.getOrCreateInstance(carousel);
        }
    });
    /**
     * jQuery
     */

    index.defineJQueryPlugin(Carousel);

    return Carousel;

}));
//# sourceMappingURL=carousel.js.map








// Carousel Indicator
const myCarousel = document.getElementById("carouselExampleIndicators");
const carouselIndicators = myCarousel.querySelectorAll(
    ".carousel-indicators button span"
);
let intervalID;

const carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("load", function () {
    fillCarouselIndicator(1);
});

myCarousel.addEventListener("slide.bs.carousel", function (e) {
    let index = e.to;
    fillCarouselIndicator(++index);
});

function fillCarouselIndicator(index) {
    let i = 0;
    for (const carouselIndicator of carouselIndicators) {
        carouselIndicator.style.width = 0;
    }
    clearInterval(intervalID);
    carousel.pause();

    intervalID = setInterval(function () {
        i++;

        myCarousel.querySelector(".carousel-indicators .active span").style.width =
            i + "%";

        if (i >= 100) {
            // i = 0; -> just in case
            carousel.next();
        }
    }, 50);
}



// Focus on Search input in top page onclick on search icon in drop nav
let searchInput = document.querySelector('.input-search');
let searchIconInNav = document.querySelector('.search-icon-drop-nav');

searchIconInNav.addEventListener("click", () => {

    searchInput.focus();
    // parent define at the beginning of this page
    parent.style.outline = "1px solid #8b12fc";
});



// Add active-btn class to button onclick to Nav Categories
let btn = document.querySelectorAll(".cat-items");
let btnArray = Array.from(btn);

btnArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        btnArray.forEach((el) => {
            el.classList.remove("active-btn");
        })
        e.currentTarget.classList.add("active-btn");


        // Prevent reload page when click on Nav buttons that take you to the same page you are in.
        let activeBtn = document.querySelector(".active-btn");
        let currentLocation = location.href;

        if (activeBtn.href === currentLocation) {
            e.preventDefault();
        }

    });
});



// Mobile Navbar add active class
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('act'));
    this.classList.add('act');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));




// Mobile Navbar when click on search icon
let mobPhoneNav = document.querySelector('.mob-phone-nav');
let searchInputMobile = document.querySelector('.search-input-mobile');
let searchInMobNav = document.querySelector('.search-in-mob-nav');
let inputSearchIn = document.querySelector('.input-search-in');
let searchIconNavMobLink = document.querySelector('.search-icon-nav-mob-link');
let searchBoxMob = document.querySelector('.search-box-mob');
let searchMobForm = document.querySelector('.search-mob-form');

searchInMobNav.addEventListener('click', pullIn);

function pullIn() {
    // if you are NOT in top of site => Show float search bar & hide Mobile Navbar & hide category shelve if shown
    if (window.scrollY >= 122) {
        mobPhoneNav.style.bottom = "-180px";
        searchInputMobile.style.top = "12px";
        inputSearchIn.focus();
        searchBoxMob.style.outline = "var(--search-input-outline)";

    } else {
        // Focus on orginal search bar & hide Mobile Navbar
        mobPhoneNav.style.bottom = "-180px";
        input.focus();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}



// on scroll mobile => blur & hide the input then show mobile navbar

window.addEventListener('touchmove', pullOutOne);

function pullOutOne() {

    if (input === document.activeElement || inputSearchIn === document.activeElement) {

        searchInputMobile.style.top = "-60px";
        mobPhoneNav.style.bottom = "-70px";
        inputSearchIn.blur();
        input.blur();
    }

}



// on blur => Reshow mobile navbar & hide float search bar & reset value of float search
inputSearchIn.addEventListener('blur', pullOutTwo);
function pullOutTwo() {
    searchInputMobile.style.top = "-60px";
    mobPhoneNav.style.bottom = "-70px";
    searchMobForm.reset();
}

// on blur => Reshow mobile navbar
input.addEventListener('blur', pullOutThree);
function pullOutThree() {
    mobPhoneNav.style.bottom = "-70px";
}

// on focus => hide mobile navbar & category shelve if shown
input.addEventListener('focus', pullOutFour);
function pullOutFour() {
    mobPhoneNav.style.bottom = "-180px";
}



// Category shelve under mobile Navbar
let categoryBtnInMobNav = document.querySelector('.category-btn-in-mob-nav');

categoryBtnInMobNav.addEventListener('click', showCatShelve);

function showCatShelve() {

    if (mobPhoneNav.style.bottom < "0") {
        mobPhoneNav.style.bottom = "0";

    } else {
        mobPhoneNav.style.bottom == "0";
        mobPhoneNav.style.bottom = "-70px";
    }

}




// Swiped-down mobile navbar to hide Category shelve

(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== 'function') {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    /**
     * Fires swiped event if swipe detected on touchend
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                touchType: (changedTouches[0] || {}).touchType || 'direct',
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    /**
     * Records current location on touchstart event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    /**
     * Records location diff in px on touchmove event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    /**
     * Gets attribute off HTML element or nearest parent
     * @param {object} el - HTML element to retrieve attribute from
     * @param {string} attributeName - name of the attribute
     * @param {any} defaultValue - default value to return if no match found
     * @returns {any} attribute value or defaultValue
     */
    function getNearestAttribute(el, attributeName, defaultValue) {

        // walk up the dom tree looking for attributeName
        while (el && el !== document.documentElement) {

            var attributeValue = el.getAttribute(attributeName);

            if (attributeValue) {
                return attributeValue;
            }

            el = el.parentNode;
        }

        return defaultValue;
    }

}(window, document));

// This is the event(swiped-down)
mobPhoneNav.addEventListener('swiped-down', () => {
    mobPhoneNav.style.bottom = "-70px";
});



// Zoom out/in "How it work section" on scrolling
const zoomOut = document.querySelector(".how-it-works-section")
const newSec = document.querySelector('.new-sec')
const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        zoomOut.style.transform = "scale(.96) translateY(-10px)";
        return
    }
    zoomOut.style.transform = "scale(1) translateY(0)";
}, {
    root: null,
    threshold: 0.15, // set offset 0.1 means trigger if atleast 10% of element in viewport
})
observer.observe(newSec);


// Add shortcut for website
document.addEventListener("keydown", e => {
    //  Dark mode ==> (D or ي)
    if ((e.key.toLowerCase() === "d" || e.key === "ي") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        darkModeToggle.click();
    }
    // Search ==> (S or س)
    else if ((e.key.toLowerCase() === "s" || e.key === "س") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        input.focus();
        e.preventDefault();
    }
    // Home ==> (h or ا)
    else if ((e.key.toLowerCase() === "h" || e.key === "ا") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#home').click();
    }
    // Phone ==> (p or ح)
    else if ((e.key.toLowerCase() === "p" || e.key === "ح") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#phone').click();
    }
    // Computer ==> (c or ؤ)
    else if ((e.key.toLowerCase() === "c" || e.key === "ؤ") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#computer').click();
    }
    // Watches ==> (w or ص)
    else if ((e.key.toLowerCase() === "w" || e.key === "ص") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#watch').click();
    }
    // Camera ==> (k or ن)
    else if ((e.key.toLowerCase() === "k" || e.key === "ن") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#camera').click();
    }
    // Gaming ==> (g or ل)
    else if ((e.key.toLowerCase() === "g" || e.key === "ل") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#gaming').click();
    }
    // Tablets ==> (t or ف)
    else if ((e.key.toLowerCase() === "t" || e.key === "ف") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#tablet').click();
    }
    // Tv's ==> (v or ر)
    else if ((e.key.toLowerCase() === "v" || e.key === "ر") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#tv').click();
    }
    // Rent ==> (r or ق)
    else if ((e.key.toLowerCase() === "r" || e.key === "ق") && input !== document.activeElement && inputSearchIn !== document.activeElement) {
        document.querySelector('#rent').click();
    }
});


// Hide Mobile navbar when scroll to bottom of page to show copyright behind him
const footer = document.querySelector("footer")
const observertwo = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        mobPhoneNav.style.bottom = "-180px";
        return
    }
    mobPhoneNav.style.bottom = "-70px";
}, {
    root: null,
    threshold: 0.6, // set offset 0.1 means trigger if atleast 10% of element in viewport
})
observertwo.observe(footer);



// Focus on shelves scroller on hover to allow scroll by keyboard arrows
const focusOnScroller = document.querySelectorAll('.items-scroller, .items-down-scroller');

const hoverHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
        e.target.focus();
    }, 0);
};

for (var i = 0; i < focusOnScroller.length; i++) {
    focusOnScroller[i].addEventListener('mouseenter', hoverHandler);
}







// Prevent Default (Scroll to Top) when click mobile Navbar
document.querySelector('.category-btn-in-mob-nav a').addEventListener("click", function (event) {
    event.preventDefault()
});
document.querySelector('.search-in-mob-nav a').addEventListener("click", function (event) {
    event.preventDefault()
});