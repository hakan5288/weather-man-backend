import { ApiResponse } from "../interface/response.interface";
export declare function createResponse<T>(status: 'success' | 'error', message: string, data?: T | null, errors?: string[]): ApiResponse<T>;
