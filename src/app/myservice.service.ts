import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  getSuggetions():Observable<any>{
    const alpha = this.http.get<any>('https://chat.greatco.co/suggestion');
    return alpha;
  }
  getJswToken(){
    return localStorage.getItem('jwttoken');
  }
  updateSuggestion(updateData){
    return this.http.patch<any>('https://chat.greatco.co/suggestion', updateData);
  }
  deleteSuggestion(deleteData){
    return this.http.delete<any>('https://chat.greatco.co/suggestion/?id='+ deleteData);
  }
  addSuggestion(addData){
    return this.http.post<any>('https://chat.greatco.co/suggestion',addData);
  }


// ------------------------------------------ ask APIs--------------------------------------
  getAsks():Observable<any>{
    const alpha = this.http.get<any>('http://chat.greatco.co:80/getask');
    return alpha;
  }
  updateAsks(updateData){
    return this.http.patch<any>('https://chat.greatco.co/ask', updateData);
  }
  deleteAsks(deleteData){
    return this.http.delete<any>('https://chat.greatco.co/ask/?id='+ deleteData);
  }
  addSAsks(addData){
    return this.http.post<any>('https://chat.greatco.co/ask',addData);
  }


  //-----------------------------------ASK Reffer Api-------------------------------

  getAsksRef():Observable<any>{
    const alpha = this.http.get<any>('http://chat.greatco.co:80/getaskrefer');
    return alpha;
  }
  updateAsksRef(updateData){
    return this.http.patch<any>('https://chat.greatco.co/askrefer', updateData);
  }
  deleteAsksRef(deleteData){
    return this.http.delete<any>('https://chat.greatco.co/askrefer/?id='+ deleteData);
  }
  addSAsksRef(statement){
    return this.http.post<any>('https://chat.greatco.co/askrefer/?statement=',statement);
    
  }
}
