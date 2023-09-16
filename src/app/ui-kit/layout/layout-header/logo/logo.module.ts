import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from '~ui-kit/layout/layout-header/logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  exports: [LogoComponent],
  imports: [
    CommonModule,
  ],
})
export class LogoModule {}
