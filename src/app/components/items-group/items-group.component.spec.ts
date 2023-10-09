import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupComponent } from './items-group.component';

describe('ItemsGroupComponent', () => {
  let component: ItemsGroupComponent;
  let fixture: ComponentFixture<ItemsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemsGroupComponent]
    });
    fixture = TestBed.createComponent(ItemsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
