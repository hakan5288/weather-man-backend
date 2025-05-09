"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFilter = void 0;
const common_1 = require("@nestjs/common");
const response_utils_1 = require("../utils/response.utils");
let ValidationFilter = class ValidationFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        let message = 'An error occurred';
        let errors = [];
        if (status === common_1.HttpStatus.BAD_REQUEST) {
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === 'object' && 'message' in exceptionResponse) {
                errors = Array.isArray(exceptionResponse.message)
                    ? exceptionResponse.message
                    : [exceptionResponse.message];
                message = 'Validation failed';
            }
        }
        else {
            message = exception.message;
        }
        response.status(status).json((0, response_utils_1.createResponse)('error', message, null, errors));
    }
};
exports.ValidationFilter = ValidationFilter;
exports.ValidationFilter = ValidationFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], ValidationFilter);
//# sourceMappingURL=validation.filter.js.map