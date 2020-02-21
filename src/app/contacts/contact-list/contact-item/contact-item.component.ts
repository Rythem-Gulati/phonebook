import { Component, OnInit, Input } from '@angular/core';
import { contact } from '../../contact.model';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
@Input() contact:contact;
@Input() index:number;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }
onSelected(){
  this.contactService.contactSelected.emit(this.contact);
}
}
