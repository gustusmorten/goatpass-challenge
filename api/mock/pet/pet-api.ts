import { NewPetFormInterface, NewPetFormResponseInterface, PetResponseInterface, PetsResponseInterface } from '@/api/interfaces/pet/pet';
import { mockApiCall } from '../utils';
import { newPetResponses, petResponses, petsResponses } from './pet-response';


/**
 * Realiza una petición de nueva mascota
 * @param newPetPost Datos de la nueva mascota
 * @returns Promise<NewPetFormResponseInterface>
 * En caso de ser un mock podemos cambiar la respuesta deseada usando los keys de newPetResponses
 */
export const newPetPost = async (newPetData: NewPetFormInterface): Promise<NewPetFormResponseInterface> => {
    return mockApiCall(newPetResponses.success);
}

export const getPets = async (): Promise<PetsResponseInterface> => {
    return mockApiCall(petsResponses.success);
}

export const getPet = async (id: string): Promise<PetResponseInterface> => {

    return mockApiCall(petResponses.success[id as keyof typeof petResponses.success]);
}
 