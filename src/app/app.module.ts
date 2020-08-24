import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './loader.service'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }