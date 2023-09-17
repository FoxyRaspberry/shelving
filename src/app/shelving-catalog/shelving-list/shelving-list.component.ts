import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shelving-list',
  styleUrls: ['./shelving-list.component.scss'],
  templateUrl: './shelving-list.component.html',
})
export class ShelvingListComponent implements OnInit {
  @Input() public cellsCount: number = 0;
  @Input() public shelvesCount: number = 0;
  @Input() public shelvingsCount: number = 0;

  public cells: string[][][] = [];

  public ngOnInit(): void {
    this.generateCells();
  }

  private generateCells(): void {
    for (let index1 = 0; index1 < this.shelvingsCount; index1++) {
      this.cells.push([]);
      for (let index2 = 0; index2 < this.shelvesCount; index2++) {
        this.cells[index1].push([]);
        for (let index3 = 0; index3 < this.cellsCount; index3++) {
          this.cells[index1][index2].push(`${index1}, ${index2}, ${index3}`);
        }
      }
    }
  }
}
