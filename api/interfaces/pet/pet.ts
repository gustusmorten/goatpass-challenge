export interface VacinationInterface {
    date: string;
    name: string;
}

export interface NewPetFormInterface {
    name: string;
    weight: number;
    type: string;
    vacinations: VacinationInterface[];
}

export interface NewPetFormResponseInterface {
    id: number;
}

export interface PetInterface {
    id: number;
    photo: string;
    name: string;
    weight: number;
    type: string;
    vacinations: VacinationInterface[];
}

export interface PetsResponseInterface {
    pets: PetInterface[];
}

export interface PetRequestInterface {
    id: number;
}

export interface PetResponseInterface extends PetInterface {}