import { Injectable } from '@angular/core';
import {IItem} from "../interfaces/item.interface";

@Injectable()
export class ItemService {
    getItemsData() {
        return [
            {
                id: '1000',
                description: 'Product Description',
                category: 1,
                quantity: 24,
                status: 1,
            },
            {
                id: '1001',
                description: 'Product Description',
                category: 1,
                quantity: 61,
                status: 2,
            },
            {
                id: '1002',
                description: 'Product Description',
                category: 2,
                quantity: 2,
                status: 1,
            },
            {
                id: '1003',
                description: 'Product Description',
                category: 3,
                quantity: 25,
                status: 1,
            },
            {
                id: '1004',
                description: 'Product Description',
                category: 1,
                quantity: 73,
                status: 1,
            },
            {
                id: '1005',
                description: 'Product Description',
                category: 1,
                quantity: 0,
                status: 2,
            },
            {
                id: '1006',
                description: 'Product Description',
                category: 1,
                quantity: 5,
                status: 1,
            },
            {
                id: '1007',
                description: 'Product Description',
                category: 1,
                quantity: 23,
                status: 1,
            },
            {
                id: '1008',
                description: 'Product Description',
                category: 4,
                quantity: 2,
                status: 1,
            },
            {
                id: '1009',
                description: 'Product Description',
                category: 4,
                quantity: 63,
                status: 1,
            },
            {
                id: '1010',
                description: 'Product Description',
                category: 1,
                quantity: 0,
                status: 2,
            },
            {
                id: '1011',
                description: 'Product Description',
                category: 4,
                quantity: 23,
                status: 1,
            },
            {
                id: '1012',
                description: 'Product Description',
                category: 3,
                quantity: 74,
                status: 1,
            },
            {
                id: '1013',
                description: 'Product Description',
                category: 3,
                quantity: 0,
                status: 2,
            },
            {
                id: '1014',
                description: 'Product Description',
                category: 4,
                quantity: 8,
                status: 1,
            },
            {
                id: '1015',
                description: 'Product Description',
                category: 3,
                quantity: 34,
                status: 1,
            },
            {
                id: '1016',
                description: 'Product Description',
                category: 2,
                quantity: 12,
                status: 1,
            },
            {
                id: '1017',
                description: 'Product Description',
                category: 3,
                quantity: 42,
                status: 1,
            },
            {
                id: '1018',
                description: 'Product Description',
                category: 1,
                quantity: 41,
                status: 1,
            },
            {
                id: '1019',
                description: 'Product Description',
                category: 2,
                quantity: 63,
                status: 1,
            },
            {
                id: '1020',
                description: 'Product Description',
                category: 1,
                quantity: 0,
                status: 2,
            },
            {
                id: '1021',
                description: 'Product Description',
                category: 2,
                quantity: 6,
                status: 1,
            },
            {
                id: '1022',
                description: 'Product Description',
                category: 1,
                quantity: 62,
                status: 1,
            },
            {
                id: '1023',
                description: 'Product Description',
                category: 3,
                quantity: 2,
                status: 1,
            },
            {
                id: '1024',
                description: 'Product Description',
                category: 3,
                quantity: 0,
                status: 1,
            },
            {
                id: '1025',
                description: 'Product Description',
                category: 3,
                quantity: 52,
                status: 1,
            },
            {
                id: '1026',
                description: 'Product Description',
                category: 3,
                quantity: 3,
                status: 1,
            },
            {
                id: '1027',
                description: 'Product Description',
                category: 4,
                quantity: 35,
                status: 1,
            },
            {
                id: '1028',
                description: 'Product Description',
                category: 2,
                quantity: 15,
                status: 1,
            },
            {
                id: '1029',
                description: 'Product Description',
                category: 2,
                quantity: 25,
                status: 1,
            }
        ];
    }

    getItems(id: number):Promise<IItem[]> {
        return Promise.resolve(this.getItemsData().filter(obj=>obj.category === id));
    }
};
