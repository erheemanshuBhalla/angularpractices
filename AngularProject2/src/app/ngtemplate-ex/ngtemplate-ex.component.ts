import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate-ex',
  standalone: false,
  templateUrl: './ngtemplate-ex.component.html',
  styleUrl: './ngtemplate-ex.component.css'
})
export class NgtemplateExComponent {
  isTemplateVisible = false;

  showTemplate() {
    this.isTemplateVisible = true;
  }
}
