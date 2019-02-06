(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-first-component-first-module"],{

/***/ "./src/app/components/first-component/first.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/first-component/first.module.ts ***!
  \************************************************************/
/*! exports provided: FirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstModule", function() { return FirstModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first.component */ "./src/app/components/first-component/first.component.ts");
/* harmony import */ var src_app_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards */ "./src/app/guards/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"],
        canDeactivate: [src_app_guards__WEBPACK_IMPORTED_MODULE_4__["ChangesInProgressGuard"]]
    }
];
var FirstModule = /** @class */ (function () {
    function FirstModule() {
    }
    FirstModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"]
            ]
        })
    ], FirstModule);
    return FirstModule;
}());



/***/ }),

/***/ "./src/app/guards/changes-in-progress.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/changes-in-progress.guard.ts ***!
  \*****************************************************/
/*! exports provided: ChangesInProgressGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesInProgressGuard", function() { return ChangesInProgressGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangesInProgressGuard = /** @class */ (function () {
    function ChangesInProgressGuard() {
    }
    ChangesInProgressGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    ChangesInProgressGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ChangesInProgressGuard);
    return ChangesInProgressGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: ChangesInProgressGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changes_in_progress_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changes-in-progress.guard */ "./src/app/guards/changes-in-progress.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangesInProgressGuard", function() { return _changes_in_progress_guard__WEBPACK_IMPORTED_MODULE_0__["ChangesInProgressGuard"]; });




/***/ })

}]);
//# sourceMappingURL=components-first-component-first-module.js.map