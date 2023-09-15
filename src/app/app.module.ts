import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '~app/app.component';
import { ShelvingCatalogModule } from '~app/shelving-catalog/shelving-catalog.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    // For the app.
    ShelvingCatalogModule,
  ],
  providers: [],
})
export class AppModule {}
