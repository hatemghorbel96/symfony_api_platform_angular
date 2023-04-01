import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { MapToIterablePipe } from './map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    ProductsComponent,
    AddproductComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
