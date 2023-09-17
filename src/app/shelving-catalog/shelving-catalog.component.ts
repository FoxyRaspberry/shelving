import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shelving-catalog',
  styleUrls: ['./shelving-catalog.component.scss'],
  templateUrl: './shelving-catalog.component.html',
})
export class ShelvingCatalogComponent {
  public cellsCount = 1;
  public shelvesCount = 1;
  public shelvingsCount = 1;
  public product: Product | null = null;

  private productsMap = generateProducts(125);

  public onCellUnderCursor(productID: number): void {
    this.product = this.productsMap.get(productID) || null;
  }
}

const productNames: string[] = [
  'Backpack',
  'Book',
  'Cup',
  'Lawn mower',
  'Magazine',
  'Monitor',
  'Rollers',
  'Smartphone',
  'Suitcase',
];

interface Product {
  id: number;
  price: number;
  title: string;
}

function generateProducts(count: number): Map<number, Product> {
  const productsMap = new Map<number, Product>();
  for (let productID = 0; productID < count; productID++) {
    const title = productNames[getRandomNumber(0, productNames.length - 1)] + ' ' + productID;
    const product: Product = {
      id: productID,
      price: getRandomNumber(600, 897),
      title,
    };
    productsMap.set(productID, product);
  }
  return productsMap;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
