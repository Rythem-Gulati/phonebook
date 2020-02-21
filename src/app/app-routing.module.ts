import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FavComponent } from './fav/fav.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { EditComponent } from './contacts/edit/edit.component';
import { EDetailComponent } from './contacts/e-detail/e-detail.component';


const routes: Routes = [
 
 

      
    
   
  {path:'new',component :EditComponent },
  {path:'new/:id',component :EDetailComponent},
  {path:'new/:id/contact-list',component : ContactListComponent},
  {path:'contact-list',component :ContactListComponent},
  {path:'contact',component :ContactsComponent},

  {path:'fav',component :FavComponent},
  {path:'emergency',component :EmergencyComponent},
  {path:'',component :ContactsComponent},

  // {path:'', redirectTo:'/contacts',pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// redirectTo:'/contacts',pathMatch:'full'
// {path:'contact-list',component :ContactListComponent,children:[
//   //  {path:'',component:ContactListComponent},
//   //  {path:':id',redirectTo:'/contact-list'},
//    {path:':id/edit',component:ContactDetailComponent},

// ]},