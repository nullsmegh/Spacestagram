import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

 	@Input() cardData: any;
 	@Input() contentLoaded: any;

 	public liked: Boolean = false; 
 	public imageLoaded = false;
  	constructor() { }

  	ngOnInit(): void {
  	}

  	imageLoadeds() {
  		console.log("test");
  	}

}
