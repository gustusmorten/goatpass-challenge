import { NewPetFormInterface, NewPetFormResponseInterface, PetResponseInterface, PetsResponseInterface } from '@/api/interfaces/pet/pet';
import axios from 'axios';

/**
 * newPetPost
 * @param newPetData NewPetFormInterface
 * @returns Promise<LoginFormResponseInterface>
 */
export const newPetPost = async (newPetData: NewPetFormInterface): Promise<NewPetFormResponseInterface> => {
    try {
        const response = await axios.post<NewPetFormResponseInterface>('/pets', newPetData);
        return response.data;
    } catch (error) {
        console.error('Error on newPetPost', error);
        throw error;
    }
}

export const getPets = async (): Promise<PetsResponseInterface> => {
    try {
        const response = await axios.get<PetsResponseInterface>('/pets');
        return response.data;
    } catch (error) {
        console.error('Error on getPets ', error);
        throw error;
    }
}

export const getPet = async (id: string): Promise<PetResponseInterface> => {
    try {
        const response = await axios.get<PetResponseInterface>(`/pets/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error on getPet', error);
        throw error;
    }
}