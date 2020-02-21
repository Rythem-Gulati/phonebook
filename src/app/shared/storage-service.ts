import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { contact } from '../contacts/contact.model';
import { ContactService } from '../contacts/contact.service';
@Injectable({providedIn:'root'})
export class storageService{
constructor(private http : HttpClient,
             private contactService:ContactService){}
 
storeContacts(){
  const contacts=this.contactService.getContacts();
   this.http.put('https://contact355-15b34.firebaseio.com/contacts.json',contacts)
   .subscribe( response=>{
       console.log(response);
   });  
}
}