import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  // `ChangeDetectionStrategy.OnPush` используется для оптимизации отрисовки данных.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-shelving-list',
  styleUrls: ['./shelving-list.component.scss'],
  templateUrl: './shelving-list.component.html',
})
export class ShelvingListComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() public cellsCount: number = 0;
  @Input() public shelvesCount: number = 0;
  @Input() public shelvingsCount: number = 0;
  @Output() public cellUnderCursor = new EventEmitter<number>();

  // `@ViewChild` находит элемент в шаблоне.
  @ViewChild('container') private containerElementRef: ElementRef<HTMLElement> | undefined;

  public cells: CellData[][][] = [];

  // Помогает определять конец жизненного цикла компонента для отписки от `Observable` или `Subject`.
  private readonly destroy$ = new Subject<void>();

  // Срабатывает при изменении значений входящих параметров.
  public ngOnChanges(): void {
    this.generateCells();
  }

  // Вызывается фреймворком Angular после инициализации представления компонента (шаблона), а также представлений дочерних компонентов.
  // Вызывается только один раз сразу после первого вызова метода `ngAfterContentChecked()`.
  public ngAfterViewInit(): void {
    this.handleEvents();
  }

  // Вызывается перед тем, как фреймворк Angular удалит компонент.
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private generateCells(): void {
    this.cells = [];
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
    // Создать `Observable` (наблюдаемый поток), превращенный из-за события наведения мыши.
    // `pipe(takeUntil(this.destroy$))` нужен для отписки (оптимизации утечки памяти).
    // Метод `subscribe` запускает процесс наблюдения за потоком, без него не работает.
    fromEvent<MouseEvent>(this.containerElementRef.nativeElement, 'mouseover')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: MouseEvent): void => {
        const target: HTMLElement | null = event.target as HTMLElement | null;
        if (!target || !target.classList.contains('cell')) return;
        const cellID: number = +(target.getAttribute('id') || 0);
        this.cellUnderCursor.emit(cellID); // `emit` производит событие.
      });
  }
}

interface CellData {
  id: number;
  title: string;
}
