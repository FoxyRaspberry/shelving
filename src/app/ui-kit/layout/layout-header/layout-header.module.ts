import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutHeaderComponent } from '~ui-kit/layout/layout-header/layout-header.component';
import { LogoModule } from '~ui-kit/layout/layout-header/logo/logo.module';

@NgModule({
  declarations: [LayoutHeaderComponent],
  exports: [LayoutHeaderComponent],
  imports: [
    CommonModule,

    // For the app.
    LogoModule,
  ],
})
export class LayoutHeaderModule {}
