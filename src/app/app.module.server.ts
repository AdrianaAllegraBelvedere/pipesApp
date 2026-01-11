import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    PrimeNgModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
