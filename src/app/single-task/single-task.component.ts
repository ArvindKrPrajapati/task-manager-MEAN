



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  id:string=null;
  name:string=null;
  isCompleted:boolean=false;
  data:any=[];
  emptyBoxMess:string=null;
  updateTaskData:any=[];
  success:string=null;
  error:string=null;
  
  constructor(private _route:ActivatedRoute,
             private _api:ApiService) {
    this.id=this._route.snapshot.params.id;
    }

  ngOnInit(): void {
    this._api.getSingleTask(this.id).subscribe((data)=>{
      this.data=data;
      this.name=this.data.name;
      this.isCompleted=this.data.completed;
    });
  }
  
  edit():void{
    if(this.name){
      this._api.updateTask(this.id,this.name,this.isCompleted).subscribe((data)=>{
        this.updateTaskData=data;
        (this.updateTaskData.status) ? this.success="updated successfully..." : this.error="failed..";        
        setTimeout(()=>{
          this.success=null;
          this.error=null;
        },1500)
      })
    }else{
      this.emptyBoxMess="*task field should not be empty"
    }
  }

}
