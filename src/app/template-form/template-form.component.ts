import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-template-form',
  template: `
    <input type="text" [(ngModel)]="color" class="border-solid border-red-700 border-8">
  `,
  imports: [FormsModule]
})
export class TemplateFormComponent {
  color = '';
}
