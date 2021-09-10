/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getStats/api.ts":
/*!*****************************!*\
  !*** ./src/getStats/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Api = void 0;
class Api {
    constructor() {
        this.playerName = 'ds-cloav';
        this.email = 'DSCloav@gmail.com';
        this.password = 'HUFE6587@jceda';
        this.getTicket();
    }
    generateB64Creds() {
        return btoa(this.email + ':' + this.password);
    }
    getTicket() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://public-ubiservices.ubi.com/v3/profiles/sessions';
            const data = {
                playerName: this.playerName
            };
            const params = {
                headers: [
                    'Content-Type: application/json; charset=utf-8',
                    'Authorization: Basic ' + this.generateB64Creds(),
                    'X-Requested-With: XMLHttpRequest',
                    'Referer: https://public-ubiservices.ubi.com/Default/Login?appId=3587dcbb-7f81-457c-9781-0e3f29f6f56a&lang=en-US&nextUrl=https%3A%2F%2Fclub.ubisoft.com%2Flogged-in.html%3Flocale%3Den-US',
                    'Content-Lenght: 19',
                    'expiration: null',
                ],
                data: data,
                method: 'POST'
            };
            console.log(url);
            console.log(data);
            console.log(params);
        });
    }
}
exports.Api = Api;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./src/public/main/main.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(/*! ../../getStats/api */ "./src/getStats/api.ts");
const api = new api_1.Api();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0aXN0aWNzLy4vc3JjL2dldFN0YXRzL2FwaS50cyIsIndlYnBhY2s6Ly9zdGF0aXN0aWNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXRpc3RpY3MvLi9zcmMvcHVibGljL21haW4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxHQUFHO0lBS2Q7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFYSxTQUFTOztZQUNyQixNQUFNLEdBQUcsR0FBRyx5REFBeUQsQ0FBQztZQUN0RSxNQUFNLElBQUksR0FBRztnQkFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDNUI7WUFFRCxNQUFNLE1BQU0sR0FBRztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsK0NBQStDO29CQUMvQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ2pELGtDQUFrQztvQkFDbEMsMExBQTBMO29CQUMxTCxvQkFBb0I7b0JBQ3BCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07YUFDZjtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNGO0FBeENELGtCQXdDQzs7Ozs7OztVQ3hDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEscUZBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwaSB7XHJcbiAgcHJpdmF0ZSBwbGF5ZXJOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBsYXllck5hbWUgPSAnZHMtY2xvYXYnO1xyXG4gICAgdGhpcy5lbWFpbCA9ICdEU0Nsb2F2QGdtYWlsLmNvbSc7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gJ0hVRkU2NTg3QGpjZWRhJztcclxuXHJcbiAgICB0aGlzLmdldFRpY2tldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUI2NENyZWRzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYnRvYSh0aGlzLmVtYWlsICsgJzonICsgdGhpcy5wYXNzd29yZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldFRpY2tldCgpIHtcclxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3B1YmxpYy11YmlzZXJ2aWNlcy51YmkuY29tL3YzL3Byb2ZpbGVzL3Nlc3Npb25zJztcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHBsYXllck5hbWU6IHRoaXMucGxheWVyTmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uOiBCYXNpYyAnICsgdGhpcy5nZW5lcmF0ZUI2NENyZWRzKCksXHJcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGg6IFhNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAnUmVmZXJlcjogaHR0cHM6Ly9wdWJsaWMtdWJpc2VydmljZXMudWJpLmNvbS9EZWZhdWx0L0xvZ2luP2FwcElkPTM1ODdkY2JiLTdmODEtNDU3Yy05NzgxLTBlM2YyOWY2ZjU2YSZsYW5nPWVuLVVTJm5leHRVcmw9aHR0cHMlM0ElMkYlMkZjbHViLnViaXNvZnQuY29tJTJGbG9nZ2VkLWluLmh0bWwlM0Zsb2NhbGUlM0Rlbi1VUycsXHJcbiAgICAgICAgJ0NvbnRlbnQtTGVuZ2h0OiAxOScsXHJcbiAgICAgICAgJ2V4cGlyYXRpb246IG51bGwnLFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBBcGkgfSBmcm9tICcuLi8uLi9nZXRTdGF0cy9hcGknO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9