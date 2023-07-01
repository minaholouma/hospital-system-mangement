import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor() {}
  cartProduct : any[]= [];
  total:any=0
  ngOnInit(): void {

    this.gitCArdProduct()
  }

  gitCArdProduct(){
    if("cart" in localStorage)
    {
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)

  }
  // console.log(this.cartProduct)
 this.getCartTotal()
}
minsAmount(index :number){
  this.cartProduct[index].quantity--
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  this.getCartTotal()
}

addAmount(index :number){
  this.cartProduct[index].quantity++
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  this.getCartTotal()
}

detectChange(){
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

deleteProduct(index : number){
  this.cartProduct.splice(index , 1)
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

clearCart(){
  this.cartProduct = []
    this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

getCartTotal()
{
  this.total=0
  for(let x in this.cartProduct){
    this.total += parseFloat(this.cartProduct[x].item.price) * parseFloat(this.cartProduct[x].quantity)

  }
}
}
