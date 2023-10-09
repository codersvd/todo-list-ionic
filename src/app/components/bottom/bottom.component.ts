import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {AddCategoryButtonComponent} from "../shared/add-category-button/add-category-button.component";

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [CommonModule, IonicModule, AddCategoryButtonComponent],
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

}
