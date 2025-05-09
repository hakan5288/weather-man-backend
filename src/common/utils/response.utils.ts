import { ApiResponse } from "../interface/response.interface";
/**
 * Utility function to create a standardized API response.
 * @param status - The status of the response ('success' or 'error').
 * @param message - A message describing the result of the operation.
 * @param data - The data to be included in the response (optional).
 * @returns An object representing the API response.
 */
export function createResponse<T>(
  status: 'success' | 'error',
  message: string,
  data: T | null = null,
  errors: string[] = [],
): ApiResponse<T> {
  return { status, message, data: data, errors: errors.length > 0 ? errors : null };
}