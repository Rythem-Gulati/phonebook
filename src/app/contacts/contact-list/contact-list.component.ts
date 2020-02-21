import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactsComponent } from '../contacts.component';
import { storageService } from 'src/app/shared/storage-service';
import { HttpClient } from '@angular/common/http';
import { posts } from '../posts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 con:contact;
 contacts:contact[];
 id:number;
 loadedposts: posts[]=[];

  i:number;
  constructor( private contactService : ContactService,
               private router:Router,
               private route: ActivatedRoute,
               private storageService:storageService,
               private http : HttpClient) { }

  ngOnInit() {
    this.contacts=this.contactService.getContacts(); 
    this.route.params
     .subscribe(
       (params:Params)=>{
         this.id=+params['id'];
         this.con =this.contactService.getContact(this.id);
       }
     );
     this.contactService.contactsChanged
      .subscribe(
        (contacts:contact[])=>{
          this.contacts=contacts;
        }
      );
      this.contacts=this.contactService.getContacts();
  }
  // onNewContact(postData:{title:string;content:string}){
  //   this.http.post('https://contact355-15b34.firebaseio.com/contacts.json',
  //   postData)
  //   .subscribe(responseData =>{
  //     console.log(responseData);
  //   });
  //   // this.router.navigate(['new'],{relativeTo:this.route});
  // }
  // onEditContact(){
  //   this.router.navigate(['edit'],{relativeTo:this.route});
  // }
  onSaveData(){
    this.storageService.storeContacts(); 
  }
  // onNewContact(){
  //   // this.router.navigate(['new'],{relativeTo:this.route});

  // }
}
