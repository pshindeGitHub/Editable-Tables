import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material';
import { FilterPipe } from './filter.pipe';
import {MyserviceService } from './myservice.service';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService}  from './token-interceptor.service';
import { AskComponent } from './ask/ask.component';
import { AskReferComponent } from './ask-refer/ask-refer.component';
import { SugestionComponent } from './sugestion/sugestion.component'
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AskComponent,
    AskReferComponent,
    SugestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule

  ],
  providers: [MyserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
