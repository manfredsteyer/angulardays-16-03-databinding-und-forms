System.register(['angular2/core', 'angular2/router', '../services/flug-service', '../validation/ort-validator-directive', '../validation/ort-validator-async-directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_service_1, ort_validator_directive_1, ort_validator_async_directive_1;
    var FlugEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (ort_validator_directive_1_1) {
                ort_validator_directive_1 = ort_validator_directive_1_1;
            },
            function (ort_validator_async_directive_1_1) {
                ort_validator_async_directive_1 = ort_validator_async_directive_1_1;
            }],
        execute: function() {
            FlugEdit = (function () {
                function FlugEdit(flugService, params) {
                    var _this = this;
                    this.flugService = flugService;
                    this.message = "";
                    this.flug = {};
                    this.info = "Flug-Edit";
                    this.id = parseInt(params.get('id'));
                    flugService.getById(this.id).subscribe(function (flug) {
                        _this.flug = flug;
                    }, function (err) {
                        _this.message = err;
                        console.error(err);
                    });
                }
                FlugEdit = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-edit/flug-edit.html',
                        directives: [ort_validator_directive_1.OrtValidatorDirective, ort_validator_async_directive_1.OrtValidatorAsyncDirective]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, router_1.RouteParams])
                ], FlugEdit);
                return FlugEdit;
            }());
            exports_1("FlugEdit", FlugEdit);
        }
    }
});
//# sourceMappingURL=flug-edit.js.map