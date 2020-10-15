import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import AddToCartButton from './addToCart';

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

class user extends Component{
	constructor(){
		super();
		this.state={
			errors:{},
			redirectlink:null,
			showCart:false,
			soldProduct:0,
		}
	}
	resetSoldProduct=()=>{
		let soldProduct = this.state.soldProduct
		soldProduct+=1
		this.setState({soldProduct:soldProduct})
	}
	 render(){	
	 	return(
	 		<div style ={productDivStyle}>
					<div style={{'position':'relative'}}>
						<div style={quantityStyle}>{this.props.product.quantity}</div>
						<img style={imgstyle} src={this.props.product.images.mainImages[0]}/>
					</div>
					<div style={{"fontSize":"12px","marginTop":'5px'}}> 
						&#8377;12000 
						<span style={{"textDecoration":"line-through",'fontWeight': '300',"fontSize":"10px"}}>(24000)</span> 
						<span style={{"fontSize":"10px","color":"green"}}>50% OFF</span>
					</div>
					<div style={{"fontSize":"11px","width":"120px"}}>{this.props.product.details.title}</div>
					<div style={{"fontSize":"11px","width":"120px"}}>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
					<AddToCartButton 
						resetSoldProduct={this.resetSoldProduct}
						goToCart={this.props.goToCart}
						addCartItems={this.props.addCartItems}
						product={this.props.product}
						resetTotalquantity={this.props.resetTotalquantity}
						index={this.props.index}
						setCartIconValue={this.props.setCartIconValue}
						setGoToCartValue={this.props.setGoToCartValue}
					/>
			</div>
	 		)
	 }
}
export default user;