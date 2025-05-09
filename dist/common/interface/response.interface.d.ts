export interface ApiResponse<T> {
    status: 'success' | 'error';
    message: string;
    data: T | null;
    errors?: string[] | null;
}
