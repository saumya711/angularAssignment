import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private service:ProductServiceService) { }

  CategoryList:any=[];

  ModalTitle:string;
  ActivateAddEditCategoryComp:boolean=false;
  cate:any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }
  
  addClick(){
    this.cate={
      CategoryID:0,
      CategoryName:"",
      CategoryDescription:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCategoryComp=true;
  }

  editClick(item){
    this.cate=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCategoryComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(item.CategoryID).subscribe(data=>{
        alert(data.toString());
        this.refreshCategoryList();
      })
    } 
  }

  closeClick(){
    this.ActivateAddEditCategoryComp=false;
    this.refreshCategoryList();
  }

  refreshCategoryList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
    });
  }

}
