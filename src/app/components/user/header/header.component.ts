import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { TokenCookiesService } from 'src/app/util/tokenCookies.service';
import { CartService } from 'src/app/service/user/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user: any;
  listSize: any;
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenCookiesService,
    private cartService: CartService
  ) {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.storageService.getUser();
    }
    console.log(this.user);
  }

  ngOnInit() {
    const id = this.storageService.getUser().id;
    this.cartService.getAllByUser(id).subscribe((data) => {
      this.listSize = data.length;
    });
  }
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        this.storageService.clean();
        this.tokenService.deleteToken();
        this.router.navigate(['/signin']);
      },
    });
  }
}
