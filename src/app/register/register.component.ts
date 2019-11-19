import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg: string;

  constructor(private router:Router,private service : DataService) { }

  ngOnInit() {
  }

  AddStud(data:any)
  {
    let x=data.value;
    console.log(x);
    let addstat=this.service.AddData(x);
    addstat.subscribe((res:any)=>{
      console.log(res);
      if(res.affectedRows)
      {
        console.log("c");
        this.router.navigate(['home']);
      }
      else
      {
        this.msg="Add failed";
      }
    })

  }


}
