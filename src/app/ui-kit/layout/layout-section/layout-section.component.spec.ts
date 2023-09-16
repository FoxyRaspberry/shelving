import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LayoutSectionComponent } from './layout-section.component'

describe('LayoutSectionComponent', (): void => {
  let component: LayoutSectionComponent
  let fixture: ComponentFixture<LayoutSectionComponent>

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [LayoutSectionComponent],
    })
    fixture = TestBed.createComponent(LayoutSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
