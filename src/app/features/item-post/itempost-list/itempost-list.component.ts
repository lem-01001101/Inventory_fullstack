import { Component, OnInit } from '@angular/core';
import { ItemPostService } from '../services/item-post.service';
import { Observable } from 'rxjs';
import { Item } from '../models/item-post.model'

@Component({
  selector: 'app-itempost-list',
  templateUrl: './itempost-list.component.html',
  styleUrls: ['./itempost-list.component.css']
})
export class ItempostListComponent implements OnInit {

  items$?: Observable<Item[]>;

  constructor(private itemPostService: ItemPostService){

  }

  ngOnInit(): void {
      // get all items from api
      this.items$ = this.itemPostService.getAllItems();     
  }
}
