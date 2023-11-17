import {Injectable} from '@angular/core';
import {IItemGroup} from "../interfaces/item-group.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategoriesData(): IItemGroup[] {
    return [
      {
        id: 1,
        name: "Food",
        description: 'Group Description 1',
        status: 1,
        icon: "basket-outline"
      },
      {
        id: 2,
        name: "Books",
        description: 'Group Description 2',
        status: 2,
        icon: "library-outline"
      },
      {
        id: 3,
        name: "Travel",
        description: 'Group Description 3',
        status: 1,
        icon: "airplane-outline"
      },
      {
        id: 4,
        name: "Clothes",
        description: 'Group Description 4',
        status: 1,
        icon: "shirt-outline"
      },
    ];
  }

  getCategories() {
    return Promise.resolve(this.getCategoriesData());
  }
};
