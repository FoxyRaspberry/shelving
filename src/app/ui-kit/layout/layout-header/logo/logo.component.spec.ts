import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LogoComponent } from './logo.component'

describe('LogoComponent', (): void => {
  let component: LogoComponent
  let fixture: ComponentFixture<LogoComponent>

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [LogoComponent],
    })
    fixture = TestBed.createComponent(LogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })

  it(`should have as title 'SHELVING'`, (): void => {
    expect(component.title).toEqual('SHELVING')
  })
})
