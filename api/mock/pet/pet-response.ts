import { NewPetFormResponseInterface } from '@/api/interfaces/pet/pet';

export const newPetResponses = {
    success: {
        status: 200,
        data: {
            id: 1,
        } as NewPetFormResponseInterface,
    },
    error: {
        status: 401,
        data: null,
        error: 'Unauthorized',
    },
    serverError: {
        status: 500,
        data: null,
        error: 'Server error',
    },
}

export const petsResponses = {
    success: {
        status: 200,
        data: {
            pets: [
                {
                    id: 1,
                    name: 'Osito',
                    weight: 5,
                    type: 'Cat',
                    vacinations: [
                        {
                            date: '2021-09-01',
                            name: 'Rabies',
                        },
                    ],
                    photo: 'https://i.pinimg.com/736x/41/76/4c/41764ce16ebb6d92a96cd67097768227.jpg',
                },
                
                {
                    id: 2,
                    name: 'Rex',
                    weight: 10,
                    type: 'Dog',
                    vacinations: [
                        {
                            date: '2021-09-01',
                            name: 'Rabies',
                        },
                        {
                            date: '2021-09-01',
                            name: 'Parvo',
                        },
                    ],
                    photo: 'https://i.pinimg.com/736x/d6/49/6a/d6496a335fd6a6dc9ca1d282e5e045ad.jpg',
                },
                {
                    id: 3,
                    name: 'Cheeto',
                    weight: 5,
                    type: 'Cat',
                    vacinations: [
                        {
                            date: '2021-09-01',
                            name: 'Rabies',
                        },
                    ],
                    photo: 'https://i.pinimg.com/736x/6e/60/10/6e6010bea9151f639ad9c05df02009f8.jpg',
                }
            ],
        },
    },
    error: {
        status: 401,
        data: null,
        error: 'Unauthorized',
    },
    serverError: {
        status: 500,
        data: null,
        error: 'Server error',
    },
}
export const petResponses = {
    success: {
        "1": {
            status: 200,
            data: {
                id: 1,
                name: 'Osito',
                weight: 5,
                type: 'Cat',
                vacinations: [
                    {
                        date: '2021-09-01',
                        name: 'Rabies',
                    },
                    {
                        date: '2021-09-01',
                        name: 'Parvo',
                    }
                ],
                photo: 'https://i.pinimg.com/736x/41/76/4c/41764ce16ebb6d92a96cd67097768227.jpg',
            },
        },
        "2": {
            status: 200,
            data: {
                id: 2,
                name: 'Rex',
                weight: 10,
                type: 'Dog',
                vacinations: [
                    {
                        date: '2021-09-01',
                        name: 'Rabies',
                    },
                    {
                        date: '2021-09-01',
                        name: 'Parvo',
                    },
                    {
                        date: '2021-09-01',
                        name: 'Parvo',
                    },
                    {
                        date: '2021-09-01',
                        name: 'Parvo',
                    }

                ],
                photo: 'https://i.pinimg.com/736x/d6/49/6a/d6496a335fd6a6dc9ca1d282e5e045ad.jpg',
            },
            
        },
        "3": {
            status: 200,
            data: {
                id: 3,
                name: 'Cheeto',
                weight: 5,
                type: 'Cat',
                vacinations: [
                    {
                        date: '2021-09-01',
                        name: 'Rabies',
                    },
                ],
                photo: 'https://i.pinimg.com/736x/6e/60/10/6e6010bea9151f639ad9c05df02009f8.jpg',
            },
        },
    },
    error: {
        status: 401,
        data: null,
        error: 'Unauthorized',
    },
    serverError: {
        status: 500,
        data: null,
        error: 'Server error',
    },
}