import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { CultureComponent } from './culture/culture.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    ServicesComponent,
    ClientsComponent,
    CultureComponent,
    CareersComponent,
    NewsComponent,
    BlogComponent,
    ContactsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ]
})
export class AppModule { }
