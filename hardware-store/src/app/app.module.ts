import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareHomeComponent } from './pages/hardware-home/hardware-home.component';
import { HardwareAdministrationComponent } from './pages/hardware-administration/hardware-administration.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HardvareProductsService } from './core/services/hardvare-products.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HardwareHomeComponent,
    HardwareAdministrationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [HardvareProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
