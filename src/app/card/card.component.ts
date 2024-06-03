import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, afterNextRender, afterRender } from "@angular/core";
import { LoginForm } from "../login-form/login-form.component";

@Component({
  standalone: true,
  selector: 'app-card',
  template: `
        <div class="border-2 border-black bg-red-900">
            <ng-content select="card-header"></ng-content>
            <hr>
            {{message}}
            <hr>
            <ng-content></ng-content>
        </div>
    `
})
export class Card implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy {
  message: string = "";

  constructor() {
    afterNextRender(() => {
      console.log("Card afterNextRender");
    });

    afterRender(() => {
      console.log("Card afterRender");
    });
  }

  ngOnInit(): void {
    console.log("Card ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Card ngOnChanges");
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  ngDoCheck(): void {
    console.log("Card ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("Card ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("Card ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("Card ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("Card ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("Card ngOnDestroy");
  }
}
