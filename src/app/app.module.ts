import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/user/footer/footer.component';
import { HeaderComponent } from './components/user/header/header.component';
import { NavadminComponent } from './components/admin/navadmin/navadmin/navadmin.component';
import { LayoutAdminComponent } from './layout/admin/layoutAdmin/layoutAdmin.component';
import { LayoutUserComponent } from './layout/user/layout-user/layout-user.component';
import { AddCategoryComponent } from './pages/admin/category/addCategory/addCategory.component';
import { EditCategoryComponent } from './pages/admin/category/editCategory/editCategory.component';
import { ListCategoryComponent } from './pages/admin/category/listCategory/listCategory.component';
import { AddProductsComponent } from './pages/admin/products/addProducts/addProducts.component';
import { EditProductsComponent } from './pages/admin/products/editProducts/editProducts.component';
import { ListProductsComponent } from './pages/admin/products/listProducts/listProducts.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { ProductComponent } from './pages/user/product/product.component';
import { SigninComponent } from './pages/user/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/user/about/about.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { AddColorComponent } from './pages/admin/color/addColor/addColor.component';
import { ListColorComponent } from './pages/admin/color/listColor/listColor.component';
import { EditColorComponent } from './pages/admin/color/editColor/editColor.component';
import { AddUserComponent } from './pages/admin/custom/addUser/addUser.component';
import { EditUserComponent } from './pages/admin/custom/editUser/editUser.component';
import { ListUserComponent } from './pages/admin/custom/listUser/listUser.component';
import { MatSelectModule } from '@angular/material/select';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CustomInterceptor } from './util/request.service';
import { BadgeModule } from 'primeng/badge';
import { OrderComponent } from './pages/user/orders/order/order.component';
import { ListOrdersComponent } from './pages/admin/order/listOrders/listOrders.component';
import { OrderDetailComponent } from './pages/admin/order/orderDetail/orderDetail.component';
import { MyhistoryComponent } from './pages/user/orders/myhistory/myhistory.component';
import { OrderItemComponent } from './pages/user/orders/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavadminComponent,
    LayoutAdminComponent,
    LayoutUserComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    AddProductsComponent,
    EditProductsComponent,
    ListProductsComponent,
    CartComponent,
    ProductComponent,
    SigninComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ProductDetailComponent,
    AddColorComponent,
    ListColorComponent,
    EditColorComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ListOrdersComponent,
    CartComponent,
    AddProductsComponent,
    EditProductsComponent,
    ListProductsComponent,
    OrderComponent,
    OrderDetailComponent,
    MyhistoryComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    MessagesModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    BadgeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
