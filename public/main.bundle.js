webpackJsonp([0,3],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guards__ = __webpack_require__(234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guards__["a"]; });

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/index.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContent; });
var DialogContent = (function () {
    function DialogContent() {
        this.close = "Done";
    }
    return DialogContent;
}());

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/dialog-content.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_headers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationService = (function () {
    function RegistrationService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    RegistrationService.prototype.register = function (user) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_headers__["a" /* contentHeaders */])() });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/authentication', JSON.stringify(user), options)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
                _this.authenticationService.isLoginSubject.next(true);
                return true;
            }
            else {
                return false;
            }
        });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */]) === "function" && _b || Object])
], RegistrationService);

var _a, _b;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/registration.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutViewComponent = (function () {
    function AboutViewComponent() {
    }
    AboutViewComponent.prototype.ngOnInit = function () {
    };
    return AboutViewComponent;
}());
AboutViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about-view',
        template: __webpack_require__(422),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [])
], AboutViewComponent);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/about-view.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardViewComponent = (function () {
    function DashboardViewComponent() {
    }
    DashboardViewComponent.prototype.ngOnInit = function () {
    };
    return DashboardViewComponent;
}());
DashboardViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-view',
        template: __webpack_require__(425),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [])
], DashboardViewComponent);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/dashboard-view.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_content__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogComponent = (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(426),
        styles: [__webpack_require__(412)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_dialog_content__["a" /* DialogContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_dialog_content__["a" /* DialogContent */]) === "function" && _b || Object])
], DialogComponent);

