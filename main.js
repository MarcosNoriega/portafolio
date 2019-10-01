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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n<app-home></app-home>\n<!--<router-outlet></router-outlet>-->\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portafolio-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_contenido_contenido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contenido/contenido.component */ "./src/app/components/contenido/contenido.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/habilidades/habilidades.component */ "./src/app/components/habilidades/habilidades.component.ts");
/* harmony import */ var _components_entretenimiento_entretenimiento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/entretenimiento/entretenimiento.component */ "./src/app/components/entretenimiento/entretenimiento.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_contenido_contenido_component__WEBPACK_IMPORTED_MODULE_8__["ContenidoComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_habilidades_habilidades_component__WEBPACK_IMPORTED_MODULE_10__["HabilidadesComponent"],
                _components_entretenimiento_entretenimiento_component__WEBPACK_IMPORTED_MODULE_11__["EntretenimientoComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contenido/contenido.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contenido/contenido.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVuaWRvL2NvbnRlbmlkby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contenido/contenido.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contenido/contenido.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--<a name=\"sobreMi\"></a>-->\n  <section class=\"wow fadeInUp\" id=\"sobreMi\">\n      <h3 class=\"title text-center\">Sobre mi</h3>\n      <p class=\"text text-center\">Soy un desarrollador de <strong>aplicaciones web</strong> y <strong>programas de escritorios</strong>. Me gusta estudiar de forma autodidacta ya que puedo ir a mi ritmo. Y ademas por que pienzo que hoy en día esta habilidad es impresindible para un programador, debido a las actualizaciones constantes de la tecnología.</p>\n      <p class=\"text text-center\">Me fascina mucho el mundo de la programación. Me gusta aprender cosas nueva y compartir mis conocimientos.</p>\n  </section>\n\n  <section>\n    <h3 class=\"title text-center\" id=\"proyectos\">Projectos</h3>\n            <!-- <p class=\"text\">Proyectos personales. Todos alojados en GitHub.</p> -->\n            <div class=\"row mt-3\" style=\"color: black\">\n              <div class=\"card-columns mb-4\">\n                <div class=\"card wow flipInY hvr-grow mt-3\" *ngFor=\"let proyecto of proyectos\">\n                  <a class=\"fancybox\" [rel]=\"proyecto.fancybox\" [href]=\"proyecto.imagen\"><img [src]=\"proyecto.imagen\" class=\"card-img-top\" alt=\"\"></a>\n                  <div class=\"card-body\">\n                    <h3 class=\"title\">{{proyecto.titulo}}</h3>\n                    <p class=\"text\">{{proyecto.descripcion}}</p>\n                    <ul>\n                      <li *ngFor=\"let tecnologia of proyecto.tecnologias\">{{tecnologia}}</li>\n                    </ul>\n                  </div>\n                  <a *ngFor=\"let imagen of proyecto.imagenes\" class=\"fancybox\" [href]=\"imagen\" [rel]=\"proyecto.fancybox\"></a>\n                  <div class=\"card-footer\" *ngIf=\"proyecto.enlaces.length !== 0\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-4\" *ngFor=\"let enlace of proyecto.enlaces\">\n                        <a [href]=\"enlace.url\" target=\"_blank\"><span class=\"badge badge-dark mx-auto\">Ir a {{enlace.nombre}}</span></a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n              \n  </section>\n</div>"

/***/ }),

/***/ "./src/app/components/contenido/contenido.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contenido/contenido.component.ts ***!
  \*************************************************************/
/*! exports provided: ContenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenidoComponent", function() { return ContenidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");



var ContenidoComponent = /** @class */ (function () {
    function ContenidoComponent(proyectoService) {
        var _this = this;
        this.proyectoService = proyectoService;
        this.proyectos = [];
        this.proyectoService.getProyectos().subscribe(function (res) {
            var _a;
            (_a = _this.proyectos).push.apply(_a, res);
        });
    }
    ContenidoComponent.prototype.ngOnInit = function () {
    };
    ContenidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contenido',
            template: __webpack_require__(/*! ./contenido.component.html */ "./src/app/components/contenido/contenido.component.html"),
            styles: [__webpack_require__(/*! ./contenido.component.css */ "./src/app/components/contenido/contenido.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], ContenidoComponent);
    return ContenidoComponent;
}());



/***/ }),

