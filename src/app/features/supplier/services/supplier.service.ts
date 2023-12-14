import { Injectable } from '@angular/core';
import { AddSupplierRequest } from '../models/add-supplier-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/supplier.model';
import { environment } from 'src/environments/environment';
import { UpdateSupplierRequest } from '../models/update-supplier-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${environment.apiBaseUrl}/api/suppliers`);
  }

  getSupplierById(id: string): Observable<Supplier> {
    return this.http.get<Supplier>(`${environment.apiBaseUrl}/api/suppliers/${id}`);
  }

  // authentication

  addSupplier(model: AddSupplierRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/suppliers?addAuth=true`, model);
  }

  updateSupplier(id: string, updateSupplierRequest: UpdateSupplierRequest) : Observable<Supplier> {
    return this.http.put<Supplier>(`${environment.apiBaseUrl}/api/suppliers/${id}?addAuth=true`, updateSupplierRequest);
  }

  deleteSupplier(id: string) : Observable<Supplier> {
    return this.http.delete<Supplier>(`${environment.apiBaseUrl}/api/suppliers/${id}?addAuth=true`);
  }
}
