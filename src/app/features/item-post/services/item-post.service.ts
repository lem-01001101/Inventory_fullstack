import { Injectable } from '@angular/core';
import { AddItem } from '../models/add-item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item-post.model'
import { UpdateItem } from '../models/update-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemPostService {

  constructor(private http: HttpClient) { }

  createItem(data: AddItem): Observable<Item> {
    return this.http.post<Item>(`${environment.apiBaseUrl}/api/Item?addAuth=true`,data);
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiBaseUrl}/api/Item`);
  }

  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${environment.apiBaseUrl}/api/Item/${id}`)
  }

  updateItem(id: string, updatedItem: UpdateItem): Observable<Item> {
    return this.http.put<Item>(`${environment.apiBaseUrl}/api/Item/${id}?addAuth=true`, updatedItem);
  }

  deleteItem(id: string): Observable<Item> {
    return this.http.delete<Item>(`${environment.apiBaseUrl}/api/Item/${id}?addAuth=true`);
  }
}
