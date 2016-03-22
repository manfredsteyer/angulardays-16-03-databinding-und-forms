System.register(['angular2/core', '../services/flug-service', '../pipes/ort-pipe', 'angular2/router', 'angular2/common', '../validation/ort-validator', '../validation/ort-validator-async'], function(exports_1, context_1) {
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
    var core_1, flug_service_1, ort_pipe_1, router_1, common_1, ort_validator_1, ort_validator_async_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (ort_validator_async_1_1) {
                ort_validator_async_1 = ort_validator_async_1_1;
            }],
        execute: function() {
            // var MY_DIRECTIVES = [FlugCard];
            FlugSuchen = (function () {
                function FlugSuchen(flugService, fb) {
                    this.flugService = flugService;
                    this.fb = fb;
                    this.von = "Graz";
                    this.nach = "Hamburg";
                    this.filter = fb.group({
                        'von': [
                            'Graz',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(30),
                                ort_validator_1.OrtValidator.validate
                            ]),
                            common_1.Validators.composeAsync([
                                ort_validator_async_1.OrtValidatorAsync.validate
                            ])
                        ],
                        'nach': [
                            'Hamburg'
                        ]
                    });
                }
                FlugSuchen.prototype.suchen = function () {
                    this.flugService
                        .find(this.filter.value.von, this.filter.value.nach);
                };
                Object.defineProperty(FlugSuchen.prototype, "fluege", {
                    // public fluege: Array<IFlug> = new Array<IFlug>();
                    get: function () {
                        return this.flugService.fluege;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlugSuchen.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.html',
                        pipes: [ort_pipe_1.OrtPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, common_1.FormBuilder])
                ], FlugSuchen);
                return FlugSuchen;
            }());
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.js.map