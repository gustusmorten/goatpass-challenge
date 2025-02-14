export interface LoginFormInterface {
    email: string;
    password: string;
}

export interface LoginFormResponseInterface {
    user_name: string;
    email: string;
    token: string;
}