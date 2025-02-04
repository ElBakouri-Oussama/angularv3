import { Component, OnInit, ViewChild } from '@angular/core';
import { Client, client } from 'src/Models/Client'; 
import { ClientDataService } from '../DataService/ClientDataService'; 

import { Router } from '@angular/router';
import { ClientEditComponent } from '../Client-edit/Client-edit.component';

@Component({
  selector: 'app-Client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.css']
})
export class ClientComponent implements OnInit {
  
  
 
    objlist: client[];
    dataavailbale: Boolean = false;
    action:string
    tempemp: client
    sizeRight:number=4;
    sizeLeft:number=8;
    
    constructor( 
      private dataservce: ClientDataService, private route: Router) {
    
    }
  
    ngOnInit() {
      this.LoadData();  
      this.sizeRight=6;
      this.sizeLeft=6;
    }
    ShowEdit(){
      this.sizeRight=4;
      this.sizeLeft=8;
    }
    LoadData() { 
      this.dataservce.getClient().subscribe((tempdate) => {
        this.objlist = tempdate;
        console.log(this.objlist);
        if (this.objlist.length > 0) {
          this.dataavailbale = true;
        }
        else {
          this.dataavailbale = false;
        }
      }
      )
        , err => {
          console.log(err);
        }
    }
    deleteconfirmation(id: string) { 
      if (confirm("Are you sure you want to delete this ?")) {
        this.tempemp = new client();
        this.tempemp.id = parseInt(id);
        this.dataservce.DeleteClient(this.tempemp.id).subscribe(_res => {
          alert("Deleted successfully !!!");
          this.LoadData();
        })
      }
    }

 
    @ViewChild('editMainObject', {static: false}) editcomponent: ClientEditComponent;
  
 
    loadAddnew() { 
      this.action="add Client";
      this.editcomponent.IsNew=true;
      var mainObject=this.editcomponent.objemp;
      mainObject.id = 0 ;
      mainObject.code= "" ;
      mainObject.name1= "" ;
      mainObject.name2= "" ;
      mainObject. name3= "" ;
      mainObject.patent= "" ;
      mainObject.adresse = "" ;
      mainObject.rc   ="" ;
      mainObject.clientCategorieID=0;
    }
    loadnewForm(_id:string,_code:string,_name1:string,_name2:string,_name3:string,_patent:string,_adresse:string,_rc:string,_CategorieId:string) { 
      this.action="Edit Client";
      this.editcomponent.IsNew=false;
      var mainObject=this.editcomponent.objemp;
      mainObject.id = parseInt(_id);
      mainObject.code=_code ;
      mainObject.name1=_name1 ;
      mainObject.name2= _name2;
      mainObject. name3=_name3 ;
      mainObject.patent=_patent ;
      mainObject.adresse = _adresse ;
      mainObject.rc   =_rc ;
      mainObject.clientCategorieID=parseInt(_CategorieId);
      console.log(mainObject);
    }
 
    RefreshData(){
      this.LoadData();
    }
  
}
