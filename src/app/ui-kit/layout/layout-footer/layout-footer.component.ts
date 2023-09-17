import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-footer',
  styleUrls: ['./layout-footer.component.scss'],
  templateUrl: './layout-footer.component.html',
})
export class LayoutFooterComponent {}
