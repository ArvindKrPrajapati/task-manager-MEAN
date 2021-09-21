




import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any=[];
  loading: Boolean=false;
  
  constructor(private _api:ApiService) { 
    this.loadData();
  }

  ngOnInit(): void {
  }
  
  loadData():void{
    this.loading=true;
    this._api.getTasks().subscribe((data:any)=>{
      this.loading=false;
      this.data=data;
      this.data.reverse();
    });
   }
  
   filterAfterDelete(id:string):void{
     this.data=this.data.filter((d)=>d._id!=id);
   }
}
