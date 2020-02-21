import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { ContactService } from './contacts/contact.service';
import { FavComponent } from './fav/fav.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditComponent } from './contacts/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { EDetailComponent } from './contacts/e-detail/e-detail.component';
import { EItemComponent } from './contacts/e-item/e-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactItemComponent,
    FavComponent,
    EmergencyComponent,
    EditComponent,
    EditDetailComponent,
    EDetailComponent,
    EItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    
  ],
  providers: [ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
