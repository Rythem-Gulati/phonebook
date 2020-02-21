import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { contact } from '../contact.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id: number;
  editMode=false; 
  contactForm:  FormGroup;
  
  constructor(private route: ActivatedRoute,
              private contactService:ContactService,
              private http : HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode= params['id'] != null;
        console.log(this.editMode);
        this.initform();
      }
    )

}
onSubmit(){
  const contacts=this.contactService.getContacts();
   this.http.put('https://contact355-15b34.firebaseio.com/contacts.json',contacts)
   .subscribe( response=>{
       console.log(response);
   });  
}
// onSubmit
//   (postData:{name:string;contactName:number;Email:string;Image:string}){
//     this.http.post('https://contact355-15b34.firebaseio.com/contacts.json',
//     postData)
//     .subscribe(responseData =>{
//       console.log(responseData);
//     });
//     // this.router.navigate(['new'],{relativeTo:this.route});
//   }
  
  // const newContact = new contact(
  //   this.contactForm.value['name'],
  //   this.contactForm.value['contactNumber'],
  //   this.contactForm.value['Email'],
  //   this.contactForm.value['Image'],
    
  // );
  // this.contactService.addContact(this.contactForm.value);
  

private initform(){
  let CName='';
  let CNumber='';
  let CEmail='';
  let CImg='';
  if (this.editMode){
    const contact = this.contactService.getContact(this.id);

  }
this.contactForm= new FormGroup({
'name': new FormControl( CName,Validators.required),
'contactNumber': new FormControl(CNumber,[Validators.min(10),Validators.required]),
'Email': new FormControl(CEmail,[Validators.email,Validators.required]),
'Image': new FormControl(CImg),
})
}
}