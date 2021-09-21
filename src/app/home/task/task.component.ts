



import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 @Input() data:any;
 @Output() onDeleted=new EventEmitter<string>();
 deleted:any=[];
  constructor(private _api:ApiService,
             private _route:Router) { }

  ngOnInit(): void {
  }
  
  deleteTask(id:string):void{
    this._api.deleteTask(id).subscribe((data)=>{
      this.deleted=data;
      if(this.deleted.status){
         this.onDeleted.emit(id);
      }else{
        alert("failed...");
      }
    })
  }
  
  goEdit(id:string):void{
    this._route.navigate(['/edit/',id]);
  }
}
