import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './features/supplier/supplier-list/supplier-list.component';
import { AddSupplierComponent } from './features/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './features/supplier/edit-supplier/edit-supplier.component';
import { ItempostListComponent } from './features/item-post/itempost-list/itempost-list.component';
import { AddItemComponent } from './features/item-post/add-item/add-item.component';
import { EditItemComponent } from './features/item-post/edit-item/edit-item.component';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/suppliers',
    component: SupplierListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/suppliers/add',
    component: AddSupplierComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/suppliers/:id',
    component: EditSupplierComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/items',
    component: ItempostListComponent,
    canActivate: [authGuard]
  },
  {
    path:'admin/items/add',
    component: AddItemComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin/items/:id',
    component: EditItemComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
