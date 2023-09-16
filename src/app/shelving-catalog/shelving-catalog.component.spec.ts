import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvingCatalogComponent } from './shelving-catalog.component';

describe('ShelvingCatalogComponent', (): void => {
  let component: ShelvingCatalogComponent;
  let fixture: ComponentFixture<ShelvingCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelvingCatalogComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShelvingCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
