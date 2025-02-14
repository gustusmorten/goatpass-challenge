import { LoginFormResponseInterface } from '@/api/interfaces';

export const loginResponses = {
    success: {
        status: 200,
        data: {
            user_name: 'John Doe',
            email: 'jd@example.com',
            token: 'jwtTokenExample',
        } as LoginFormResponseInterface,
    },
    error: {
        status: 401,
        data: null,
        error: 'Invalid credentials',
    },
    serverError: {
        status: 500,
        data: null,
        error: 'Server error',
    },
}