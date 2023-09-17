import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shelving-list',
  styleUrls: ['./shelving-list.component.scss'],
  templateUrl: './shelving-list.component.html',
})
export class ShelvingListComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() public cellsCount: number = 0;
  @Input() public shelvesCount: number = 0;
  @Input() public shelvingsCount: number = 0;
  @Output() public cellUnderCursor = new EventEmitter<number>();

  @ViewChild('container') private containerElementRef: ElementRef<HTMLElement> | undefined;

  public cells: CellData[][][] = [];

  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.generateCells();
  }

  public ngAfterViewInit(): void {
    this.handleEvents();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private generateCells(): void {
    let cellID = 0;
    for (let index1 = 0; index1 < this.shelvingsCount; index1++) {
      this.cells.push([]);
      for (let index2 = 0; index2 < this.shelvesCount; index2++) {
        this.cells[index1].push([]);
        for (let index3 = 0; index3 < this.cellsCount; index3++) {
          const cellData: CellData = {
            id: ++cellID,
            title: `${index1}, ${index2}, ${index3}`,
          }
          this.cells[index1][index2].push(cellData);
        }
      }
    }
  }

  private handleEvents(): void {
    if (!this.containerElementRef) return;
    fromEvent<MouseEvent>(this.containerElementRef.nativeElement, 'mouseover')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: MouseEvent): void => {
        const target: HTMLElement | null = event.target as HTMLElement | null;
        if (!target || !target.classList.contains('cell')) return;
        const cellID: number = +(target.getAttribute('id') || 0);
        this.cellUnderCursor.emit(cellID);
      });
  }
}

interface CellData {
  id: number;
  title: string;
}
