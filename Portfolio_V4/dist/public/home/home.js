/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/home/home.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/eventFunctions.ts":
/*!*******************************************!*\
  !*** ./src/controllers/eventFunctions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.projectAction = exports.switchProject = exports.switchWindow = void 0;
const variables = __webpack_require__(/*! ../utilities/variables */ "./src/utilities/variables.ts");
exports.switchWindow = (bodys, btns, btn) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let afterBefore = false;
    for (const body in bodys) {
        if (bodys.hasOwnProperty(body)) {
            (_a = btns[body]) === null || _a === void 0 ? void 0 : _a.classList.remove('activeBtn');
            (_b = bodys[body]) === null || _b === void 0 ? void 0 : _b.classList.remove('activeBody');
            (_c = bodys[body]) === null || _c === void 0 ? void 0 : _c.classList.remove('afterActiveBody');
            (_d = bodys[body]) === null || _d === void 0 ? void 0 : _d.classList.remove('beforeActiveBody');
            if (bodys[btn] !== bodys[body] && afterBefore === false) {
                (_e = bodys[body]) === null || _e === void 0 ? void 0 : _e.classList.add('beforeActiveBody');
            }
            else if (bodys[btn] === bodys[body]) {
                afterBefore = true;
                (_f = btns[btn]) === null || _f === void 0 ? void 0 : _f.classList.add('activeBtn');
                (_g = bodys[btn]) === null || _g === void 0 ? void 0 : _g.classList.add('activeBody');
            }
            else if (bodys[btn] !== bodys[body] && afterBefore === true) {
                (_h = bodys[body]) === null || _h === void 0 ? void 0 : _h.classList.add('afterActiveBody');
            }
        }
    }
};
exports.switchProject = (projectType) => {
    for (const project in variables.projects) {
        if (variables.projects.hasOwnProperty(project)) {
            const projectNav = document.getElementById(project + 'Nav');
            const projectDiv = document.getElementById(project + 'Title');
            if (variables.projectsTypes[projectType] && variables.projectsTypes[projectType][project]) {
                projectNav === null || projectNav === void 0 ? void 0 : projectNav.classList.add('active');
                projectDiv === null || projectDiv === void 0 ? void 0 : projectDiv.classList.add('active');
            }
            else {
                projectNav === null || projectNav === void 0 ? void 0 : projectNav.classList.remove('active');
                projectDiv === null || projectDiv === void 0 ? void 0 : projectDiv.classList.remove('active');
            }
        }
    }
    variables.projectsDiv.removeAttribute('style');
};
exports.projectAction = (btn, title, project, mode, add, isBtn) => {
    const projectsNav = document.querySelectorAll('.projectIndicator');
    const projectsDiv = document.querySelectorAll('.projectDiv');
    for (let i = 0; i < projectsNav.length; i++) {
        const projectNav = projectsNav[i];
        const projectDiv = projectsDiv[i];
        projectNav === null || projectNav === void 0 ? void 0 : projectNav.classList.remove(mode);
        projectDiv === null || projectDiv === void 0 ? void 0 : projectDiv.classList.remove(mode);
        if (projectNav === btn && add) {
            if (isBtn) {
                let index;
                if (variables.projectsTypes.workProjects[project]) {
                    index = parseInt(variables.projectsTypes.workProjects[project]);
                }
                else if (variables.projectsTypes.techProjects[project]) {
                    index = parseInt(variables.projectsTypes.techProjects[project]);
                }
                const margin = window.innerHeight / 2 - index * 140 - 140;
                variables.projectsDiv.setAttribute('style', '--margin-top: ' + margin + 'px');
            }
            projectNav === null || projectNav === void 0 ? void 0 : projectNav.classList.add(mode);
            projectDiv === null || projectDiv === void 0 ? void 0 : projectDiv.classList.add(mode);
        }
    }
};


/***/ }),

