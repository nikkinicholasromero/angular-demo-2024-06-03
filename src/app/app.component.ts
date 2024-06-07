import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, Type, ViewChild } from '@angular/core';
import { LoginForm } from './login-form/login-form.component';
import { v4 as uuid } from 'uuid';
import { afterNextRender } from '@angular/core';
import { afterRender } from '@angular/core';
import { AnonymousCard } from './anonymous-card/anonymous-card.component';
import { AuthenticatedCard } from './authenticated-card/authenticated-card.component';
import { NgComponentOutlet } from '@angular/common';
import { GreetPipe } from './pipe/greet.pipe';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { FlyingHeroes } from './flying-heroes/flying-heroes.component';
import { SvgComponent } from './svg/svg.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-reactive-form></app-reactive-form>
    <app-template-form></app-template-form>

    @if (2 > 1) {
      <p>2 > 1</p>
    } @else {
      <p>2 <= 1</p>
    }

    @for (item of items; track item.id) {
      <p>{{ item.name }}</p>
    } @empty {
      <li> There are no items.</li>
    }

   <p>{{ "Nikki" | greet }}</p>
   <p>{{ 2 | exponentialStrength : 10 }}</p>

    <button type="button" class="btn-primary" (click)="changeChild()" #button>{{parentLabel}}</button>
    <hr>
    <app-login-form [childLabel]='childLabel' (buttonClicked)="changeParent($event)"></app-login-form>

    <ng-container *ngComponentOutlet="card"></ng-container>

    <app-flying-heroes></app-flying-heroes>

    <app-svg></app-svg>

  `,
  imports: [
    NgComponentOutlet,
    LoginForm,
    AnonymousCard,
    AuthenticatedCard,
    FlyingHeroes,
    SvgComponent,
    GreetPipe,
    ExponentialStrengthPipe,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  providers: [
    NgComponentOutlet
  ]
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy {
  childLabel: string = uuid();
  parentLabel: string = uuid();

  @ViewChild(LoginForm, { static: true })
  loginForm!: LoginForm;

  @ViewChild('button')
  button!: ElementRef;

  card!: Type<any> | null;

  items: { id: number, name: string }[] = [{
    id: 1,
    name: "Nikki"
  }, {
    id: 2,
    name: "Leslie"
  }, {
    id: 3,
    name: "Maven"
  }, {
    id: 4,
    name: "Megan"
  }];

  constructor() {
    afterNextRender(() => {
      console.log("AppComponent afterNextRender");
    });

    afterRender(() => {
      console.log("AppComponent afterRender");
    });
  }

  ngOnInit(): void {
    console.log("AppComponent ngOnInit");
    console.log("this.loginForm : " + this.loginForm);
    console.log("this.button : " + this.button);
    this.childLabel = uuid();
    this.parentLabel = uuid();
    this.card = (~~(Math.random() * 100) % 2) == 0 ? AnonymousCard : AuthenticatedCard;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent ngOnChanges");
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  ngDoCheck(): void {
    console.log("AppComponent ngDoCheck");
  }

  ngAfterViewInit(): void {
    console.log("AppComponent ngAfterViewInit");
    console.log("this.loginForm.childLabel : " + this.loginForm.childLabel);
    console.log("this.button.nativeElement.type : " + this.button.nativeElement.type);
  }

  ngAfterContentInit(): void {
    console.log("AppComponent ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("AppComponent ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("AppComponent ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("AppComponent ngOnDestroy");
  }

  changeChild(): void {
    this.childLabel = uuid();
  }

  changeParent($event: string): void {
    this.parentLabel = $event;
  }
}
