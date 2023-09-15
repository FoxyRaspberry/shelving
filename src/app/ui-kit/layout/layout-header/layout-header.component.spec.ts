import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LayoutHeaderComponent } from './layout-header.component'

describe('LayoutHeaderComponent', (): void => {
  let component: LayoutHeaderComponent
  let fixture: ComponentFixture<LayoutHeaderComponent>

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,

        // For the app.
        LayoutHeaderComponent,
      ],
    })
    fixture = TestBed.createComponent(LayoutHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
