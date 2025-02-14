import { LoginFormInterface, LoginFormResponseInterface } from '@/api/interfaces';
import { mockApiCall } from '../utils';
import { loginResponses } from './auth-responses';


/**
 * Realiza una petición de login
 * @param loginData Datos de login
 * @returns Promise<LoginFormResponseInterface>
 * En caso de ser un mock podemos cambiar la respuesta deseada usando los keys de loginResponses
 */
export const loginPost = async (loginData: LoginFormInterface): Promise<LoginFormResponseInterface> => {
    
    return mockApiCall(loginResponses.success);
}