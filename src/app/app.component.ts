import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Shelving';
}
