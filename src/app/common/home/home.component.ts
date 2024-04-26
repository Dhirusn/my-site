import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { fadeInLeftAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeInRightAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger("scrollanimation", [state('show', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => show', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.8s ease-in')
    ])]),
    trigger("scrollanimation2", [state('show', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('void => show', [
      style({
        opacity: 0,
        transform: 'translateX(200%)'
      }),
      animate('0.8s ease-in')
    ])]),
    fadeInOnEnterAnimation(),
    fadeInLeftOnEnterAnimation(),
    fadeInRightOnEnterAnimation() // higher duration makes the animation start
  ]
})
export class HomeComponent {
  isVisible = false;
  isProjectListVisible = false;
  isContactVisible = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.querySelector('#aboutme') as HTMLElement;
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      this.isVisible = true;
    }

    const element2 = document.querySelector('.projects-grid') as HTMLElement;
    const position2 = element2.getBoundingClientRect().top;
    const windowHeight2 = window.innerHeight;
    if (position2 < windowHeight2) {
      this.isProjectListVisible = true;
    }

    const element3 = document.querySelector('.projects-grid') as HTMLElement;
    const position3 = element3.getBoundingClientRect().top;
    const windowHeight3 = window.innerHeight;
    if (position3 < windowHeight3) {
      this.isContactVisible = true;
    }
  }


}
