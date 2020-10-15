import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import AddToCartButton from './addToCart';

const buttonStyle={
	backgroundColor:'#4fcf64',
	color:'#ffffff',
	fontWeight:'500',
	width:'150px',
	height:'30px',
	borderRadius:'5px',
	padiing:'5px',
}
const buttonStyleRed={
	backgroundColor:'red',
	color:'#ffffff',
	fontWeight:'500',
	width:'150px',
	height:'30px',
	borderRadius:'5px',
	padiing:'5px',
}
class addToCart extends Component{
	constructor(){
		super();
		this.state={
			goToCart:false
		}
	}
	setGotoCart =()=>{
		this.setState({goToCart:true})
		this.props.resetTotalquantity(this.props.index)
		let product = this.props.product;
		product.index=this.props.index;
		this.props.addCartItems(product)
		this.props.setCartIconValue()
	}
	 render(){	
	 	return(
	 		<div>
	 		{(this.props.product.quantity>0)?
	 			<div>{(this.props.product.quantity<5)?
			 			<button style={buttonStyle} onClick={this.props.goToCart}>Go To Cart</button>
			 			:
			 			<button style={buttonStyle} onClick={this.setGotoCart}>Add To Cart</button>
			 		}
				</div>
				:
				<button style={buttonStyleRed}>Out Of Stock</button>
	 		}
	 		</div>
	 		)
	 }
}
export default addToCart;