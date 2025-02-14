import { LoginFormInterface, LoginFormResponseInterface } from '@/api/interfaces';
import axios from 'axios';

/**
 * Realiza una petición de login
 * @param loginData Datos de login
 * @returns Promise<LoginFormResponseInterface>
 */
export const loginPost = async (loginData: LoginFormInterface): Promise<LoginFormResponseInterface> => {
    try {
        const response = await axios.post<LoginFormResponseInterface>('/auth/login', loginData);
        return response.data;
    } catch (error) {
        console.error('Error en loginCall', error);
        throw error;
    }
}