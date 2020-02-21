import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { posts } from '../contacts/posts.model';
import { map } from 'rxjs/operators';
// import { posts } from '../posts.model';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  loadedposts: posts[]=[];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();

  }
  onFetchPosts(){
    this.fetchPosts();
  }
  private fetchPosts() {
   
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
      
        this.loadedposts= posts;
      });
  }
}
 