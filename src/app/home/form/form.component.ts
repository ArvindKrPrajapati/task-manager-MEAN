



import { Component, OnInit ,Input} from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() loadData:()=>void;
  taskName:String=null;
  emptyTaskField:string=null;
  data:any;
  success:string=null;
  error:string=null;
  loading:boolean=false;
  
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    
  }
  
  createTask():void{
    this.emptyTaskField=null;
    this.loading=true;
    if(this.taskName){
      this._api.createTask(this.taskName).subscribe((data:any)=>{
        this.data=data;
        this.loading=false;
        if(this.data.status){
          this.loadData();
          this.taskName="";
          this.success="Inserted successfully";
          setTimeout(()=>{
            this.success="";
          },2500);
        }else{
          this.error="failed";
        }
      });
    }else{
      this.emptyTaskField="*this field is required";
    }
  }

}
