import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulePriyecto } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import localEsAR from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsAR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulePriyecto,
    BrowserAnimationsModule,
    PrimeNgModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
