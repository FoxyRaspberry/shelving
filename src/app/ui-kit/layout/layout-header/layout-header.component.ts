import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-header',
  styleUrls: ['./layout-header.component.scss'],
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {}
