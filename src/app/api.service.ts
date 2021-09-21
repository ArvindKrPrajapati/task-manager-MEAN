




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';      

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string="http://localhost:1432/api/v1/tasks";     
  data:any=[];
  
  constructor(private _http:HttpClient) { }
  
  createTask(name:String){
   return this._http.post(this.url,{name});
  }
  
  getTasks(){
    return this._http.get(this.url);
  }
  
  
  deleteTask(id:string){
    return this._http.delete(this.url+"/"+id);
  }
  
  getSingleTask(id:string){
    return this._http.get(this.url+"/"+id);
  }
  
  updateTask(id:string,name:string,completed:boolean){
    return this._http.patch(this.url+"/"+id,{name,completed});
  }
  
}