var _a, _b;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/dialog.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_donation__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donate_service__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DonateViewComponent = (function () {
    function DonateViewComponent(donateService, route, router, snackBar) {
        this.donateService = donateService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
    }
    DonateViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.donation = new __WEBPACK_IMPORTED_MODULE_4__models_donation__["a" /* Donation */](+params['id']);
            _this.project_id = +params['id'];
        });
    };
    DonateViewComponent.prototype.donate = function (form) {
        var _this = this;
        this.donateService.donate(this.donation)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/project', _this.project_id]);
                _this.snackBar.open("You have successfully donated " + _this.donation.amount + " GBP to this project!", 'OK', { duration: 10000 });
                form.reset();
            }
        });
    };
    return DonateViewComponent;
}());
DonateViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-donate-view',
        template: __webpack_require__(427),
        styles: [__webpack_require__(413)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__donate_service__["a" /* DonateService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__donate_service__["a" /* DonateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__donate_service__["a" /* DonateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object])
], DonateViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/donate-view.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingViewComponent = (function () {
    function LandingViewComponent() {
        this.sort = JSON.stringify([{ column: "backers", order: "desc" }]);
    }
    LandingViewComponent.prototype.ngOnInit = function () {
    };
    return LandingViewComponent;
}());
LandingViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing-view',
        template: __webpack_require__(428),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [])
], LandingViewComponent);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/landing-view.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginViewComponent = (function () {
    function LoginViewComponent(router, route, authenticationService, user) {
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.user = user;
        this.error = { subject: "", message: "" };
    }
    LoginViewComponent.prototype.login = function (form) {
        var _this = this;
        this.error = { subject: "", message: "" };
        this.authenticationService.login(this.user)
            .subscribe(function (result) {
            if (result === true) {
                form.reset();
                _this.redirect();
            }
        }, function (error) {
            var cause = JSON.parse(error._body).cause;
            _this.error.subject = cause;
            _this.error.message = "The " + cause + " you have entered is incorrect!";
        });
    };
    LoginViewComponent.prototype.redirect = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { return _this.router.navigateByUrl(params['returnUrl']); });
    };
    LoginViewComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') != null) {
            this.redirect();
        }
    };
    return LoginViewComponent;
}());
LoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-view',
        template: __webpack_require__(429),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]) === "function" && _d || Object])
], LoginViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/login-view.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModerationViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModerationViewComponent = (function () {
    function ModerationViewComponent() {
    }
    ModerationViewComponent.prototype.ngOnInit = function () {
    };
    return ModerationViewComponent;
}());
ModerationViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-moderation-view',
        template: __webpack_require__(430),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [])
], ModerationViewComponent);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/moderation-view.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_project__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_form_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectFormComponent = (function () {
    function ProjectFormComponent(projectFormService, route, router, snackBar) {
        this.projectFormService = projectFormService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.error = { subject: "", message: "" };
        this.project = new __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]();
        this.formType = "new";
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
    };
    ProjectFormComponent.prototype.submit = function (form) {
        var _this = this;
        if (this.formType == "new") {
            this.projectFormService.new(this.project)
                .subscribe(function (id) {
                form.reset();
                _this.router.navigate(['/project', id]);
                _this.snackBar.open("Project Created!", 'OK', { duration: 10000 });
            }, function (error) {
                _this.errorHandling(error._body);
            });
        }
        else if (this.formType == "update") {
            this.projectFormService.update(this.project)
                .subscribe(function (id) {
                form.reset();
                _this.router.navigate(['/project', id]);
                _this.snackBar.open("Project Updated!", 'OK', { duration: 10000 });
            }, function (error) {
                _this.errorHandling(error._body);
            });
        }
    };
    ProjectFormComponent.prototype.errorHandling = function (error) {
        this.error = { subject: "", message: "" };
        var jsonCause = JSON.parse(error).cause;
        var jsonError = JSON.parse(error).error;
        this.error.subject = jsonCause;
        if (jsonError == "length") {
            if (jsonCause == "name") {
                this.error.message = "Name must be at least 3 characters";
            }
            else if (jsonCause == "description") {
                this.error.message = "Description must be at least 300 characters";
            }
            else if (jsonCause == "funding_goal") {
                this.error.message = "Funding goal must be at least 10 GBP";
            }
        }
        else if (jsonError == "uniqueness") {
            this.error.message = "Name is already taken";
        }
    };
    return ProjectFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectFormComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProjectFormComponent.prototype, "formType", void 0);
ProjectFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-form',
        template: __webpack_require__(431),
        styles: [__webpack_require__(417)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__project_form_service__["a" /* ProjectFormService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__project_form_service__["a" /* ProjectFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__project_form_service__["a" /* ProjectFormService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */]) === "function" && _e || Object])
], ProjectFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/project-form.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_view_service__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectViewComponent = (function () {
    function ProjectViewComponent(projectService, route, location) {
        this.projectService = projectService;
        this.route = route;
        this.location = location;
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.getProject(+params['id']); });
    };
    ProjectViewComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService.getProject(id).subscribe(function (project) { return _this.project = project; });
    };
    return ProjectViewComponent;
}());
ProjectViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-project-view',
        template: __webpack_require__(432),
        styles: [__webpack_require__(406)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__project_view_service__["a" /* ProjectViewService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__project_view_service__["a" /* ProjectViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__project_view_service__["a" /* ProjectViewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _c || Object])
], ProjectViewComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/project-view.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_registration_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterViewComponent = (function () {
    function RegisterViewComponent(router, route, user, registrationService) {
        this.router = router;
        this.route = route;
        this.user = user;
        this.registrationService = registrationService;
        this.error = { subject: "", message: "" };
    }
    RegisterViewComponent.prototype.register = function (form) {
        var _this = this;
        this.error = { subject: "", message: "" };
        this.registrationService.register(this.user)
            .subscribe(function (result) {
            form.reset();
            _this.redirect();
        }, function (error) {
            var jsonCause = JSON.parse(error._body).cause;
            var jsonError = JSON.parse(error._body).error;
            if (jsonError == "notmatching") {
                _this.error.subject = "password_confirmation";
                _this.error.message = "This value does not match the password";
            }
            else if (jsonError == "notpresent") {
                _this.error.subject = jsonCause;
                _this.error.message = "This field cannot be empty";
            }
            else if (jsonError == "exists") {
                _this.error.subject = "email";
                _this.error.message = "This email address exists already";
            }
            else if (jsonError == "format") {
                if (jsonCause == "email") {
                    _this.error.subject = "email";
                    _this.error.message = "This is not a valid email format";
                }
                else {
                    _this.error.subject = jsonCause;
                    _this.error.message = "This is not a valid name";
                }
            }
            else if (jsonError == "length") {
                _this.error.subject = jsonCause;
                _this.error.message = "Password must be longer than 8 character";
            }
        });
    };
    RegisterViewComponent.prototype.redirect = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { return _this.router.navigateByUrl(params['returnUrl']); });
    };
    RegisterViewComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') != null) {
            this.redirect();
        }
    };
    return RegisterViewComponent;
}());
RegisterViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register-view',
        template: __webpack_require__(433),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_registration_service__["a" /* RegistrationService */]) === "function" && _d || Object])
], RegisterViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/register-view.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchViewComponent = (function () {
    function SearchViewComponent(activatedRoute, router, iconRegistry, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.query = "";
        this.sorts = [
            { name: "Oldest First", value: JSON.stringify([{ column: "created_at", order: "asc" }]) },
            { name: "Newest First", value: JSON.stringify([{ column: "created_at", order: "desc" }]) },
            { name: "Most Popular", value: JSON.stringify([{ column: "backers", order: "desc" }]) },
            { name: "Least Popular", value: JSON.stringify([{ column: "backers", order: "asc" }]) }
        ];
        this.sort = this.sorts[2].value;
        iconRegistry.addSvgIcon('arrow-up', sanitizer.bypassSecurityTrustResourceUrl('assets/arrow-up.svg'));
        iconRegistry.addSvgIcon('arrow-down', sanitizer.bypassSecurityTrustResourceUrl('assets/arrow-down.svg'));
    }
    SearchViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.query = params['query'];
            _this.filter = params['filter'];
            _this.generateFilter();
        });
    };
    SearchViewComponent.prototype.submit = function () {
        this.router.navigate(['/search'], { queryParams: { query: this.query, filter: this.filter } });
        this.generateFilter();
    };
    SearchViewComponent.prototype.generateSort = function (sort) {
        this.router.navigate(['/search'], { queryParams: { query: this.query, filter: this.filter } });
    };
    SearchViewComponent.prototype.generateFilter = function () {
        this.filter = JSON.stringify([{ column: "name", operator: "contains", value: this.query }]);
    };
    return SearchViewComponent;
}());
SearchViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-view',
        template: __webpack_require__(434),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdIconRegistry */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* DomSanitizer */]) === "function" && _d || Object])
], SearchViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/search-view.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 226;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(240);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOCK_SLIDER_DATA; });
var MOCK_SLIDER_DATA = {
    data: {
        active: [{
                title: 'Have a project?',
                subtitle: 'Start your journey today.',
                imgSrc: '/assets/slide-02.jpg'
            }, {
                title: 'Introducing Barbelo',
                subtitle: 'The Platform For Change',
                imgSrc: '/assets/slide-01.jpg'
            }, {
                title: 'Less Costs, More Compassion',
                subtitle: 'We have no platform fees, and we never will.',
                imgSrc: '/assets/slide-00.jpg'
            }],
        buffer: [{
                title: 'Explore Today',
                subtitle: 'Find projects in your area →',
                imgSrc: '/assets/slide-03.jpg'
            }]
    }
};
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/MOCK_DATA.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.createUrlTree([route.data['route']]) } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/auth.guards.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Donation; });
var Donation = (function () {
    function Donation(project_id) {
        this.project_id = project_id;
    }
    return Donation;
}());

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/donation.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/project.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_headers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoginSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](this.tokenExists());
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.isLoginSubject.asObservable();
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_headers__["a" /* contentHeaders */])() });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/authentication', JSON.stringify(user), options)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
                _this.isLoginSubject.next(true);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        this.isLoginSubject.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.tokenExists = function () {
        return localStorage.getItem('currentUser') != null;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/authentication.service.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_index__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_view_landing_view_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_view_login_view_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_view_register_view_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_view_project_view_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_view_search_view_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_form_project_form_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_view_dashboard_view_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__donate_view_donate_view_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_view_about_view_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__moderation_view_moderation_view_component__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_view_landing_view_component__["a" /* LandingViewComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_view_login_view_component__["a" /* LoginViewComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_view_register_view_component__["a" /* RegisterViewComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_6__project_view_project_view_component__["a" /* ProjectViewComponent */] },
    { path: 'create/project', component: __WEBPACK_IMPORTED_MODULE_8__project_form_project_form_component__["a" /* ProjectFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]], data: { route: 'create/project' } },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__search_view_search_view_component__["a" /* SearchViewComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_view_dashboard_view_component__["a" /* DashboardViewComponent */] },
    { path: 'donate/:id', component: __WEBPACK_IMPORTED_MODULE_10__donate_view_donate_view_component__["a" /* DonateViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_index__["a" /* AuthGuard */]], data: { route: 'donate' } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__about_view_about_view_component__["a" /* AboutViewComponent */] },
    { path: 'moderation', component: __WEBPACK_IMPORTED_MODULE_12__moderation_view_moderation_view_component__["a" /* ModerationViewComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/app-routing.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Barbelo';
        this.loggedIn = authenticationService.isLoggedIn();
    }
    AppComponent.prototype.login = function () {
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
    };
    AppComponent.prototype.register = function () {
        this.router.navigate(['/register'], { queryParams: { returnUrl: this.router.url } });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(423),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_view_login_view_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_view_landing_view_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_view_project_view_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_view_search_view_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__card_card_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__slider_slider_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__update_update_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_view_register_view_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__project_form_project_form_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_view_dashboard_view_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__donate_view_donate_view_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__about_view_about_view_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__moderation_view_moderation_view_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_view_login_view_component__["a" /* LoginViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_view_landing_view_component__["a" /* LandingViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__project_view_project_view_component__["a" /* ProjectViewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__search_view_search_view_component__["a" /* SearchViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__update_update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_19__register_view_register_view_component__["a" /* RegisterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__project_form_project_form_component__["a" /* ProjectFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_view_dashboard_view_component__["a" /* DashboardViewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__donate_view_donate_view_component__["a" /* DonateViewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__about_view_about_view_component__["a" /* AboutViewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__moderation_view_moderation_view_component__["a" /* ModerationViewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["a" /* DialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["a" /* DialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["b" /* RegistrationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["BaseRequestOptions"],
            __WEBPACK_IMPORTED_MODULE_10__models_user__["a" /* User */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/app.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_service__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent(cardService) {
        this.cardService = cardService;
        this.amount = 4;
        this.sort = JSON.stringify([{ column: "id", order: "desc" }]);
        this.filter = JSON.stringify([{ column: "description", operator: "isnotnull" }]);
        this.page = 1;
        this.columns = 4;
    }
    CardComponent.prototype.getCards = function () {
        var _this = this;
        this.cardService.getCards(this.amount, this.sort, this.filter, this.page).subscribe(function (result) { return _this.cards = result; });
    };
    CardComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    CardComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (change == "filter") {
                this.filter = changes.filter.currentValue;
            }
        }
        this.getCards();
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "amount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "columns", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(424),
        styles: [__webpack_require__(405)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__card_service__["a" /* CardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__card_service__["a" /* CardService */]) === "function" && _a || Object])
], CardComponent);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/card.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardService = (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.getCards = function (amount, sort, filter, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('page', page.toString());
        params.set('page_size', amount.toString());
        params.set('sort', sort);
        params.set('filter', filter);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.search = params;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/project', requestOptions)
            .map(function (response) {
            return response.json().project;
        });
    };
    return CardService;
}());
CardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CardService);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/card.service.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_headers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonateService = (function () {
    function DonateService(http) {
        this.http = http;
    }
    DonateService.prototype.donate = function (donation) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_headers__["a" /* contentHeaders */])() });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/transaction', JSON.stringify(donation), options)
            .map(function (response) {
            if ("token" in response.json()) {
                var email = JSON.parse(localStorage.getItem('currentUser')).email;
                var token = response.json().token;
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    return DonateService;
}());
DonateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DonateService);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/donate.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_headers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectFormService = (function () {
    function ProjectFormService(http) {
        this.http = http;
    }
    ProjectFormService.prototype.new = function (project) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_headers__["a" /* contentHeaders */])() });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/project', JSON.stringify(project), options)
            .map(function (response) {
            return _this.respond(response);
        });
    };
    ProjectFormService.prototype.update = function (project) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_headers__["a" /* contentHeaders */])() });
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/project', JSON.stringify(project), options)
            .map(function (response) {
            return _this.respond(response);
        });
    };
    ProjectFormService.prototype.respond = function (response) {
        var email = JSON.parse(localStorage.getItem('currentUser')).email;
        var token = response.json().token;
        localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
        return response.json().id;
    };
    return ProjectFormService;
}());
ProjectFormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProjectFormService);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/project-form.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_headers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectViewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectViewService = (function () {
    function ProjectViewService(http) {
        this.http = http;
    }
    ProjectViewService.prototype.getProject = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_headers__["a" /* contentHeaders */])() });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/project/' + id, options)
            .map(function (project) {
            return project.json();
        });
    };
    return ProjectViewService;
}());
ProjectViewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProjectViewService);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/project-view.service.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_service__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent(sliderService) {
        this.sliderService = sliderService;
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.getActiveSlides();
        this.getBufferSlides();
    };
    SliderComponent.prototype.previous = function () {
        this.active.push(this.buffer.shift());
        this.buffer.push(this.active.shift());
    };
    SliderComponent.prototype.next = function () {
        this.active.unshift(this.buffer.pop());
        this.buffer.unshift(this.active.pop());
    };
    SliderComponent.prototype.getActiveSlides = function () {
        var _this = this;
        this.sliderService.getActiveSlides()
            .then(function (slides) { return _this.active = slides; }); //TODO: Handle errors
    };
    SliderComponent.prototype.getBufferSlides = function () {
        var _this = this;
        this.sliderService.getBufferSlides()
            .then(function (slides) { return _this.buffer = slides; }); //TODO: Handle errors
    };
    SliderComponent.prototype.onClick = function (slideIndex) {
        switch (slideIndex) {
            case 2:
                this.previous();
                break;
            case 0:
                this.next();
                break;
        }
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(435),
        styles: [__webpack_require__(407)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */]) === "function" && _a || Object])
], SliderComponent);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/slider.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MOCK_DATA__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderService = (function () {
    function SliderService() {
    }
    SliderService.prototype.getSlides = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__MOCK_DATA__["a" /* MOCK_SLIDER_DATA */]);
    };
    SliderService.prototype.getActiveSlides = function () {
        return this.getSlides()
            .then(function (slides) { return slides.data.active; })
            .catch(function (e) { return console.error(e); }); // TODO: Handle error
    };
    SliderService.prototype.getBufferSlides = function () {
        return this.getSlides()
            .then(function (slides) { return slides.data.buffer; })
            .catch(function (e) { return console.error(e); }); // TODO: Handle error
    };
    return SliderService;
}());
SliderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SliderService);

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/slider.service.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dialog_content__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateComponent = (function () {
    function UpdateComponent(updateService, dialog) {
        this.updateService = updateService;
        this.dialog = dialog;
        this.dialogContent = new __WEBPACK_IMPORTED_MODULE_2__models_dialog_content__["a" /* DialogContent */]();
    }
    UpdateComponent.prototype.viewUpdate = function (id) {
        var _this = this;
        this.updateService.getUpdate(id)
            .subscribe(function (update) {
            _this.dialogContent.title = update.name;
            _this.dialogContent.body = update.description;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialog_dialog_component__["a" /* DialogComponent */], { data: _this.dialogContent, width: '80%' });
        });
    };
    UpdateComponent.prototype.ngOnInit = function () {
    };
    return UpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], UpdateComponent.prototype, "updates", void 0);
UpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(436),
        styles: [__webpack_require__(408)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__update_service__["a" /* UpdateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__update_service__["a" /* UpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__update_service__["a" /* UpdateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _b || Object])
], UpdateComponent);

var _a, _b;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/update.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateService = (function () {
    function UpdateService(http) {
        this.http = http;
    }
    UpdateService.prototype.getUpdate = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_global__["a" /* GlobalVariable */].BASE_URL + 'api/update/' + id)
            .map(function (update) {
            return update.json();
        });
    };
    return UpdateService;
}());
UpdateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UpdateService);

var _a;
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/update.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/environment.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/polyfills.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".card {\n  position: relative;\n  height: auto;\n  width: 100%;\n  color: #323232;\n  border-radius: 2px; }\n\n.card > * {\n  cursor: default; }\n\n.card__header {\n  position: relative;\n  height: 45%;\n  width: 100%;\n  overflow: hidden; }\n\n.card__header-image {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  min-height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: 0.2s all; }\n\n.card__body {\n  position: relative;\n  padding: 1rem;\n  border-left: 1px solid;\n  border-right: 1px solid;\n  border-color: gainsboro; }\n\n.card__body-subtitle {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.03rem;\n  color: #b4b4b4;\n  padding: 0.25rem 0.5rem;\n  margin: 0.2rem 0;\n  border: 1px solid;\n  border-color: gainsboro;\n  border-radius: 20px; }\n\n.card__body-title {\n  max-width: 90%;\n  font-size: 1.1rem;\n  font-weight: 400;\n  line-height: 1.4;\n  padding: 0;\n  margin: 1rem 0 0.4rem 0; }\n\n.card__body-content {\n  font-size: 0.85rem;\n  font-weight: 400;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0.6rem 0; }\n\n.card__footer {\n  position: relative;\n  border: 1px solid;\n  border-color: gainsboro;\n  padding: 1rem; }\n\n.card__footer-title {\n  font-size: 0.95rem;\n  font-weight: 400; }\n\n.card__footer-footnote {\n  font-size: 0.7rem;\n  color: #b4b4b4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n/* The element to apply the animation to */\n.card__progress {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  margin: 0.6rem 0 0.4rem 0;\n  background-color: #e6e7e8;\n  overflow: hidden; }\n\n.card__progress span {\n  position: relative;\n  display: block;\n  width: 35%;\n  height: 10px;\n  background: #2BDE73;\n  transition: 0.2s all ease-in-out; }\n\n.card:hover > * {\n  background: #e8ecf2; }\n\n.card:hover {\n  border-color: #b4b4b4; }\n\na:link {\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".main {\n  line-height: 2em;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  float: left; }\n\n@-webkit-keyframes example {\n  from {\n    width: 0; }\n  to { } }\n\n@keyframes example {\n  from {\n    width: 0; }\n  to { } }\n\n.card__progress {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  margin: 0.6rem 0 0.4rem 0;\n  background-color: #e6e7e8;\n  overflow: hidden; }\n\n.card__progress span {\n  position: relative;\n  display: block;\n  height: 10px;\n  background: #2BDE73;\n  transition: 0.2s all ease-in-out;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\nh1 {\n  margin: 0; }\n\n.category {\n  display: inline;\n  padding: 0;\n  margin: 0;\n  color: #26A65B; }\n\n.container {\n  width: 1350px;\n  margin: auto;\n  position: relative; }\n\n.header {\n  padding: 10px;\n  padding-left: 0px;\n  width: 1050px; }\n\n.colum_left {\n  margin: 0px;\n  width: 65%;\n  float: left; }\n\n.colum_right {\n  margin: 0px;\n  width: 35%;\n  float: right; }\n\n.updates {\n  margin: 0px;\n  padding: 0px; }\n\n.description {\n  margin-top: 25px;\n  box-shadow: none !important; }\n\n.info {\n  height: 300px;\n  box-shadow: none !important;\n  text-align: center;\n  padding-top: 100px; }\n\n.donate_button {\n  margin: 40px 0px 20px 0px;\n  width: 80%; }\n\n.share_button {\n  padding: 0px;\n  width: 40%; }\n\n.remind_button {\n  padding: 0px;\n  width: 40%; }\n\n.project__header-image {\n  height: 100%;\n  width: 100%;\n  min-height: 400px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: 0.2s all;\n  margin: 0px; }\n\n.demo-secondary-text {\n  height: 175px;\n  padding: 0;\n  margin: 0; }\n\n.card {\n  position: relative;\n  height: auto;\n  width: 100%;\n  color: #323232;\n  border-radius: 2px; }\n\n.card > * {\n  cursor: default; }\n\n.card__header {\n  position: relative;\n  height: 45%;\n  width: 100%;\n  overflow: hidden; }\n\n.card__header-image {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  min-height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: 0.2s all; }\n\n.card__body {\n  position: relative;\n  padding: 1rem;\n  border-left: 1px solid;\n  border-right: 1px solid;\n  border-color: gainsboro; }\n\n.card__body-subtitle {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 0.6rem;\n  font-weight: 400;\n  letter-spacing: 0.03rem;\n  color: #b4b4b4;\n  padding: 0.25rem 0.5rem;\n  margin: 0.2rem 0;\n  border: 1px solid;\n  border-color: gainsboro;\n  border-radius: 20px; }\n\n.card__body-title {\n  max-width: 90%;\n  font-size: 1.1rem;\n  font-weight: 400;\n  line-height: 1.4;\n  padding: 0;\n  margin: 1rem 0 0.4rem 0; }\n\n.card__body-content {\n  font-size: 0.85rem;\n  font-weight: 400;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0.6rem 0; }\n\n.card__footer {\n  position: relative;\n  border: 1px solid;\n  border-color: gainsboro;\n  padding: 1rem; }\n\n.card__footer-title {\n  font-size: 0.95rem;\n  font-weight: 400; }\n\n.card__footer-footnote {\n  font-size: 0.7rem;\n  color: #b4b4b4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "/* slider.component.scss */\n/* Slider */\n.slider {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  font-family: helvetica; }\n\n.slider > * {\n  box-sizing: border-box; }\n\n/* Slides */\n.slider__slides {\n  position: relative;\n  display: table;\n  width: 200%;\n  -webkit-transform: translateX(-35%);\n          transform: translateX(-35%);\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n/* Slide */\n.slider__slides > * {\n  position: relative;\n  display: table-cell;\n  width: 40%;\n  height: 350px;\n  transition: 0.2s all;\n  cursor: pointer; }\n\n.slider__slide-image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: 0.2s all; }\n\n.slider__slide-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)); }\n\n.slider__slides > *:first-of-type .slider__slide-overlay {\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.2), white); }\n\n.slider__slides > *:last-of-type .slider__slide-overlay {\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), white); }\n\n.slider__slide-content {\n  display: block;\n  width: 60%;\n  padding: 2.5rem;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-40%);\n          transform: translateY(-40%);\n  text-align: center;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.slider__slides > *:first-of-type .slider__slide-content,\n.slider__slides > *:last-of-type .slider__slide-content {\n  display: none; }\n\n.slider__slide-title {\n  font-size: 2.8rem;\n  font-weight: 100;\n  margin: 0px;\n  padding: 0px; }\n\n.slider__slide-subtitle {\n  font-size: 1.5rem;\n  font-weight: 200;\n  margin: 10px; }\n\n/* Slide Control */\n.slider__hidden-slide {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "button {\n  float: right;\n  border-right: 15px solid transparent; }\n\nmd-card {\n  float: right;\n  margin-top: 15px; }\n\n.update {\n  float: right;\n  margin-top: 15px; }\n\nh4 {\n  margin: 0px; }\n\n.last-item hr {\n  border-width: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".main {\n    width: 100%;\n    box-shadow: none !important;\n    height: 1050px;\n    padding: 0px;\n    text-align: center;\n    background-color: #ddd;\n}\n\nimg {\n  width: 70%;\n  height: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\nmd-toolbar {\n  background-color: #FFF;\n}\n\n/* The animation code */\n\n.nav-center {\n    margin: auto;\n    padding: 0px 150px 0px 0px;\n}\n\n.item {\n  font-size: 0.7em;\n  margin: 0px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 44px;\n  line-height: 44px;\n  margin-left: 20px;\n  margin-right: 20px;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 0px;\n  border-bottom: 0px solid green;\n  border-bottom-width: 0px;\n  transition: border-bottom-width 0.1s ease-in-out, height 0.1s ease-in-out;\n}\n\n.item:hover {\n  border-bottom-width: 4px;\n  height: 40px;\n}\n\n.home {\n  font-size: 0.6em;\n  cursor: pointer;\n}\n\n.home h1 {\n  padding: 0px;\n  margin: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "md-card{\nline-height:2em;\nmargin-left: auto;\nmargin-right: auto;\nwidth: 100%;\nfloat: left;\n}\n\n.card{\n  height: 500px;\n}\n\n.colum_left{\n  width: 50%;\n  float: left;\n}\n\n.colum_right{\n  width: 40%;\n  float: right;\n  margin-right: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n.donate {\n    margin: auto;\n    width: 30%;\n    text-align: center;\n}\n\n.app-input-section {\n    margin: auto;\n    width: 100%;\n    padding: 0px;\n}\n\n.long-width {\n  width: 100%;\n  text-align: left !important;\n}\n\n.input {\n  box-shadow: none !important;\n}\n\nbutton {\n    font-size: 1rem;\n    height: 50px;\n    color: white !important;\n    width: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "h2 {\n    text-align: center;\n}\n\n.cards {\n    height: 550px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".main {\n    background-image: url(\"/src/assets/1.jpg\") !important ;\n    width: 100%;\n    box-shadow: none !important;\n    height: 500px;\n}\n\n\n.login {\n    margin: auto;\n    width: 30%;\n    text-align:center;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.app-input-section {\n    margin: auto;\n    width: 100%;\n    padding: 0px;\n}\n\n.long {\n    width: 90%;\n    padding-bottom: 13px;\n}\n\n.form-group {\n  box-shadow: none !important;\n}\n\n\nbutton {\n    font-size: 1rem;\n    height: 50px;\n    color: white !important;\n    width: 90%;\n    margin-bottom: 13px;   \n}\n\n.other {\n    color: black !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n.long-width {\n  width: 60%;\n}\n\n.small-width {\n    width: 35%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".main {\n    background-image: url(\"/src/assets/1.jpg\") !important ;\n    width: 100%;\n    box-shadow: none !important;\n    height: 100%;\n}\n\n\n.register {\n    margin: 30px auto;\n    width: 30%;\n    text-align:center;\n}\n\nmd-input-container {\n    width: 90%;\n}\n\n.app-input-section {\n    margin: auto;\n    width: 100%;\n    padding: 0px;\n}\n\n.form-group {\n  box-shadow: none !important;\n}\n\nbutton {\n    font-size: 0.95rem;\n    height: 45px;\n    color: white !important;\n    width: 90%;\n    margin-top: 5px;   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n.left {\n    padding: 4px 100px;\n    margin-top: 8px;\n    float: left;\n}\n\n.right {\n    padding: 4px 100px;\n    margin-top: 24px;\n    right: 0px;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = " <md-card class=\"main\">\n   <img src=\"/assets/about.jpg\"/>\n </md-card>"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <div class=\"nav-left\">\n    <div class=\"item\" routerLink=\"/create/project\">Start A Project</div>\n    <div class=\"item\" routerLink=\"/search\">Explore</div>\n    <div class=\"item\" routerLink=\"/about\">About Us</div>\n  </div>\n\n  <div class=\"nav-center\">\n    <div class=\"home\" routerLink=\"/\" routerLinkActive=\"active\"> <h1>{{title}}</h1> </div>\n  </div>\n\n  <div class=\"nav-right\" *ngIf=\"!(loggedIn | async)\">\n    <div class=\"item\" (click)=\"login()\">Log in</div>\n    <div class=\"item\"  (click)=\"register()\">Sign up</div>\n  </div>\n\n  <div class=\"nav-right\" *ngIf=\"(loggedIn | async)\">\n    <div class=\"item\" [routerLink]=\"['/dashboard']\">Dashboard</div>\n    <div class=\"item\" (click)=\"logout()\">Log out</div>\n  </div>\n\n</md-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<md-grid-list [cols]=\"columns\" rowHeight=\"470px\" gutterSize=\"8px\">\n<md-grid-tile *ngFor=\"let card of cards; let i=index\" [routerLink]=\"['/project', card.id]\">\n<div class=\"card\" *ngIf=\"i<amount\">\n  <div class=\"card__header\">\n    <div class=\"card__header-image\" [style.background-image]=\"'url(' + card.image +')'\"></div>\n  </div>\n  <div class=\"card__body\">\n    <h3 class=\"card__body-title\">\n      <a>{{ card.name }}</a>\n    </h3>\n    <p class=\"card__body-content\">\n      {{ card.description | slice:0:75 }}...\n    </p>\n  </div>\n  <div class=\"card__footer\">\n    <div class=\"card__footer-title\">\n      {{ card.funding_goal | currency : 'GBP':true:'1.0-2' }}\n    </div>\n    <div class=\"card__progress\">\n      <span class=\"card__progress-inner\" [ngStyle]=\"{ 'width': card.current_funding/card.funding_goal * 100 + '%' }\"></span>\n    </div>\n    <div class=\"card__footer-footnote\">\n      <span>{{ ((card.current_funding/card.funding_goal)*100).toFixed(0) }}% </span>\n      <span>25 days remaining</span>\n    </div>\n  </div>\n</div>\n</md-grid-tile>\n</md-grid-list>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<md-card>\n      <div class=\"colum_left\">\n            <h2 md-line>!! User's Name !!</h2>\n            <h3 md-line>Updates</h3>\n          <div class=\"updates\" *ngFor=\"let project of projects\">\n              <app-update [updates] = \"project.updates\"></app-update>\n            </div></div>\n      <div class=\"colum_right\">\n            <br>\n            <br>\n            <h3 md-line>My Projects</h3>\n            <div class=\"card\">\n            <app-card class=\"card\" [amount]=2 [columns]=2></app-card>\n            </div>\n            <button md-raised-button color=\"accent\">View all</button>\n            <h3 md-line>Projects You Love</h3>\n            <div class=\"card\">\n            <app-card class=\"card\" [amount]=2 [columns]=2></app-card>\n            </div>\n            <button md-raised-button color=\"accent\">View all</button>\n      </div>\n</md-card>\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{data.title}}</h1>\n\n<div md-dialog-content>{{data.body}}</div>\n\n<div md-dialog-actions>\n  <button md-button (click)=\"dialogRef.close()\">{{data.close}}</button>\n</div>"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"donate\">\n<form role=\"form\" (submit)=\"donate(donateForm)\" #donateForm=\"ngForm\">\n   <md-card class=\"input\">\n    <md-input-container class=\"long-width\">\n     <input [(ngModel)]=\"donation.amount\" name=\"amount\" required mdInput placeholder=\"Donation Amount\">\n    </md-input-container>\n   </md-card>\n\n   <md-card class=\"input\">\n    <md-select class=\"long-width\" placeholder=\"Display username?\">\n     <md-option>Yes</md-option>\n     <md-option>No</md-option>\n   </md-select>\n   </md-card>\n\n   <md-card class=\"input\">\n    <md-input-container class=\"long-width\">\n      <textarea mdInput rows=\"3\" placeholder=\"Add a comment\"></textarea>\n    </md-input-container>\n   </md-card>\n\n   <button md-raised-button color=\"primary\" type=\"submit\">Continue to Paypal</button>\n</form>\n</md-card>"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "\n<app-slider></app-slider>\n<md-card>\n    <div class=\"cards\">\n        <h2>Projects We Love</h2>\n        <app-card [amount]=4></app-card>\n    </div>\n    <div class=\"cards\">\n        <h2>Most Popular</h2>\n        <app-card [amount]=4 [sort]=\"sort\"></app-card>\n    </div>\n</md-card>"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = " <md-card class=\"main\">\n\n <md-card class=\"login\">\n   <h2>Login</h2>\n   <form role=\"form\" (submit)=\"login(loginForm)\" #loginForm=\"ngForm\">\n   <md-card class=\"app-input-section form-group\">\n     <md-input-container class=\"long\">\n      <input mdInput type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n      <md-hint *ngIf=\"(error.subject == 'email')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n   <md-card class=\"app-input-section form-group\">\n    <md-input-container class=\"long\">\n     <input mdInput type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n     <md-hint *ngIf=\"(error.subject == 'password')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>\n   <button md-raised-button color=\"primary\"  type=\"submit\">Submit</button>\n   <button md-raised-button class=\"other\" [routerLink]=\"['/register']\" preserveQueryParams>Sign Up</button>\n\n </form>\n </md-card>\n</md-card>"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "<p>\n  moderation-view works!\n</p>\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<form role=\"form\" #projectForm=\"ngForm\" (submit)=\"submit(projectForm)\">\n   <md-card>\n    <md-input-container class=\"small-width\">\n     <input mdInput placeholder=\"Project Title\" [(ngModel)]=\"project.name\" name=\"name\" required>\n     <md-hint *ngIf=\"(error.subject == 'name')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>\n   <md-card>\n    <md-input-container class=\"small-width\">\n     <input mdInput placeholder=\"Funding Goal (GBP)\" [(ngModel)]=\"project.funding_goal\" name=\"funding_goal\" required>\n     <md-hint *ngIf=\"(error.subject == 'funding_goal')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>\n   <md-card>\n    <md-input-container class=\"small-width\">\n     <input mdInput placeholder=\"Image URL\" [(ngModel)]=\"project.image\" name=\"image\" required>\n     <md-hint *ngIf=\"(error.subject == 'image')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>\n   <md-card>\n    <md-input-container class=\"long-width\">\n      <textarea mdInput rows=\"10\" placeholder=\"Description\" [(ngModel)]=\"project.description\" name=\"description\" required></textarea>\n      <md-hint *ngIf=\"(error.subject == 'description')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>\n\n   <button md-raised-button type=\"submit\">Submit</button>\n\n</form>"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"main\">\n      <div class=\"container\">\n        <div class=\"header\">\n         \n        </div>\n          <div class=\"colum_left\">\n                <md-card style=\"padding:0px;\">\n                  <div class=\"project__header-image\" [style.background-image]=\"'url(' + project?.image +')'\"></div>\n                </md-card>\n                <md-card class=\"description\">\n                  <h1 md-line>{{ project?.current_funding | currency : 'GBP':true:'1.0-2' }} of {{ project?.funding_goal | currency : 'GBP':true:'1.0-2' }} Goal</h1>\n                  <div class=\"card__progress\">\n                      <span class=\"card__progress-inner\" [ngStyle]=\"{ 'width': project?.current_funding/project?.funding_goal * 100 + '%' }\"></span>\n                  </div>\n                  <br>\n                  {{ project?.description }}\n                </md-card>\n\n          </div>\n          <div class=\"colum_right\">\n            <md-card class=\"info\">\n             <h1 md-line>{{ project?.name }}</h1>\n             \n            <span class=\"buttons\">\n              <button class=\"donate_button\" md-raised-button color=\"primary\" [routerLink]=\"['/donate', project?.id]\">Donate</button>\n              <button class=\"remind_button\" md-raised-button>♥ Favourite</button>\n              <button class=\"share_button\" md-raised-button>Share</button>\n            </span>\n            </md-card>\n          </div>\n          <div class=\"colum_right\">\n            <div class=\"updates\">\n              <app-update [updates] = \"project?.updates\"></app-update>\n            </div>\n          </div>\n      </div>\n</md-card>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"main\">\n <md-card class=\"register\">\n   <h1>Sign Up</h1>\n   <form role=\"form\" (ngSubmit)=\"registerForm.form.valid ? register(registerForm) : null\" #registerForm=\"ngForm\">\n   <md-card class=\"app-input-section form-group\">\n    <md-input-container>\n     <input mdInput type=\"text\" [(ngModel)]=\"user.first_name\" name=\"first_name\" class=\"form-control\" placeholder=\"First Name\">\n     <md-hint *ngIf=\"(error.subject == 'first_name')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n    </md-input-container>\n   </md-card>   \n   <md-card class=\"app-input-section form-group\">\n     <md-input-container>\n     <input mdInput type=\"text\" [(ngModel)]=\"user.last_name\" name=\"last_name\" class=\"form-control\" placeholder=\"Last Name\">\n     <md-hint *ngIf=\"(error.subject == 'last_name')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n   <md-card class=\"app-input-section form-group\">\n     <md-input-container>\n     <input mdInput type=\"text\" [(ngModel)]=\"user.email\" required name=\"email\" class=\"form-control\" placeholder=\"Email\">\n     <md-hint *ngIf=\"(error.subject == 'email')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n   <md-card class=\"app-input-section form-group\">\n     <md-input-container>\n     <input mdInput type=\"password\" [(ngModel)]=\"user.password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\">\n     <md-hint *ngIf=\"(error.subject == 'password')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n  <md-card class=\"app-input-section form-group\">\n    <md-input-container>\n     <input mdInput type=\"password\" [(ngModel)]=\"user.password_confirmation\" required name=\"password_confirmation\" class=\"form-control\" placeholder=\"Confirm Password\">\n     <md-hint *ngIf=\"(error.subject == 'password_confirmation')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n   <md-card class=\"app-input-section form-group\">\n    <md-input-container>\n     <input mdInput type=\"text\" [(ngModel)]=\"user.birth_date\" name=\"birth_date\" class=\"form-control\" placeholder=\"Date of Birth\">\n     <md-hint *ngIf=\"(error.subject == 'birth_date')\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{error.message}}</md-hint>\n     </md-input-container>\n   </md-card>\n   <button md-raised-button color=\"primary\" type=\"submit\">Submit</button>\n   </form>\n </md-card>\n</md-card>"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<div class=\"left\">\n<form (submit)=\"submit()\" #searchForm=\"ngForm\">\n\t<md-input-container class=\"search\">\n\t      <input mdInput type=\"text\" [(ngModel)]=\"query\" name=\"query\" class=\"form-control\" placeholder=\"Find Project\">\n\t</md-input-container>\n</form>\n</div>\n\n<div class=\"right\">\n<md-select placeholder=\"Sort By\" (ngModelChange)=\"generateSort($event)\" [(ngModel)]=\"sort\">\n\t<md-option *ngFor=\"let s of sorts\" name=\"sort\" [value]=\"s.value\"><span>{{ s.name }}</span></md-option>\n</md-select>\n</div>\n\n<app-card [amount]=12 [filter]=\"filter\" [sort]=\"sort\"></app-card>"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n  <div *ngIf=\"active\" class=\"slider__slides\">\n\n    <div\n      *ngFor=\"let slide of active; let i = index;\"\n      (click)=\"onClick(i)\">\n      <div\n        class=\"slider__slide-image\"\n        [style.background-image]=\"'url(' + slide.imgSrc +')'\"\n        >\n        <div class=\"slider__slide-overlay\">\n          <div class=\"slider__slide-content\">\n            <h3 class=\"slider__slide-title\">{{ slide.title }}</h3>\n            <p class=\"slider__slide-subtitle\">{{ slide.subtitle }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n  <div class=\"update\" *ngFor=\"let update of updates; let i=index; let last = last;\" [class.last-item]=\"last\">\n    <md-card-title>\n      <h4>{{ update.name }}</h4>\n    </md-card-title>\n\n    <md-card-content>\n      <p>{{ update.description }}</p>\n    </md-card-content>\n\n      <md-card-actions>\n        <button md-button md-ripple (click)=\"viewUpdate(update.id)\">\n          Read More\n        </button>\n      </md-card-actions>\n      <br>\n      <hr>\n  </div>\n</md-card>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariable; });
var GlobalVariable = Object.freeze({
    BASE_URL: '/',
});
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/global.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(24);
/* harmony export (immutable) */ __webpack_exports__["a"] = contentHeaders;

var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');
function addToken() {
    if (localStorage.getItem('currentUser') !== null) {
        var token = JSON.parse(localStorage.getItem('currentUser')).token;
        if (headers.has('Token')) {
            headers.set('Token', token);
        }
        else {
            headers.append('Token', token);
        }
    }
    else {
        if (headers.has('Token')) {
            headers.delete('Token');
        }
    }
}
function contentHeaders() {
    addToken();
    return headers;
}
//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/headers.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_service__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__registration_service__["a"]; });


//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/index.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=/Users/user/Desktop/barbelo-frontend/src/user.js.map

/***/ })

},[684]);
//# sourceMappingURL=main.bundle.js.map