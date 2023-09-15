import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-header',
  styleUrls: ['./layout-header.component.scss'],
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {}
