import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'nature-portfolio';
  page = 'publications'
  currentRoute: any = 'publications'
  constructor(private route: ActivatedRoute) {
    this.currentRoute = this.route.routeConfig
    const url: string = this.route.snapshot.url.join('');
    console.log('route config:', url)
  }
}
