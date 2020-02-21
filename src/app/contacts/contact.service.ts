import { contact } from './contact.model';
import { EventEmitter } from '@angular/core';
// import { Subject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';

export class ContactService{
     contactsChanged =new Subject<contact[]>();
    contactSelected=new EventEmitter<contact>();
    startedEditing=new Subject<number>();
   private contacts:contact[]=[
        new contact('Rythem',1234567897,'r@gmail.com ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlyqYZmqQ5nx9BfD5tIRWbqnl6yBd6K2atpwoQBtZaPCjX-pUp'),
        new contact('Mayank',9876543213,'m@gmail.com ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3lWZMyBMLRIQSTZNCcD5_jGKu04H4prZQhUqMFJnV2LXD4s4-'),
        new contact('Sakshi',1234895621,'sakshi@gmail.com ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlyqYZmqQ5nx9BfD5tIRWbqnl6yBd6K2atpwoQBtZaPCjX-pUp'),
        new contact('Himanshu',8855991234,'him gmail.com ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3lWZMyBMLRIQSTZNCcD5_jGKu04H4prZQhUqMFJnV2LXD4s4-'),
        new contact('Hitesh',8855991234,'h@gmail.com ','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3lWZMyBMLRIQSTZNCcD5_jGKu04H4prZQhUqMFJnV2LXD4s4-'),
     
      ];
//   private contacts: contact[]=[];
// getAll(){
//      return this.contacts.list('/contacts');
//    }

 getContacts(){
      return this.contacts.slice();
 }
 getContact(id:number){
    return this.contacts[id];
 }
//  addContact(con:contact){
//       this.contacts.push(con);
//       this.contactsChanged.next(this.contacts.slice());
//  }
 updatecontact(index:number,newContact:contact){
     this.contacts[index]=newContact;
     this.contactsChanged.next(this.contacts.slice());
 }
 DeleteContact(index: number){
      this.contacts.splice(index,1);
      this.contactsChanged.next(this.contacts.slice());

 }
 
 }