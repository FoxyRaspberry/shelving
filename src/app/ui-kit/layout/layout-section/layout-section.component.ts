import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-section',
  styleUrls: ['./layout-section.component.scss'],
  templateUrl: './layout-section.component.html',
})
export class LayoutSectionComponent {}
