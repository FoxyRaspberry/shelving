import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutSectionComponent } from '~ui-kit/layout/layout-section/layout-section.component';

@NgModule({
  declarations: [LayoutSectionComponent],
  exports: [LayoutSectionComponent],
  imports: [
    CommonModule,
  ],
})
export class LayoutSectionModule {}