/***/ "./src/public/home/home.ts":
/*!*********************************!*\
  !*** ./src/public/home/home.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const variables = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
const projectsInfo = __webpack_require__(/*! ../../utilities/projects.json */ "./src/utilities/projects.json");
const checkSupport = __webpack_require__(/*! ../../utilities/checkSupport */ "./src/utilities/checkSupport.ts");
const eventFunctions = __webpack_require__(/*! ../../controllers/eventFunctions */ "./src/controllers/eventFunctions.ts");
checkSupport.checkWebpSupport('lossy', function (feature, isSupported) {
    var _a, _b;
    if (isSupported) {
        (_a = variables.backgroundInner) === null || _a === void 0 ? void 0 : _a.classList.add('webp');
    }
    else {
        (_b = variables.backgroundInner) === null || _b === void 0 ? void 0 : _b.classList.add('nowebp');
    }
});
let projectsNav = '';
let projectsDiv = '';
for (const project in variables.projects) {
    if (variables.projects.hasOwnProperty(project)) {
        projectsNav += '<div id="' + project + 'Nav" class="projectIndicator ' + project + '"><div class="indicator"></div></div>';
        projectsDiv += '<div id="' + project + 'Title" class="projectDiv ' + project + '"><h2>' + projectsInfo[project].title + '</h2></div>';
    }
}
variables.projectsNav.innerHTML = projectsNav;
variables.projectsDiv.innerHTML = projectsDiv;
for (const btnType in variables.navBtnTypes) {
    if (variables.navBtnTypes.hasOwnProperty(btnType)) {
        for (const btn in variables.navBtnTypes[btnType]) {
            if (variables.navBtnTypes[btnType].hasOwnProperty(btn)) {
                variables.navBtnTypes[btnType][btn].addEventListener('click', () => {
                    eventFunctions.switchWindow(variables.bodys, variables.navBtnTypes.navBtns, btn);
                    eventFunctions.switchProject(btn + 'Projects');
                    eventFunctions.projectAction(null, null, null, 'hoverIndicator', false, false);
                    eventFunctions.projectAction(null, null, null, 'activeIndicator', false, false);
                });
            }
        }
    }
}
for (const project in variables.projects) {
    if (variables.projects.hasOwnProperty(project)) {
        const projectBtn = document.getElementById(project + 'Nav');
        const projectTitle = document.getElementById(project + 'Title');
        projectBtn === null || projectBtn === void 0 ? void 0 : projectBtn.addEventListener('mouseenter', () => {
            eventFunctions.projectAction(projectBtn, projectTitle, project, 'hoverIndicator', true, true);
        });
        projectBtn === null || projectBtn === void 0 ? void 0 : projectBtn.addEventListener('click', () => {
            eventFunctions.projectAction(projectBtn, projectTitle, project, 'activeIndicator', true, false);
        });
        projectTitle === null || projectTitle === void 0 ? void 0 : projectTitle.addEventListener('mouseenter', () => {
            eventFunctions.projectAction(projectBtn, projectTitle, project, 'hoverIndicator', true, false);
        });
    }
}


/***/ }),

/***/ "./src/utilities/checkSupport.ts":
/*!***************************************!*\
  !*** ./src/utilities/checkSupport.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWebpSupport = void 0;
exports.checkWebpSupport = (feature, callback) => {
    const kTestImages = {
        lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
        lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
        alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
        animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
    };
    const img = new Image();
    img.onload = function () {
        const result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = 'data:image/webp;base64,' + kTestImages[feature];
};


/***/ }),

/***/ "./src/utilities/projects.json":
/*!*************************************!*\
  !*** ./src/utilities/projects.json ***!
  \*************************************/
/*! exports provided: r6lookup_overlay, r6lookup_website, testTech0, testTech1, testTech2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"r6lookup_overlay\":{\"discription\":\"An Overwolf overlay to compare Tom Clancy\\\"s Rainbow Six Siege player statistics in game.\",\"links\":{\"view\":\"https://www.overwolf.com/app/R6Lookup-R6Lookup\",\"github\":\"https://github.com/TychoBrouwer\"},\"tags\":{\"0\":\"featured\",\"1\":\"apps\"},\"title\":\"R6Lookup Overlay\"},\"r6lookup_website\":{\"discription\":\"A website to quickly view and compare player statistics for Tom Clancy\\\"s Rainbow Six Siege.\",\"links\":{\"view\":\"https://www.r6lookup.com/\",\"github\":\"https://github.com/TychoBrouwer\"},\"tags\":{\"0\":\"featured\",\"1\":\"website\"},\"title\":\"R6Lookup Website\"},\"testTech0\":{\"discription\":\"An Technasium project.\",\"links\":{\"view\":\"https://www.overwolf.com/app/R6Lookup-R6Lookup\",\"github\":\"https://github.com/TychoBrouwer\"},\"tags\":{\"0\":\"technasium\"},\"title\":\"testTech0\"},\"testTech1\":{\"discription\":\"An Technasium project.\",\"links\":{\"view\":\"https://www.overwolf.com/app/R6Lookup-R6Lookup\",\"github\":\"https://github.com/TychoBrouwer\"},\"tags\":{\"0\":\"technasium\"},\"title\":\"testTech1\"},\"testTech2\":{\"discription\":\"An Technasium project.\",\"links\":{\"view\":\"https://www.overwolf.com/app/R6Lookup-R6Lookup\",\"github\":\"https://github.com/TychoBrouwer\"},\"tags\":{\"0\":\"technasium\"},\"title\":\"testTech2\"}}");

/***/ }),

