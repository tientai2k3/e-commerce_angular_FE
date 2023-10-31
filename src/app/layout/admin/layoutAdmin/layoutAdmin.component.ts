import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenCookiesService } from 'src/app/util/tokenCookies.service';

@Component({
  selector: 'app-layoutAdmin',
  templateUrl: './layoutAdmin.component.html',
  styleUrls: ['./layoutAdmin.component.css'],
})
export class LayoutAdminComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenCookiesService
  ) {}

  ngOnInit() {
    console.log(this.tokenService.getToken());
  }
}
