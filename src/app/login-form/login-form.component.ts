import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, afterNextRender, afterRender, output } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Card } from "../card/card.component";

@Component({
  standalone: true,
  selector: 'app-login-form',
  template: `
    <app-card [title]='"Login"'>
      <div ngProjectAs="card-header">
        <h1>Login</h1>
      </div>

      <button type="button" class="btn-primary" (click)='change()'>{{childLabel}}</button>
    </app-card>
  `,
  imports: [
    Card
  ]
})
export class LoginForm implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy {
  @Input({ required: true })
  childLabel = '';

  buttonClicked = output<string>();

  constructor() {
    afterNextRender(() => {
      console.log("LoginForm afterNextRender");
    });

    afterRender(() => {
      console.log("LoginForm afterRender");
    });
  }

  ngOnInit(): void {
    console.log("LoginForm ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("LoginForm ngOnChanges");
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  ngDoCheck(): void {
    console.log("LoginForm ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("LoginForm ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("LoginForm ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("LoginForm ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("LoginForm ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("LoginForm ngOnDestroy");
  }

  change() {
    this.buttonClicked.emit(uuid());
  }
}
