import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoriesService} from "../../../services/categories.service";
import {IonicModule, IonModal} from "@ionic/angular";
import {CreateTaskFormComponent} from "../create-task-form/create-task-form.component";
import {CreateCategoryFormComponent} from "../../categories/create-category-form/create-category-form.component";

@Component({
  selector: 'app-add-category-button',
  templateUrl: './add-category-button.component.html',
  styleUrls: ['./add-category-button.component.scss'],
  imports: [IonicModule, CreateTaskFormComponent, CreateCategoryFormComponent],
  standalone: true
})
export class AddCategoryButtonComponent  implements OnInit {
  @ViewChild(IonModal) modalTask!: IonModal;

  public isModalTaskOpen: boolean = false;
  public isModalCategoryOpen: boolean = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {}

  onAddCategoryOpenForm(){
    this.isModalCategoryOpen = !this.isModalCategoryOpen;
    console.log("add category")
  }

  onAddTaskOpenForm(){
    this.isModalTaskOpen = !this.isModalTaskOpen;
    console.log("add task")
  }

  onSaveCategory() {
    this.isModalCategoryOpen = false;

  }

  onSaveTask() {
      this.isModalTaskOpen = false;
  }
}
