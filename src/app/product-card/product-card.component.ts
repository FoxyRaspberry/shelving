import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-card',
  styleUrls: ['./product-card.component.scss'],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() public price: number | null = null;
  @Input() public title: string | null = null;
}
