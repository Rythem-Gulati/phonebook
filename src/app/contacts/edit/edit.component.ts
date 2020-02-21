import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { posts } from '../posts.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';
import { contact } from '../contact.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit ,OnDestroy{
 @Output() contactSelected=new EventEmitter<void>();
   contacts:contact[];
  subscription:Subscription;
  // editedItemIndex:number;
  loadedposts: posts[]=[];
  isFetching =false;
  isfav=false;
  i:number;

  constructor(private http: HttpClient,
    private contactService:ContactService,
    private router: Router,
    private route: ActivatedRoute) { 
      
    }
    // filter( query:string){
    //   console.log(query);
    // }
  
    ngOnDestroy(){

    }

  ngOnInit() {
    this.contactService.contactsChanged
    .subscribe(
      (contacts:contact[])=>{
        this.contacts=contacts;
      }
    );
    this.fetchPosts();

  }
  onSelect(post){
   this.router.navigate(['/new',post.id]);
  }
  // onSelected(){
  //   this.contactSelected.emit(); 
  // }
  onEditItem(i:number){
   this.contactService.startedEditing.next(i);
  }
  // onEdit(){
  //   this.router.navigate(['edit'],{relativeTo:this.route});
  // }
 
  onFetchPosts(){
    this.fetchPosts();
  }
  onClearPosts(){
    this.deletePosts();
  }
  onFav(){
    this.fav();
  }
  onCreatePost(postData:posts) {
    // Send Http request
    this.http
      .post<{name:string}>(
        'https://contact355-15b34.firebaseio.com/contacts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  private fetchPosts() {
    this.isFetching= true;
    this.http
      .get<{[key:string]:posts}>('https://contact355-15b34.firebaseio.com/contacts.json')
      .pipe( 
        map(responseData => {
          const postsArray:posts[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
         return postsArray;
        
        })
      )
      .subscribe(posts => {
        this.isFetching=false;
        this.loadedposts= posts;
      });
  }
  private fav(){
    this.isfav=true;
    // this.router.navigate(['fav'], {relativeTo: this.route});

    console.log('true');
  }
  // private fetchPosts(){
  //   this.http.get('https://test-b2b0b.firebaseio.com/test.json',
  //   ).subscribe(posts=>{
  //     console.log(posts); 
  //   });
  // }
private deletePosts(){
  this.http.delete('https://contact355-15b34.firebaseio.com/contacts.json ')
  .subscribe( ()=>{
    this.loadedposts = [];
  }); 
}
onDelete(){
  this.contactService.DeleteContact(this.i);
  this.router.navigate(['/contact-list']);
}
}
