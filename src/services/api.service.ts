import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from 'src/models/apod.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private API_URL: string = "https://api.nasa.gov/planetary/apod";
	private API_KEY: string = "1aoUdQ6jSJc7hs1SEcvE53ihgWFFeD7LAmnYfs56";

	constructor(private http: HttpClient) { }

	public getRandomImages(size: Number = 10):  Observable<Apod[]>{
		return this.http.get<Apod[]>(this.API_URL + '?api_key=' + this.API_KEY + '&count=' + size);
	} 
}
