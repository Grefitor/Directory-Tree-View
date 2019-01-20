import { Component } from '@angular/core';
import { Directory } from './models/directory.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  directories: Array<any>;
  constructor() {
    const fall2014 = new Directory({name:'Fall 2014',directories:[],files:['image1.jpg','image2.jpg','image3.jpg']});
    const summer2014 = new Directory({name:'Summer 2014', directories:[], files:['image10.jpg', 'image20.jpg', 'image30.jpg']});
    const pics = new Directory({name:'Pictures', directories:[summer2014, fall2014], files:[]});
    const music = new Directory({name: 'Music', directories:[], files:['song1.mp3', 'song2.mp3']});
    this.directories = [pics, music];
  }
  onClick() {
    console.log(this.directories);
  }
}
