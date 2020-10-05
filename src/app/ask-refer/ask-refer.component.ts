import { Component, OnInit } from '@angular/core';
import { ViewChild ,ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
@Component({
  selector: 'app-ask-refer',
  templateUrl: './ask-refer.component.html',
  styleUrls: ['./ask-refer.component.css']
})
export class AskReferComponent implements OnInit {
  title = 'editable';
  name = 'Angular';
  isVisible : boolean = false;
  suggData:any={};
  //edit:boolean=true;
  Details:any;
  dataSource:any
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator; 
  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private myserviceService:MyserviceService,
    private router :Router){
   }

   ngOnInit() {
    this.myserviceService.getAsksRef().subscribe(Details=>{
      console.log(Details);
      //this.dataSource=x;
      this.Details=Details;
      this.dataSource =  new MatTableDataSource(Details); 
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRef.detectChanges();
      this.obs = this.dataSource.connect();
    });
  
   
   };
 
 
 editdetail(detail: any){
     detail.editable = !detail.editable;  
     const updateData={id:detail.id,statement:detail.statement};
     this.myserviceService.updateAsksRef(updateData).subscribe(x=>{
       console.log("------patchAsk--------");
       console.log(x);
     });
   }
   deleteRow(i){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const currentSugg =  this.Details[i];
        this.Details.splice(i,1);
        this.dataSource =  new MatTableDataSource(this.Details);
        this.changeDetectorRef.detectChanges();
        // this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        const deleteData=currentSugg.id;
        this.myserviceService.deleteSuggestion(deleteData).subscribe(x=>{
          console.log("------deleted record-----");
          console.log(x);
        });
      Swal.fire(
        
        'Deleted!',
        'Your record been deleted.',
        'success'
      )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your record is safe :)',
        'error'
      )
      }
    })
  }

 addItem1(index) {
   // var currentElement = this.Details[index];  
   // this.Details.splice(index, 0, currentElement);
   const newRowObject={id:'',statement:''};
   this.dataSource.data.unshift(newRowObject);
   this.dataSource =  new MatTableDataSource(this.Details);
   this.changeDetectorRef.detectChanges();
   const currentValue =  this.Details[index];
   const addData={statement:currentValue.statement};
   this.myserviceService.addSAsksRef(addData).subscribe(x=>{
     console.log("------addeded record-----");
     console.log(x);
   });
   setTimeout(()=>{                          
    window.location.reload();
    }, 1000);
    
 }
} 