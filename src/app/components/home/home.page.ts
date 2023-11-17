import { CommonModule } from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../../message/message.component';

import {HeaderComponent} from "../header/header.component";
import {BottomComponent} from "../bottom/bottom.component";
import {CategoriesComponent} from "../categories/categories.component";
import {AddCategoryButtonComponent} from "../shared/add-category-button/add-category-button.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent, HeaderComponent, BottomComponent, CategoriesComponent, AddCategoryButtonComponent],
})
export class HomePage {
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
}
