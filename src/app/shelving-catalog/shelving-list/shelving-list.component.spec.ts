import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvingListComponent } from './shelving-list.component';

describe('ShelvingListComponent', () => {
  let component: ShelvingListComponent;
  let fixture: ComponentFixture<ShelvingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelvingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelvingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
