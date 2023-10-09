import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, IonicModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() translucent: boolean = false;
  @Input() collapse: boolean = false;
}