/***/ "./src/app/components/entretenimiento/entretenimiento.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/entretenimiento/entretenimiento.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50cmV0ZW5pbWllbnRvL2VudHJldGVuaW1pZW50by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/entretenimiento/entretenimiento.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/entretenimiento/entretenimiento.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <p class=\"text text-center\">En mis tiempos libres me gusta aprender y desarrollar videosjuegos y queria compartiles un juego simple que hice con los assets de unity.</p>\n  <p class=\"text text-center\">Este juego fue creado como dije con Unity usando el lenguaje de programacion c#, tambien esta subido a firebase.</p>\n  <p class=\"taxt text-center\">Puedes vistarlo haciendo click <a href=\"https://flappy-web.web.app/\">aqui</a></p>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <embed src=\"https://flappy-web.web.app/\" width=\"100%\" height=\"800px\"> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/entretenimiento/entretenimiento.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/entretenimiento/entretenimiento.component.ts ***!
  \*************************************************************************/
/*! exports provided: EntretenimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntretenimientoComponent", function() { return EntretenimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntretenimientoComponent = /** @class */ (function () {
    function EntretenimientoComponent() {
    }
    EntretenimientoComponent.prototype.ngOnInit = function () {
    };
    EntretenimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entretenimiento',
            template: __webpack_require__(/*! ./entretenimiento.component.html */ "./src/app/components/entretenimiento/entretenimiento.component.html"),
            styles: [__webpack_require__(/*! ./entretenimiento.component.css */ "./src/app/components/entretenimiento/entretenimiento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntretenimientoComponent);
    return EntretenimientoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"contacto\">\n    <h1 class=\"title text-center\">Contacto</h1>\n    <p class=\"text-center mt-3\"><i class=\"fas fa-mail-bulk\"></i> marcosnoriega964@gmail.com</p>\n    <p class=\"text-center mt-3\"><i class=\"fab fa-github\"></i> Repositorios: <a href=\"https://github.com/MarcosNoriega?tab=repositories\">https://github.com/MarcosNoriega?tab=repositories</a></p>\n    <p class=\"text-center mt-3\">&copy; copyright 2019 por Marcos Noriega</p>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/habilidades/habilidades.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFiaWxpZGFkZXMvaGFiaWxpZGFkZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/habilidades/habilidades.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <section>\n        <div class=\"row mt-5\">\n            <div class=\"col-md-4\" *ngFor=\"let habilidad of habilidades\">\n                <figure>\n                    <img [src]=\"habilidad.imagen\" class=\"d-block mx-auto wow fadeInLeft\" alt=\"\" [width]=\"habilidad.width\" [height]=\"habilidad.height\">\n                    <figcaption class=\"text-center\">{{habilidad.nombre}}</figcaption>  \n                </figure> \n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/components/habilidades/habilidades.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/habilidades/habilidades.component.ts ***!
  \*****************************************************************/
/*! exports provided: HabilidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesComponent", function() { return HabilidadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");



var HabilidadesComponent = /** @class */ (function () {
    function HabilidadesComponent(proyectoService) {
        var _this = this;
        this.proyectoService = proyectoService;
        this.habilidades = [];
        this.proyectoService.getHabilidades().subscribe(function (res) {
            var _a;
            (_a = _this.habilidades).push.apply(_a, res);
        });
    }
    HabilidadesComponent.prototype.ngOnInit = function () {
    };
    HabilidadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-habilidades',
            template: __webpack_require__(/*! ./habilidades.component.html */ "./src/app/components/habilidades/habilidades.component.html"),
            styles: [__webpack_require__(/*! ./habilidades.component.css */ "./src/app/components/habilidades/habilidades.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], HabilidadesComponent);
    return HabilidadesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"header-content\">\n      <img src=\"assets/img/marcos.jpg\" class=\"fotoPerfil\" alt=\"\">\n      <h3 class=\"title\">Marcos Noriega</h3>\n      <p class=\"text\">La perceverancia es mucho mas importante que el talento y el conocimiento</p>\n  </div>\n</header>\n\n<div id=\"particles-js\"></div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<app-header></app-header>\n<app-contenido></app-contenido>\n<div id=\"separador\">\n    <h1 class=\"text-center title-separador\" id=\"habilidades\">Habilidades</h1>\n</div>\n<app-habilidades></app-habilidades>\n<div id=\"separador2\">\n    <h1 class=\"text-center title-separador\">Entretenimiento</h1>\n</div>\n<app-entretenimiento></app-entretenimiento>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0%;\n    padding: 0%;\n}\n\n#sidebar {\n    position: fixed;\n    width: 200px;\n    height: 100%;\n    background: #151719;\n    left: -200px;\n    transition: all 500ms linear;\n    z-index: 2;\n}\n\n#sidebar.active {\n    left: 0px;\n}\n\n#sidebar ul a li {\n    color: rgba(230, 230, 230, .9);\n    text-align: center;\n    padding: 15px 10px;\n    border-bottom: 1px solid rgba(100, 100, 100, .3);\n    transition: all 100ms linear;\n}\n\n#sidebar .toggle-btn {\n    position: absolute;\n    left: 230px;\n    top: 20px;\n    cursor: pointer;\n}\n\n#sidebar .toggle-btn span {\n    display: block;\n    width: 40px;\n    text-align: center;\n    font-size: 30px;\n    border: 1px solid white;\n    background-color: #000;\n    transition: all 400ms linear;\n}\n\n#sidebar .toggle-btn span:hover {\n    border: 1px solid #35c844;\n    color: #35c844;\n    transition: all 400ms linear;\n}\n\n#sidebar ul a li:hover{\n    text-decoration: none;\n    background-color: #35c844;\n    transition: all 100ms linear;\n}\n\na {\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmc6IDAlO1xufVxuXG4jc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzE1MTcxOTtcbiAgICBsZWZ0OiAtMjAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhcjtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4jc2lkZWJhci5hY3RpdmUge1xuICAgIGxlZnQ6IDBweDtcbn1cblxuI3NpZGViYXIgdWwgYSBsaSB7XG4gICAgY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgLjkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBsaW5lYXI7XG59XG5cbiNzaWRlYmFyIC50b2dnbGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjMwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXIgLnRvZ2dsZS1idG4gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBsaW5lYXI7XG59XG5cbiNzaWRlYmFyIC50b2dnbGUtYnRuIHNwYW46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNWM4NDQ7XG4gICAgY29sb3I6ICMzNWM4NDQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGxpbmVhcjtcbn1cblxuI3NpZGViYXIgdWwgYSBsaTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1Yzg0NDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgbGluZWFyO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n  <div class=\"toggle-btn\">\n      <span>&#9776;</span>\n  </div>\n\n  <ul>\n      <a href=\"#sobreMi\"><li>Sobre mi</li></a>\n      <a href=\"#proyectos\"><li>Proyectos</li></a>\n      <a href=\"#habilidades\"><li>Habilidades</li></a>\n      <a href=\"#entretenimiento\"><li>Entretenimiento</li></a>\n      <a href=\"#contacto\"><li>Contacto</li></a>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/proyecto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/proyecto.service.ts ***!
  \**********************************************/
/*! exports provided: ProyectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoService", function() { return ProyectoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProyectoService = /** @class */ (function () {
    function ProyectoService(http) {
        this.http = http;
    }
    ProyectoService.prototype.getProyectos = function () {
        return this.http.get('assets/data/proyectos.json');
    };
    ProyectoService.prototype.getHabilidades = function () {
        return this.http.get('assets/data/habilidades.json');
    };
    ProyectoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProyectoService);
    return ProyectoService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcos/Documentos/portafolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map