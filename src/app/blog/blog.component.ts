import { Component, OnInit } from '@angular/core';
import { spinnerLoader } from '../animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    spinnerLoader
    ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
