import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import {productsArray} from './productlist.js';
// import AddToCartButton from './addToCart';
import ProductCard from './products';
import Cart from './cart';

const k=productsArray;
const imgstyle={
	height:'150px',
	width:'150px',
	borderRadius:'20px',
}
const imgStyleIcon={
	width:'22px',
	height:'22px'
}
const productDivStyle={
	 borderBottom: '.1px solid #ebebe0',
	 borderRight: '.1px solid #ebebe0',
	 padding:'5%',
	 width:'100%',
}
const productDivStyleRight={
	 borderBottom: '.1px solid #ebebe0',
	 padding:'5%',
	 width:'100%',

}
const quantityStyle={
	position:'absolute',
	width:'20px',
	height:'20px',
	color:'red',
	borderRadius:'50%',
	backgroundColor:'#ffffff',
	top:'10px',
	left:'110px',
	padding:'3px',
	fontSize:'11px',
	textAlign:'center',
}

class allProducts extends Component{
	constructor(){
		super();
		this.state={
			errors:{},
			redirectlink:null,
			totalquantity:0,
			cartItems:[],
			showCart:false,
			cartIconValue:0,
		}
	}
	redirectToPost=(productUrl)=>{
		// this.setState({redirectlink:productUrl})
	}
	resetTotalquantity=(i)=>{
		k.products[i].quantity=k.products[i].quantity-1
	}
	addCartItemsQunatity=(i,n)=>{
		k.products[i].quantity=5-Number(n)
	}
	addCartItems=(cartItem)=>{
		let cartItems=this.state.cartItems
		cartItems.push(cartItem)
		this.setState({cartItems:cartItems})
		console.log(this.state.cartItems)
	}
	goToCart=()=>{
		this.setState({showCart:true})
	}
	backToListing=()=>{
		this.setState({showCart:false})
	}
	removeItemFromCart=(index)=>{
		let cartItems=[]
		for(let i=0;i<this.state.cartItems;i++){
			if (i!=index) {
				cartItems.push(this.state.cartItems[i])
			}
		}
		this.setState({cartItems})
	}
	productlisting(k){
		var d=[]
		for(let i=0;i<k.products.length;i+=2){
			let a=(
				<div style={{"display":'flex', 'justifyContent':'center','width':'100%','borderTop':'1px solid #f1f1f1'}}>
					<ProductCard 
					 product={k.products[i]}
					 resetTotalquantity={this.resetTotalquantity}
					 addCartItems={this.addCartItems}
					 goToCart={this.goToCart}
					 addCartItems={this.addCartItems}
					 index={i}
					 />
					<ProductCard 
					 product={k.products[i+1]} 
					 resetTotalquantity={this.resetTotalquantity}
					 addCartItems={this.addCartItems}
					 goToCart={this.goToCart}
					 addCartItems={this.addCartItems}
					 index={i+1}
					  />
				</div>
				)
			d.push(a)
		}
		return d
		
	}
	 render(){	
	 	return(
	 		<div>
	 		{(this.state.showCart)?
	 			<Cart 
	 			backToListing={this.backToListing}
	 			cartItems={this.state.cartItems}
	 			addCartItemsQunatity={this.addCartItemsQunatity}
	 			removeItemFromCart={this.removeItemFromCart}
	 			/>
	 			:
		 		<div>
			 		<Navbar
			 			pageTitle={k.pageTitle}
			 			totalquantity={this.state.cartItems.length}
			 			goToCart={this.goToCart}
			 		 />
			 		 {
			 		 	this.productlisting(k)
			 		 }
		 		 </div>
	 		}
	 		 </div>
	 		)
	 }
}
export default allProducts;