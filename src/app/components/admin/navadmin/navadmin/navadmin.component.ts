import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenCookiesService } from 'src/app/util/tokenCookies.service';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css'],
})
export class NavadminComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenCookiesService
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken == null) {
      this.router.navigate(['/signin']);
    }
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
