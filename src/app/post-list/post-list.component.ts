import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postItems: Array<Post>;
  
  constructor() { }

  ngOnInit() {
  }

}
