import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IItemGroup} from "../../interfaces/item-group.interface";
import {ItemsGroupService} from "../../services/items-group.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {IonicModule, Platform} from "@ionic/angular";

@Component({
  selector: 'app-items-group',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, IonicModule],
  templateUrl: './items-group.component.html',
  styleUrls: ['./items-group.component.css']
})
export class ItemsGroupComponent {
  public groups: IItemGroup[] = [];
  private platform = inject(Platform);
  private groupService =  inject(ItemsGroupService);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.groups = this.groupService.getGroupsData();
  }

  isIos() {
    return this.platform.is('ios')
  }
}
