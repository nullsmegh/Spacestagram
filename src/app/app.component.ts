import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Apod } from 'src/models/apod.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public contentLoaded: boolean = false;
  public imageCards: any = new Array(1).fill({});

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  	this.apiService.getRandomImages(10).subscribe((apodData: Apod[]) =>  {
  		this.imageCards = apodData;
  		this.contentLoaded = true; 
  	});
  }

}
