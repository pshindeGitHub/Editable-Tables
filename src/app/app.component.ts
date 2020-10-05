import { Component,ViewChild ,ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Details: any= [
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Geeta Deshmukh",
  //     "reg_date" : "2018-04-04",
  //     "age":26,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Ganesh Jadhav",
  //     "reg_date" : "2018-04-04",
  //     "age":26,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Ram Jadhav",
  //     "reg_date" : "2018-04-04",
  //     "age":26,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Jay Jadhav",
  //     "reg_date" : "2018-04-04",
  //     "age":36,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Deepali Mane",
  //     "reg_date" : "2018-04-04",
  //     "age":26,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "pooja Jadhav",
  //     "reg_date" : "2018-04-04",
  //     "age":24,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Sandip Jadhav",
  //     "reg_date" : "2018-04-04",
  //     "age":27,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Ravi Mane",
  //     "reg_date" : "2019-04-04",
  //     "age":28,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Geeta Patil",
  //     "reg_date" : "2018-04-04",
  //     "age":22,
  //     "editable": false
  //   },
  //   {
  //     "_id" : "12323vdfvd234",
  //     "name" : "Ramesh Shinde",
  //     "reg_date" : "2019-04-04",
  //     "age":24,
  //     "editable": false
  //   }
  // ]
  title = 'editable';
  name = 'Angular';
  isVisible : boolean = false;
  suggData:any={};
  //edit:boolean=true;
  constructor(private changeDetectorRef: ChangeDetectorRef, private myserviceService:MyserviceService,
    private router :Router){
   }
 
 ngOnInit() { }
 ask(){
  this.router.navigate(['/ask']);
}
 
askRef(){
  this.router.navigate(['/sk-refer)']);
}
suggestion(){
  this.router.navigate(['/sugestion)']);
}
};