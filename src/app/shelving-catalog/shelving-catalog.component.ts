import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shelving-catalog',
  styleUrls: ['./shelving-catalog.component.scss'],
  templateUrl: './shelving-catalog.component.html',
})
export class ShelvingCatalogComponent {}
