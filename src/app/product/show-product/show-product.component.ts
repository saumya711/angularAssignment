import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private service:ProductServiceService) { }

  ProductList:any=[];

  ModalTitle:string;
  ActivateAddEditProductComp:boolean=false;
  prdt:any;

  ngOnInit(): void {
    this.refreshProductList();
  }
 
  addClick(){
    this.prdt={
      ProductId:0,
      ProductCategory:"",
      ProductName:"",
      ProductDescription:"",
      ProductPrice:"",
      ProductQuantity:""
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProductComp=true;
    
  }

  editClick(item){
    this.prdt=item;
    this.ModalTitle="Edit Product";
    this.ActivateAddEditProductComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(item.ProductId).subscribe(data=>{
        alert(data.toString());
        this.refreshProductList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProductComp=false;
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductList=data;
    });
  }

}
