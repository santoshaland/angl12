import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stud;

  constructor(private service : DataService) {

    let statget=this.service.GetData();
    statget.subscribe((result)=>{      
      this.stud=result;
    })

   }

  ngOnInit() {
  }

  


}
