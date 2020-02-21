import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {ActivatedRoute, Params, Router} from  '@angular/router';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { contact } from '../contact.model';
// import { NgForm, FormGroup } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ContactsComponent } from '../contacts.component';

@Component({
  selector: 'app-e-detail',
  templateUrl: './e-detail.component.html',
  styleUrls: ['./e-detail.component.css']
})
export class EDetailComponent implements OnInit {
  id:number;
 contactForm:FormGroup;
  public contactId;
  editedItemIndex:number;
  editedItem: contact;
  subscription:Subscription;
  constructor(private route: ActivatedRoute,
              private contactservice:ContactService,
              private router:Router
             ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
      this.id= +params['id']; 
      // this.editMode=params['id'] !=null;
      this.initForm();
      }
    );
   
  }
  onSubmit(){
    // const newContact = new contact(
    //   this.contactForm.value['name'],
    //   this.contactForm.value['ContactNumber'],
    //   this.contactForm.value['Email'],
    //   this.contactForm.value['Image'],

    //   );
   this.contactservice.updatecontact(this.id,this.contactForm.value);
  }
  //  ngOnDestroy(){
  //    this.subscription.unsubscribe();
  //  }
 onBack(){
  this.router.navigate(['contact-list'],{relativeTo:this.route});
 }

 private initForm(){
   const contact =this.contactservice.getContact(this.id);
  let name=contact.name;
  let ContactNumber =contact.ContactNumber;
  let Email =contact.Email;
  let Image=contact.Image;
 
  this.contactForm = new FormGroup({
    'name': new FormControl(name,Validators.required),
    'ContactNumber': new FormControl(ContactNumber,Validators.required),
    'Email': new FormControl(Email ,Validators.required),
    'Image': new FormControl(Image,Validators.required),
  });

}
}
