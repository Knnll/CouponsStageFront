import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  onViewAccueil() {
    this.router.navigateByUrl('');
}

  onViewList() {
    this.router.navigateByUrl('coupons')
  }

}
