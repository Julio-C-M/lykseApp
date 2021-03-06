import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private http: HttpClient
    ) {}

    ngOnInit(){
      this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
      })
    }
  

}
