import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutFooterComponent } from '~ui-kit/layout/layout-footer/layout-footer.component';

@NgModule({
  declarations: [LayoutFooterComponent],
  exports: [LayoutFooterComponent],
  imports: [
    CommonModule,
  ],
})
export class LayoutFooterModule {}
