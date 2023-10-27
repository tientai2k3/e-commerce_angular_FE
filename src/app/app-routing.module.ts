import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutUserComponent } from './layout/user/layout-user/layout-user.component';
import { LayoutAdminComponent } from './layout/admin/layoutAdmin/layoutAdmin.component';
import { SigninComponent } from './pages/user/signin/signin.component';
import { RoleGuardService } from './service/roleGuard.service';
import { AboutComponent } from './pages/user/about/about.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { BlogComponent } from './pages/user/blog/blog.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { ListOrdersComponent } from './pages/admin/order/listOrders/listOrders.component';
import { ListCategoryComponent } from './pages/admin/category/listCategory/listCategory.component';
import { AddCategoryComponent } from './pages/admin/category/addCategory/addCategory.component';
import { EditCategoryComponent } from './pages/admin/category/editCategory/editCategory.component';
import { ListColorComponent } from './pages/admin/color/listColor/listColor.component';
import { AddColorComponent } from './pages/admin/color/addColor/addColor.component';
import { EditColorComponent } from './pages/admin/color/editColor/editColor.component';
import { ListUserComponent } from './pages/admin/custom/listUser/listUser.component';
import { AddUserComponent } from './pages/admin/custom/addUser/addUser.component';
import { EditUserComponent } from './pages/admin/custom/editUser/editUser.component';
import { ListProductsComponent } from './pages/admin/products/listProducts/listProducts.component';
import { AddProductsComponent } from './pages/admin/products/addProducts/addProducts.component';
import { EditProductsComponent } from './pages/admin/products/editProducts/editProducts.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { AuthGuardService } from './service/auth-guard.service';
import { OrderComponent } from './pages/user/orders/order/order.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [RoleGuardService],
    data: { expectedRole: 'ROLE_ADMIN' },
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: 'order', component: ListOrdersComponent },
      { path: 'category', component: ListCategoryComponent },
      { path: 'category/add', component: AddCategoryComponent },
      { path: 'category/:id', component: EditCategoryComponent },
      { path: 'color', component: ListColorComponent },
      { path: 'color/add', component: AddColorComponent },
      { path: 'color/:id', component: EditColorComponent },
      { path: 'users', component: ListUserComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/:id', component: EditUserComponent },
      { path: 'products', component: ListProductsComponent },
      { path: 'products/add', component: AddProductsComponent },
      { path: 'products/:id', component: EditProductsComponent },
      // { path: 'product', component: ProductComponent },
      // { path: 'order', component: OrderComponent },
      // { path: 'blog', component: BlogComponent },
      // { path: 'tag', component: TagComponent },
    ],
  },
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: HomeComponent },
      { path: 'shop/:id', component: ProductDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'checkout',
        component: OrderComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
