import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-logo',
  styleUrls: ['./logo.component.scss'],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  public title = 'SHELVING';
}
