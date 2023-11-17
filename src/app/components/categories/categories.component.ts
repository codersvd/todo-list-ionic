import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IItemGroup} from "../../interfaces/item-group.interface";
import {CategoriesService} from "../../services/categories.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {IonicModule, Platform} from "@ionic/angular";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, IonicModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public groups: IItemGroup[] = [];
  private platform = inject(Platform);
  private categoriesService = inject(CategoriesService);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.groups = this.categoriesService.getCategoriesData();
  }

  isIos() {
    return this.platform.is('ios')
  }
}
