import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  posts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts.push({});
    this.posts.push({});
  }

}
