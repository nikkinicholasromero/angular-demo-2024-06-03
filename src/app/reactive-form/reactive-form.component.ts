import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-reactive-form',
  template: `
    <input type="text" [formControl]="color" class="border-solid border-red-700 border-8">
    {{ color.value }}

    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="firstName" class="border-solid border-red-700 border-8">
      <input type="text" formControlName="lastName" class="border-solid border-red-700 border-8">

      <div formGroupName="address">
        <h2>Address</h2>
        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">
        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">
        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">
        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
      </div>

      <button type="submit" class="btn-primary">Submit</button>
    </form>

    <form [formGroup]="profileForm2" (ngSubmit)="onSubmit2()">
      <input type="text" formControlName="firstName" class="border-solid border-red-700 border-8">
      <input type="text" formControlName="lastName" class="border-solid border-red-700 border-8">

      <div formGroupName="address">
        <h2>Address</h2>
        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">
        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">
        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">
        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
      </div>

      <div formArrayName="aliases">
        <h2>Aliases</h2>
        <button type="button" (click)="addAlias()">
          + Alias
        </button>

        <div *ngFor="let alias of aliases.controls; let i=index">
          <label for="alias-{{ i }}">Alias:</label>
          <input type="text" id="alias-{{ i }}" [formControlName]="i">
        </div>
      </div>

      <button type="submit" class="btn-primary">Submit</button>
    </form>

    <p>Form Status: {{ profileForm2.status }} </p>
  `,
  imports: [ReactiveFormsModule, NgFor]
})
export class ReactiveFormComponent {
  color = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  profileForm2 = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  onSubmit2() {
    console.log(this.profileForm2.value);
  }

  get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
