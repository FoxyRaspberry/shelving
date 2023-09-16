import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout-footer',
  styleUrls: ['./layout-footer.component.scss'],
  templateUrl: './layout-footer.component.html',
})
export class LayoutFooterComponent {}
