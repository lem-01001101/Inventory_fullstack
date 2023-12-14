import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SupplierListComponent } from './features/supplier/supplier-list/supplier-list.component';
import { AddSupplierComponent } from './features/supplier/add-supplier/add-supplier.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditSupplierComponent } from './features/supplier/edit-supplier/edit-supplier.component';
import { ItempostListComponent } from './features/item-post/itempost-list/itempost-list.component';
import { AddItemComponent } from './features/item-post/add-item/add-item.component';
import { EditItemComponent } from './features/item-post/edit-item/edit-item.component';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SupplierListComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ItempostListComponent,
    AddItemComponent,
    EditItemComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
