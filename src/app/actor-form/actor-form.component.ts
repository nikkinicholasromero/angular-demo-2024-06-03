import { JsonPipe, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-actor-form',
  template: `
  {{ model | json }}
    <form action="" #actorForm="ngForm">
      <input type="text" class="form-control" id="name"
            required
            [(ngModel)]="model.name" name="name">
      <input type="text" class="form-control" id="studio"
            required
            [(ngModel)]="model.studio" name="studio">

      <div class="form-group">
        <label for="skill">Skill</label>
        <select class="form-control" id="skill" required [(ngModel)]="model.skill" name="skill">
          <option *ngFor="let skill of skills" [value]="skill">{{ skill }}</option>
        </select>
      </div>

      <button class="submit">Submit</button>
      <input type="text">
    </form>
  `,
  imports: [FormsModule, NgFor, JsonPipe]
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}

export class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string
  ) { }
}
