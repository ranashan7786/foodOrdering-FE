import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AppComponent,
    TagsComponent,
    FoodpageComponent,
    NotFoundComponent,
    TitleComponent,
    CartpageComponent,
    LoginPageComponent,
    SignupPageComponent

  
  
  
    

    
    


    


  
  
    
  
  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   timeOut:3000,
    //   positionClass:'toast-bottom-right',
    //   newestOnTop:false
    // })

    



    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
