import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
 selectedContact:contact;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contactService.contactSelected
    .subscribe(
      (contact:contact)=>{
        this.selectedContact=contact;
      }
    );
  }

}
