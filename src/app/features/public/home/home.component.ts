import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item-post/models/item-post.model';
import { ItemPostService } from '../../item-post/services/item-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items$?: Observable<Item[]>;
  constructor(private itemPostService: ItemPostService) {

  }

  ngOnInit(): void {
      this.items$ = this.itemPostService.getAllItems();
  }
}
