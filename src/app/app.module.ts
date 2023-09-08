import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { TitleComponent } from './components/partials/title/title.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
// import { InputContainerComponent } from './components/partials/input-container/input-container.component';






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
    // InputContainerComponent,
    
    

  
  
  
    

    
    


    


  
  
    
  
  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop: false
    })

    



    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
