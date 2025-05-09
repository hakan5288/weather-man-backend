"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = createResponse;
function createResponse(status, message, data = null, errors = []) {
    return { status, message, data: data, errors: errors.length > 0 ? errors : null };
}
//# sourceMappingURL=response.utils.js.map