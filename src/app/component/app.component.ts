import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  title = 'GoToStock';
  constructor(router: Router){
    router.navigate(['/stock']);
  }
}
