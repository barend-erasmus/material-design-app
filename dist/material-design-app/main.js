(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boat/boat.component */ "./src/app/boat/boat.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__["TeamsComponent"] },
    { path: 'boat', component: _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__["BoatComponent"] },
    { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__["TeamsComponent"] },
    { path: 'team/:name', component: _team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-menu #appMenu=\"matMenu\">\n  <a [routerLink]=\"['teams']\" mat-menu-item>Teams</a>\n  <a [routerLink]=\"['boat']\" mat-menu-item>Boat</a>\n</mat-menu>\n\n<mat-toolbar color=\"primary\">\n  <i [matMenuTriggerFor]=\"appMenu\" class=\"material-icons\">\n    menu\n  </i>\n  <span>Volvo Ocean Race</span>\n</mat-toolbar>\n\n<div class=\"mat-app-background basic-container\" style=\"padding: 10px\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boat/boat.component */ "./src/app/boat/boat.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_5__["TeamsComponent"], _boat_boat_component__WEBPACK_IMPORTED_MODULE_6__["BoatComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_8__["SafePipe"], _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boat/boat.component.css":
/*!*****************************************!*\
  !*** ./src/app/boat/boat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hdC9ib2F0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9hdC9ib2F0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/boat/boat.component.html":
/*!******************************************!*\
  !*** ./src/app/boat/boat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin: 10px\">\n  <mat-card-header>\n    <mat-card-title>Boat Technical Specifications</mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"https://volvooceanrace-2017-18.s3.amazonaws.com/images/m100001_crop169014_1024x576_proportional_1477318583419E.jpg\">\n  <mat-card-content>\n    <p>\n      The new Volvo Ocean 65 Class has been designed, engineered and built to be a high performing and competitive race\n      machine.\n    </p>\n    <p>\n      The technical specifications for the boat are developed in conjunction with suppliers and the designers and full\n      details can be found in the Volvo Ocean 65 Class Rules located in the race noticeboard.\n    </p>\n  </mat-card-content>\n</mat-card>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"property\">\n    <th mat-header-cell *matHeaderCellDef> Property </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.property }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"value\">\n    <th mat-header-cell *matHeaderCellDef> Value </th>\n    <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"element.value | safe\"></td>\n  </ng-container>\n\n  <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr> -->\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/boat/boat.component.ts":
/*!****************************************!*\
  !*** ./src/app/boat/boat.component.ts ***!
  \****************************************/
/*! exports provided: BoatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatComponent", function() { return BoatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoatComponent = /** @class */ (function () {
    function BoatComponent() {
        this.data = [
            { property: 'Hull Length', value: '20.37 (66.83 ft)' },
            { property: 'Length Waterline (design)', value: '20.00 m (65.61 ft)' },
            { property: 'Length Overall (inc. bowsprit)', value: '22.14 m (72.63 ft)' },
            { property: 'Hull Beam Overall', value: '5.60 m (18.37 ft)' },
            { property: 'Max Draft (Keel on CL)', value: '4.78 m (15.68 ft) ' },
            { property: 'Boat Weight (empty)', value: '12,500 kg (27,5557 lb)' },
            { property: 'Keel Arrangement', value: 'Canting keel to +/- 40 degrees with 5 degrees of incline axis' },
            { property: 'Daggerboards', value: 'Twin forward daggerboards, inboard triangulation' },
            { property: 'Rudders', value: 'Twin fixed rudders - composite stocks' },
            { property: 'Aft Water Ballast (Wing Tanks)', value: 'Twin 800L ballast tanks under cockpit sides at transom' },
            { property: 'Forward Water Ballast (CL)', value: 'Single centerline 1100L ballast tank forward of mast' },
            { property: 'Rig Height', value: '30.30 m (99.4 ft)' },
            { property: 'Rig Arrangement', value: 'Twin topmast backstays and checkstays with deflectors' },
            { property: 'Bowsprit Length', value: '2.14 m (7 ft)' },
            { property: 'Mainsail Area', value: '163 m<sup>2</sup>' },
            { property: 'Working Jib Area', value: '133 m<sup>2</sup>' },
            { property: 'Upwind Sail Area', value: '468 m<sup>2</sup> (mainsail and masthead Code 0)' },
            { property: 'Downwind Sail Area', value: '578 m<sup>2</sup> (mainsail and A3)' },
            { property: 'Engine', value: 'Volvo Penta D2-75 with S-drive ' },
        ];
        this.displayedColumns = ['property', 'value'];
    }
    BoatComponent.prototype.ngOnInit = function () { };
    BoatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boat',
            template: __webpack_require__(/*! ./boat.component.html */ "./src/app/boat/boat.component.html"),
            styles: [__webpack_require__(/*! ./boat.component.css */ "./src/app/boat/boat.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], BoatComponent);
    return BoatComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamsService = /** @class */ (function () {
    function TeamsService() {
        this.teams = [
            {
                country: 'China',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'Dongfeng Race Team are back for a second shot at the Volvo Ocean Race under inspirational French skipper Charles Caudrelier, after far exceeding expectations with a podium finish in 2014-15.',
                    // tslint:disable-next-line:max-line-length
                    'This time, the team is 100% backed by Dongfeng Motor Corporation, the Chinese motor manufacturer headquartered in the Hubei province city of Wuhan – and is once again committed to developing the sport of offshore sailing in China.',
                    // tslint:disable-next-line:max-line-length
                    'Caudrelier’s mixed crew will again include Chinese sailors – and the French skipper has boosted his squad with world-class offshore ocean racers from around the globe.',
                    // tslint:disable-next-line:max-line-length
                    'Having won hearts and minds worldwide in 2014-15 with their open and innovative approach to storytelling, Dongfeng are looking to go better – and win the Volvo Ocean Race for the first time in China’s history.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/cn.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103309_crop110015_800x800_proportional_1507016031BA7C.png',
                name: 'Dongfeng',
                video: 'https://www.youtube.com/embed/8mr9MgXvDRs',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'After 45,000 miles, skipper Charles Caudrelier led his team over the finish in The Hague to the ultimate glory – the first time a Chinese campaign has won the trophy. Here\'s a look at how they did it.',
            },
            {
                country: 'Spain',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'MAPFRE return to the Volvo Ocean Race and their goal could not be clearer – to win the Volvo Ocean Race trophy for the first time in Spain’s history.',
                    // tslint:disable-next-line:max-line-length
                    'Skipper Xabi Fernández has built a mixed and multinational squad brimming with honours – from Olympic gold medallists and America’s Cup winners, to some of the most highly regarded offshore sailors on the planet.',
                    'After finishing in fourth place last time out, it’s fair to say that MAPFRE look stronger than ever before in 2017-18.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/es.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1051/m105086_crop110015_800x800_proportional_15090241658F87.png',
                name: 'MAPFRE',
                video: 'https://www.youtube.com/embed/6mVC_GGLHJY',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'Led by Xabi Fernández, MAPFRE went into the Race as title favourites and consistently posted podium after podium – taking them closer to Spain\'s first ever Race win than ever before...',
            },
            {
                country: 'Netherlands',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'No one has sailed more miles in the Volvo Ocean Race than Team Brunel skipper Bekking, who made his first appearance as a crew member on Philips Innovator back in 1985-86.',
                    // tslint:disable-next-line:max-line-length
                    'More than 30 years on, and now aged 54, Bekking’s Volvo Ocean Race obsession has only intensified – and he’s still chasing an elusive first win.',
                    // tslint:disable-next-line:max-line-length
                    'Team backers include Brunel, the Dutch-based global project management, recruitment and consultancy company, and its founder Jan Brand. Brunel are Volvo Ocean Race veterans themselves, having had their first involvement in 1997-98, and they’re the fourth major sponsor to return for a second consecutive edition in 2017-18, alongside MAPFRE, Dongfeng and Vestas.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/nl.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1049/m104862_crop110015_800x800_proportional_150885452432CC.png',
                name: 'Brunel',
                video: 'https://www.youtube.com/embed/teYGD3JEV6c',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'With eight-time veteran Bouwe Bekking and sailing superstar Peter Burling onboard, plus a mix of rookies and veterans, Team Brunel were a formidable team, rising rapidly to challenge for the trophy in the second half of the race.',
            },
            {
                country: 'Netherlands',
                description: [
                    'Team AkzoNobel is a brand-new Dutch ocean racing team backed by leading global paints and coatings company, AkzoNobel.',
                    'The team was the first entry in the 2017-18 edition - continuing the remarkable legacy of Dutch teams competing in the race.',
                    // tslint:disable-next-line:max-line-length
                    'With a grand finale in The Hague in June 2018, Dutch fans can get closer to their heroes than ever before and they are sure to be right behind the team AkzoNobel sailors as they race into their home port.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/nl.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103307_crop110015_800x800_proportional_1507016027D52A.png',
                name: 'AkzoNobel',
                video: 'https://www.youtube.com/embed/QzyREZB_xBI',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'With a mix of youth and experience, team AkzoNobel, skippered by Simeon Tienpont, chalked up impressive results around the world – picking up a new all-time 24 hour Volvo Ocean Race speed record in the process.',
            },
            {
                country: 'USA/Denmark',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'Vestas are back in the Volvo Ocean Race after their against-the-odds comeback story in 2014-15. This time, their campaign is being run in full partnership with 11th Hour Racing, a programme of The Schmidt Family Foundation working to implement real change on marine health.',
                    // tslint:disable-next-line:max-line-length
                    'Vestas 11th Hour Racing are led by the American duo of Charlie Enright and Mark Towill, who had their first taste of the Volvo Ocean Race in the last edition with Alvimedica.',
                    // tslint:disable-next-line:max-line-length
                    'They ended that race on a high, adding a victory in the final ocean leg to their two In-Port Race wins, and for this edition, they have twin goals – to do well on the water and promote a sustainable message across the world.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/usdi.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103314_crop110015_800x800_proportional_150701604287B0.png',
                name: 'Vestas',
                video: 'https://www.youtube.com/embed/AvqclgmNYeU',
                videoDescription: 'Here\'s how we inspired millions of people to turn the tide on plastic in 2017-18',
            },
            {
                country: 'United Nations',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'Turn the Tide on Plastic is a mixed, youth focused team with a strong sustainability message, led by Britain’s Dee Caffari. The campaign, backed by the principle sustainability partner the Mirpuri Foundation, and Ocean Family Foundation, is dedicated to the issue of ocean health. The campaign is also supported by Sky Ocean Rescue who recently became a media partner to the team to help raise awareness of the issues our oceans face.',
                    // tslint:disable-next-line:max-line-length
                    'The team’s guiding mission is to amplify United Nations Environment’s \'Clean Seas: Turn the Tide on Plastic\' campaign throughout the eight months of the race.',
                    // tslint:disable-next-line:max-line-length
                    'Caffari is building a multinational, 50-50 male-female squad, with the majority under 30 years of age. Alongside the sustainability focus, the messages around inclusivity in age and gender will be strong themes of a campaign that in sporting terms may not start as a favourite, but could easily surprise on the water.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/un.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1049/m104861_crop110015_800x800_proportional_1508854583BEA0.png',
                name: 'Turn the Tide on Plastic',
                video: 'https://www.youtube.com/embed/-z17up5EfQ4',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'Passionately carrying a strong #cleanseas environmental campaign, skipper Dee Caffari led a diverse, young crew determined to make an impact on and off the water.',
            },
            {
                country: 'Hong King',
                description: [
                    // tslint:disable-next-line:max-line-length
                    'Representing Hong Kong, Sun Hung Kai/Scallywag are led by experienced heavy weather sailor David Witt and go into the race with an added goal to promote competitive sailing in Asia, while building a long-lasting youth sailing legacy.',
                    // tslint:disable-next-line:max-line-length
                    'The team, backed by Hong Kong-based Seng Huang Lee and Sun Hung Kai & Co, have a core with plenty of experience sailing together and in David Witt they have a leader who knows the race well, with the Australian returning to compete for a second time, 20 years on from his debut with Innovation Kvaerner.',
                ],
                flag: 'https://www.volvooceanrace.com/static/assets/2017-18/dist/img/flags/1x1/hk.svg',
                image: 'https://www.volvooceanrace.com/static/assets/2017-18/cropped/1034/m103320_crop110015_800x800_proportional_1507024416EBA5.png',
                name: 'Sun Hung Kai/Scallywag',
                video: 'https://www.youtube.com/embed/wrQBWt8UT8I',
                // tslint:disable-next-line:max-line-length
                videoDescription: 'In the first of 7 look back films on the 2017-18 Volvo Ocean Race, here\'s the story of the first ever Hong Kong entry',
            },
        ];
    }
    TeamsService.prototype.find = function (name) {
        return this.teams.find(function (team) { return team.name === name; });
    };
    TeamsService.prototype.findAll = function () {
        return this.teams;
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], TeamsService);
    return TeamsService;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin: 10px\">\n  <mat-card-header>\n    <img mat-card-avatar src=\"{{ team.flag }}\" />\n    <mat-card-title> {{ team.name }} Review</mat-card-title>\n    <mat-card-subtitle>{{ team.country }}</mat-card-subtitle>\n  </mat-card-header>\n  <div style=\"position:relative;height:0;padding-bottom:56.27%\"><iframe [src]=\"team.video | safe\" style=\"position:absolute;width:100%;height:100%;left:0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n  <mat-card-content>\n    <p>\n      {{ team.videoDescription }}\n    </p>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent(activatedRoute, teamsService) {
        this.activatedRoute = activatedRoute;
        this.teamsService = teamsService;
        this.team = null;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.team = _this.teamsService.find(params.name);
        });
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let team of teams\" style=\"margin: 10px\">\n  <mat-card-header>\n    <img mat-card-avatar src=\"{{ team.flag }}\" />\n    <mat-card-title> {{ team.name }}</mat-card-title>\n    <mat-card-subtitle>{{ team.country }}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"{{ team.image }}\">\n  <mat-card-content>\n    <p>\n      {{ team.description[0] }}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-button [routerLink]=\"['', 'team', team.name]\">View</a>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(teamsService) {
        this.teamsService = teamsService;
        this.teams = [];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.teams = this.teamsService.findAll();
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")],
        }),
        __metadata("design:paramtypes", [_services_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\repositories\barend-erasmus\material-design-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map