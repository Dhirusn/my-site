import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-website';
  showSplash = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false; // Hide the splash screen after a delay
    }, 3000); // 3000 milliseconds (3 seconds) delay
  }
}
