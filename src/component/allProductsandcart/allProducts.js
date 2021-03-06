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
const subDivSearch={
	height:'auto',
	width: '100%',
	backgroundColor:'#ffffff',
	marginBottom:'10px',
	borderRadius:'4px',
	padding:'5px',
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
			filteredProducts:{},
		}
	}
	onChange=(e)=>{
		let value= (e)?e.target.value:'';
		let p={products:[]}
		p.products =  k.products.filter(product =>{
			return product.details.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
		})
		this.setState({filteredProducts:p})
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
		this.onChange()
	}
	setCartIconValue=()=>{
		let cartIconValue=0;
		for(let i=0;i<this.state.cartItems.length;i++){
			cartIconValue+=5-this.state.cartItems[i].quantity
		}
		this.setState({cartIconValue:cartIconValue})
	}
	removeItemFromCart=(index)=>{
		let cartItems=[]
		for(let i=0;i<this.state.cartItems.length;i++){
			if (this.state.cartItems[i].index!=index) {
				cartItems.push(this.state.cartItems[i])
			}else{
				k.products[index].quantity=5
			}
		}
		this.setState({cartItems})
	}
	sortTheData=(event)=>{
		const val=event.target.value;
		let p=k
		if (val==='Name') {
			p.products.sort((a,b)=>(a.details.title>b.details.title)?1:-1)
			this.setState({filteredProducts:p})
		}else if(val==='Price'){
			p.products.sort((a,b)=>(a.details.variants[0].priceDetails.listedPrice>b.details.variants[0].priceDetails.listedPrice)?1:-1)
			this.setState({filteredProducts:p})
		}

	}
	productlisting(k){
		var d=[]
		for(let i=0;i<k.products.length;i+=2){
			let a=(
				<div style={{"display":'flex', 'justifyContent':'center','width':'100%','borderTop':'1px solid #f1f1f1'}}>
				{	
				(k.products[i])?
					<ProductCard 
					 product={k.products[i]}
					 resetTotalquantity={this.resetTotalquantity}
					 addCartItems={this.addCartItems}
					 goToCart={this.goToCart}
					 addCartItems={this.addCartItems}
					 index={i}
					 setCartIconValue={this.setCartIconValue}
					 />
					 :
					 null
				}
				{	
					 (k.products[i+1])?
						<ProductCard 
						 product={k.products[i+1]} 
						 resetTotalquantity={this.resetTotalquantity}
						 addCartItems={this.addCartItems}
						 goToCart={this.goToCart}
						 addCartItems={this.addCartItems}
						 index={i+1}
						 setCartIconValue={this.setCartIconValue}
						  />
						  :
						  null
				}
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
			 			cartIconValue={this.state.cartIconValue}
			 			goToCart={this.goToCart}
			 			setCartIconValue={this.setCartIconValue}
			 		 />
			 		 <input placeholder="Search.."  icon ="Search" style= {subDivSearch} onChange={this.onChange}/>
			 		 <div style={{'display':'flex'}}>
			 		 <div>Sort By: &nbsp;</div>
			 		 <select style={{"fontSize":"15px"}}  onChange={this.sortTheData} >
			 		 				  <option value="None">None</option>
									  <option value="Name">Name</option>
									  <option value="Price">Price</option>
									 </select>
					 </div>
			 		 {
			 		 	this.productlisting((this.state.filteredProducts.products)?this.state.filteredProducts:k)
			 		 }
		 		 </div>
	 		}
	 		 </div>
	 		)
	 }
}
export default allProducts;