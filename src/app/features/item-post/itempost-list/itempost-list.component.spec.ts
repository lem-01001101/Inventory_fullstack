import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempostListComponent } from './itempost-list.component';

describe('ItempostListComponent', () => {
  let component: ItempostListComponent;
  let fixture: ComponentFixture<ItempostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItempostListComponent]
    });
    fixture = TestBed.createComponent(ItempostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
