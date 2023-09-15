import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-section',
  styleUrls: ['./layout-section.component.scss'],
  templateUrl: './layout-section.component.html',
})
export class LayoutSectionComponent {}
