import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private service:ProductServiceService) { }

  @Input() prdt:any;
  ProductId:string;
  ProductCategory:string;
  ProductName:string;
  ProductDescription:string;
  ProductPrice:string;
  ProductQuantity:string;

  CategoryList:any=[];

  ngOnInit(): void {
   this.loadCategoryList();
   console.log(this.ProductId);

  }

  loadCategoryList(){
    this.service.getAllCategoryNames().subscribe((data:any)=>{
      this.CategoryList=data;

      this.ProductId=this.prdt.ProductId;
      this.ProductCategory=this.prdt.ProductCategory;
      this.ProductName=this.prdt.ProductName;
      this.ProductDescription=this.prdt.ProductDescription;
      this.ProductPrice=this.prdt.ProductPrice;
      this.ProductQuantity=this.prdt.ProductQuantity;
    });
  }

  addProduct(){
    var val = {ProductId:this.ProductId,
                ProductCategory:this.ProductCategory,
                ProductName:this.ProductName,
                ProductDescription:this.ProductDescription,
                ProductPrice:this.ProductPrice,
                 ProductQuantity:this.ProductQuantity};
        this.service.addProduct(val).subscribe(res=>{ 
        alert(res.toString());
        });
  }

  updateProduct(){
    var val = {ProductId:this.ProductId,
                ProductCategory:this.ProductCategory,
                ProductName:this.ProductName,
                ProductDescription:this.ProductDescription,
                ProductPrice:this.ProductPrice,
                ProductQuantity:this.ProductQuantity};
        this.service.updateProduct(val).subscribe(res=>{ 
        alert(res.toString());
        });
  }


}
