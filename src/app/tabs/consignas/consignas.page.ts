import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-consignas',
  templateUrl: './consignas.page.html',
  styleUrls: ['./consignas.page.scss'],
})
export class ConsignasPage implements OnInit {

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
