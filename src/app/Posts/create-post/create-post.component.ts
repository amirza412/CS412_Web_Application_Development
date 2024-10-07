import {Component, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {NgForm} from '@angular/forms';
import {PostService} from "../post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public postService: PostService) {
  }

  ngOnInit() {

  }

  onAddPost(form:NgForm) {

    if(form.invalid)
    {
      return;
    }

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
