import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private service:ProductServiceService) { }

  @Input() cate:any;
  CategoryID:string;
  CategoryName:string;
  CategoryDescription:string;

  ngOnInit(): void {
    this.CategoryID=this.cate.CategoryID;
    this.CategoryName=this.cate.CategoryName;
    this.CategoryDescription=this.cate.CategoryDescription;
    console.log(this.CategoryID);
  }

  addCategory(){
    var val = {CategoryID:this.CategoryID,
                CategoryName:this.CategoryName,
                CategoryDescription:this.CategoryDescription};
                this.service.addCategory(val).subscribe(res=>{ 
                alert(res.toString());
                });
  }

  updateCategory(){
    var val = {CategoryID:this.CategoryID,
                CategoryName:this.CategoryName,
                CategoryDescription:this.CategoryDescription};
          this.service.updateCategory(val).subscribe(res=>{
          alert(res.toString());
      });

  }

}
