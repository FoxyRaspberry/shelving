import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from '~app/product-card/product-card.component';
import { ShelvingCatalogComponent } from '~app/shelving-catalog/shelving-catalog.component';
import { ShelvingListComponent } from '~app/shelving-catalog/shelving-list/shelving-list.component';
import { LayoutFooterModule } from '~app/ui-kit/layout/layout-footer/layout-footer.module';
import { LayoutHeaderModule } from '~app/ui-kit/layout/layout-header/layout-header.module';
import { LayoutSectionModule } from '~app/ui-kit/layout/layout-section/layout-section.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShelvingCatalogComponent,
    ShelvingListComponent,
  ],
  exports: [ShelvingCatalogComponent],
  imports: [
    CommonModule,
    FormsModule,

    // For the app.
    LayoutFooterModule,
    LayoutHeaderModule,
    LayoutSectionModule,
  ],
})
export class ShelvingCatalogModule {}
