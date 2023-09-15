import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShelvingCatalogComponent } from '~app/shelving-catalog/shelving-catalog.component';
import { LayoutFooterModule } from '~app/ui-kit/layout/layout-footer/layout-footer.module';
import { LayoutHeaderModule } from '~app/ui-kit/layout/layout-header/layout-header.module';
import { LayoutSectionModule } from '~app/ui-kit/layout/layout-section/layout-section.module';

@NgModule({
  declarations: [ShelvingCatalogComponent],
  exports: [ShelvingCatalogComponent],
  imports: [
    CommonModule,

    // For the app.
    LayoutFooterModule,
    LayoutHeaderModule,
    LayoutSectionModule,
  ],
})
export class ShelvingCatalogModule {}
