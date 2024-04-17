import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolledDown: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event) {
    const scrollingPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollingPosition > 0) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }
  }
}