/***/ "./src/utilities/variables.ts":
/*!************************************!*\
  !*** ./src/utilities/variables.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.projects = exports.projectsTypes = exports.bodys = exports.navBtnTypes = exports.projectsDiv = exports.projectsNav = exports.backgroundInner = void 0;
exports.backgroundInner = document.getElementById('backgroundInner');
exports.projectsNav = document.getElementById('projectsNav');
exports.projectsDiv = document.getElementById('projectsDiv');
exports.navBtnTypes = {
    navBtns: {
        home: document.getElementById('navBtnHome'),
        work: document.getElementById('navBtnWork'),
        tech: document.getElementById('navBtnTechnasium'),
        about: document.getElementById('navBtnAbout'),
    },
    secNavBtns: {
        home: document.getElementById('navBtnHome'),
        work: document.getElementById('viewBtnWork'),
        tech: document.getElementById('viewBtnTechnasium'),
    },
};
exports.bodys = {
    home: document.getElementById('mainBody'),
    work: document.getElementById('workBody'),
    tech: document.getElementById('workBody'),
    about: document.getElementById('aboutBody'),
};
exports.projectsTypes = {
    'workProjects': {
        'r6lookup_overlay': '0',
        'r6lookup_website': '1',
    },
    'techProjects': {
        'testTech0': '0',
        'testTech1': '1',
        'testTech2': '2',
    },
};
exports.projects = {
    'r6lookup_overlay': '',
    'r6lookup_website': '',
    'testTech0': '',
    'testTech1': '',
    'testTech2': '',
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2V2ZW50RnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaG9tZS9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvY2hlY2tTdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsb0dBQW9EO0FBR3ZDLG9CQUFZLEdBQUcsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxFQUFFOztJQUMvRCxJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUM7SUFFakMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsSUFBSSxLQUFL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LFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0NBQzlDLENBQUM7QUFFVyxxQkFBYSxHQUFRO0lBQzlCLGNBQWMsRUFBRTtRQUNaLGtCQUFrQixFQUFFLEdBQUc7UUFDdkIsa0JBQWtCLEVBQUUsR0FBRztLQUMxQjtJQUNELGNBQWMsRUFBRTtRQUNaLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFdBQVcsRUFBRSxHQUFHO0tBQ25CO0NBQ0osQ0FBQztBQUVXLGdCQUFRLEdBQVE7SUFDekIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsV0FBVyxFQUFFLEVBQUU7SUFDZixXQUFXLEVBQUUsRUFBRTtDQUNsQixDQUFDIiwiZmlsZSI6InB1YmxpYy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvaG9tZS9ob21lLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gJy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuLy8gaW1wb3J0ICogYXMgcHJvamVjdHNJbmZvIGZyb20gJy4uL3V0aWxpdGllcy9wcm9qZWN0cy5qc29uJztcblxuZXhwb3J0IGNvbnN0IHN3aXRjaFdpbmRvdyA9IChib2R5czogYW55LCBidG5zOiBhbnksIGJ0bjogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGFmdGVyQmVmb3JlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IGJvZHkgaW4gYm9keXMpIHtcbiAgICAgICAgaWYgKGJvZHlzLmhhc093blByb3BlcnR5KGJvZHkpKSB7XG4gICAgICAgICAgICBidG5zW2JvZHldPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCdG4nKTtcbiAgICAgICAgICAgIGJvZHlzW2JvZHldPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCb2R5Jyk7XG4gICAgICAgICAgICBib2R5c1tib2R5XT8uY2xhc3NMaXN0LnJlbW92ZSgnYWZ0ZXJBY3RpdmVCb2R5Jyk7XG4gICAgICAgICAgICBib2R5c1tib2R5XT8uY2xhc3NMaXN0LnJlbW92ZSgnYmVmb3JlQWN0aXZlQm9keScpO1xuXG4gICAgICAgICAgICBpZiAoYm9keXNbYnRuXSAhPT0gYm9keXNbYm9keV0gJiYgYWZ0ZXJCZWZvcmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYm9keXNbYm9keV0/LmNsYXNzTGlzdC5hZGQoJ2JlZm9yZUFjdGl2ZUJvZHknKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9keXNbYnRuXSA9PT0gYm9keXNbYm9keV0pIHtcbiAgICAgICAgICAgICAgICBhZnRlckJlZm9yZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuc1tidG5dPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCdG4nKTtcbiAgICAgICAgICAgICAgICBib2R5c1tidG5dPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCb2R5Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvZHlzW2J0bl0gIT09IGJvZHlzW2JvZHldICYmIGFmdGVyQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYm9keXNbYm9keV0/LmNsYXNzTGlzdC5hZGQoJ2FmdGVyQWN0aXZlQm9keScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN3aXRjaFByb2plY3QgPSAocHJvamVjdFR5cGU6IGFueSkgPT4ge1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiB2YXJpYWJsZXMucHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcy5wcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0KSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QgKyAnTmF2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCArICdUaXRsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVzLnByb2plY3RzVHlwZXNbcHJvamVjdFR5cGVdICYmIHZhcmlhYmxlcy5wcm9qZWN0c1R5cGVzW3Byb2plY3RUeXBlXVtwcm9qZWN0XSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROYXY/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXY/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmF2Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhcmlhYmxlcy5wcm9qZWN0c0Rpdi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEFjdGlvbiA9IChidG46IGFueSwgdGl0bGU6IGFueSwgcHJvamVjdDogYW55LCBtb2RlOiBzdHJpbmcsIGFkZDogYm9vbGVhbiwgaXNCdG46IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0SW5kaWNhdG9yJyk7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdERpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c05hdi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmF2ID0gcHJvamVjdHNOYXZbaV07XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBwcm9qZWN0c0RpdltpXTtcblxuICAgICAgICBwcm9qZWN0TmF2Py5jbGFzc0xpc3QucmVtb3ZlKG1vZGUpO1xuICAgICAgICBwcm9qZWN0RGl2Py5jbGFzc0xpc3QucmVtb3ZlKG1vZGUpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0TmF2ID09PSBidG4gJiYgYWRkKSB7XG4gICAgICAgICAgICBpZiAoaXNCdG4pIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXg6IGFueTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMucHJvamVjdHNUeXBlcy53b3JrUHJvamVjdHNbcHJvamVjdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludCh2YXJpYWJsZXMucHJvamVjdHNUeXBlcy53b3JrUHJvamVjdHNbcHJvamVjdF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVzLnByb2plY3RzVHlwZXMudGVjaFByb2plY3RzW3Byb2plY3RdKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQodmFyaWFibGVzLnByb2plY3RzVHlwZXMudGVjaFByb2plY3RzW3Byb2plY3RdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXJnaW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gaW5kZXggKiAxNDAgLSAxNDA7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnLS1tYXJnaW4tdG9wOiAnICsgbWFyZ2luICsgJ3B4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3ROYXY/LmNsYXNzTGlzdC5hZGQobW9kZSk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2Py5jbGFzc0xpc3QuYWRkKG1vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIi8vIGltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuaW1wb3J0ICogYXMgcHJvamVjdHNJbmZvIGZyb20gJy4uLy4uL3V0aWxpdGllcy9wcm9qZWN0cy5qc29uJztcblxuaW1wb3J0ICogYXMgY2hlY2tTdXBwb3J0IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jaGVja1N1cHBvcnQnO1xuaW1wb3J0ICogYXMgZXZlbnRGdW5jdGlvbnMgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvZXZlbnRGdW5jdGlvbnMnO1xuXG5jaGVja1N1cHBvcnQuY2hlY2tXZWJwU3VwcG9ydCgnbG9zc3knLCBmdW5jdGlvbihmZWF0dXJlOiBzdHJpbmcsIGlzU3VwcG9ydGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHZhcmlhYmxlcy5iYWNrZ3JvdW5kSW5uZXI/LmNsYXNzTGlzdC5hZGQoJ3dlYnAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZXMuYmFja2dyb3VuZElubmVyPy5jbGFzc0xpc3QuYWRkKCdub3dlYnAnKTtcbiAgICB9XG59KTtcblxubGV0IHByb2plY3RzTmF2OiBzdHJpbmcgPSAnJztcbmxldCBwcm9qZWN0c0Rpdjogc3RyaW5nID0gJyc7XG5mb3IgKGNvbnN0IHByb2plY3QgaW4gdmFyaWFibGVzLnByb2plY3RzKSB7XG4gICAgaWYgKHZhcmlhYmxlcy5wcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0KSkge1xuICAgICAgICBwcm9qZWN0c05hdiArPSAnPGRpdiBpZD1cIicgKyBwcm9qZWN0ICsgJ05hdlwiIGNsYXNzPVwicHJvamVjdEluZGljYXRvciAnICsgcHJvamVjdCArICdcIj48ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+PC9kaXY+JztcbiAgICAgICAgcHJvamVjdHNEaXYgKz0gJzxkaXYgaWQ9XCInICsgcHJvamVjdCArICdUaXRsZVwiIGNsYXNzPVwicHJvamVjdERpdiAnICsgcHJvamVjdCArICdcIj48aDI+JyArIChwcm9qZWN0c0luZm8gYXMgYW55KVtwcm9qZWN0XS50aXRsZSArICc8L2gyPjwvZGl2Pic7XG4gICAgfVxufVxudmFyaWFibGVzLnByb2plY3RzTmF2LmlubmVySFRNTCA9IHByb2plY3RzTmF2O1xudmFyaWFibGVzLnByb2plY3RzRGl2LmlubmVySFRNTCA9IHByb2plY3RzRGl2O1xuXG5mb3IgKGNvbnN0IGJ0blR5cGUgaW4gdmFyaWFibGVzLm5hdkJ0blR5cGVzKSB7XG4gICAgaWYgKHZhcmlhYmxlcy5uYXZCdG5UeXBlcy5oYXNPd25Qcm9wZXJ0eShidG5UeXBlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGJ0biBpbiB2YXJpYWJsZXMubmF2QnRuVHlwZXNbYnRuVHlwZV0pIHtcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZXMubmF2QnRuVHlwZXNbYnRuVHlwZV0uaGFzT3duUHJvcGVydHkoYnRuKSkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5uYXZCdG5UeXBlc1tidG5UeXBlXVtidG5dLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudEZ1bmN0aW9ucy5zd2l0Y2hXaW5kb3codmFyaWFibGVzLmJvZHlzLCB2YXJpYWJsZXMubmF2QnRuVHlwZXMubmF2QnRucywgYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRGdW5jdGlvbnMuc3dpdGNoUHJvamVjdChidG4gKyAnUHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRGdW5jdGlvbnMucHJvamVjdEFjdGlvbihudWxsLCBudWxsLCBudWxsLCAnaG92ZXJJbmRpY2F0b3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEZ1bmN0aW9ucy5wcm9qZWN0QWN0aW9uKG51bGwsIG51bGwsIG51bGwsICdhY3RpdmVJbmRpY2F0b3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mb3IgKGNvbnN0IHByb2plY3QgaW4gdmFyaWFibGVzLnByb2plY3RzKSB7XG4gICAgaWYgKHZhcmlhYmxlcy5wcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0KSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCArICdOYXYnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdCArICdUaXRsZScpO1xuXG4gICAgICAgIHByb2plY3RCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudEZ1bmN0aW9ucy5wcm9qZWN0QWN0aW9uKHByb2plY3RCdG4sIHByb2plY3RUaXRsZSwgcHJvamVjdCwgJ2hvdmVySW5kaWNhdG9yJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRGdW5jdGlvbnMucHJvamVjdEFjdGlvbihwcm9qZWN0QnRuLCBwcm9qZWN0VGl0bGUsIHByb2plY3QsICdhY3RpdmVJbmRpY2F0b3InLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RUaXRsZT8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50RnVuY3Rpb25zLnByb2plY3RBY3Rpb24ocHJvamVjdEJ0biwgcHJvamVjdFRpdGxlLCBwcm9qZWN0LCAnaG92ZXJJbmRpY2F0b3InLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjaGVja1dlYnBTdXBwb3J0ID0gKGZlYXR1cmU6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4ge1xuICAgIGNvbnN0IGtUZXN0SW1hZ2VzOiBhbnkgPSB7XG4gICAgICAgIGxvc3N5OiAnVWtsR1JpSUFBQUJYUlVKUVZsQTRJQllBQUFBd0FRQ2RBU29CQUFFQURzRCtKYVFBQTNBQUFBQUEnLFxuICAgICAgICBsb3NzbGVzczogJ1VrbEdSaG9BQUFCWFJVSlFWbEE0VEEwQUFBQXZBQUFBRUFjUUVSR0lpUDRIQUE9PScsXG4gICAgICAgIGFscGhhOiAnVWtsR1Jrb0FBQUJYUlVKUVZsQTRXQW9BQUFBUUFBQUFBQUFBQUFBQVFVeFFTQXdBQUFBUkJ4QVIvUTlFUlA4REFBQldVRGdnR0FBQUFCUUJBSjBCS2dFQUFRQUFBUDRBQUEzQUFQN210UUFBQUE9PScsXG4gICAgICAgIGFuaW1hdGlvbjogJ1VrbEdSbElBQUFCWFJVSlFWbEE0V0FvQUFBQVNBQUFBQUFBQUFBQUFRVTVKVFFZQUFBRC8vLy8vQUFCQlRrMUdKZ0FBQUFBQUFBQUFBQUFBQUFBQUFHUUFBQUJXVURoTURRQUFBQzhBQUFBUUJ4QVJFWWlJL2djQScsXG4gICAgfTtcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoaW1nLndpZHRoID4gMCkgJiYgKGltZy5oZWlnaHQgPiAwKTtcbiAgICAgICAgY2FsbGJhY2soZmVhdHVyZSwgcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2soZmVhdHVyZSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsJyArIGtUZXN0SW1hZ2VzW2ZlYXR1cmVdO1xufTtcbiIsImV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kSW5uZXI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW5uZXInKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0c05hdjogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTmF2Jyk7XG5leHBvcnQgY29uc3QgcHJvamVjdHNEaXY6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0RpdicpO1xuXG5leHBvcnQgY29uc3QgbmF2QnRuVHlwZXM6IGFueSA9IHtcbiAgICBuYXZCdG5zOiB7XG4gICAgICAgIGhvbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG5Ib21lJyksXG4gICAgICAgIHdvcms6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG5Xb3JrJyksXG4gICAgICAgIHRlY2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdG5UZWNobmFzaXVtJyksXG4gICAgICAgIGFib3V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QnRuQWJvdXQnKSxcbiAgICB9LFxuICAgIHNlY05hdkJ0bnM6IHtcbiAgICAgICAgaG9tZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkJ0bkhvbWUnKSxcbiAgICAgICAgd29yazogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdCdG5Xb3JrJyksXG4gICAgICAgIHRlY2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3QnRuVGVjaG5hc2l1bScpLFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYm9keXM6IGFueSA9IHtcbiAgICBob21lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkJvZHknKSxcbiAgICB3b3JrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya0JvZHknKSxcbiAgICB0ZWNoOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya0JvZHknKSxcbiAgICBhYm91dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Qm9keScpLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzVHlwZXM6IGFueSA9IHtcbiAgICAnd29ya1Byb2plY3RzJzoge1xuICAgICAgICAncjZsb29rdXBfb3ZlcmxheSc6ICcwJyxcbiAgICAgICAgJ3I2bG9va3VwX3dlYnNpdGUnOiAnMScsXG4gICAgfSxcbiAgICAndGVjaFByb2plY3RzJzoge1xuICAgICAgICAndGVzdFRlY2gwJzogJzAnLFxuICAgICAgICAndGVzdFRlY2gxJzogJzEnLFxuICAgICAgICAndGVzdFRlY2gyJzogJzInLFxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IGFueSA9IHtcbiAgICAncjZsb29rdXBfb3ZlcmxheSc6ICcnLFxuICAgICdyNmxvb2t1cF93ZWJzaXRlJzogJycsXG4gICAgJ3Rlc3RUZWNoMCc6ICcnLFxuICAgICd0ZXN0VGVjaDEnOiAnJyxcbiAgICAndGVzdFRlY2gyJzogJycsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==