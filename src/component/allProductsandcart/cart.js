import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const imgStyle={
	width:'30px',
	height:'30px'
}
const nav={
	width:'100%',
	height:'50px',
	borderBottom:'2px solid #333',
	display:'flex',
	padding:'10px',
}
const container ={
	width:'100%',
	height:'100px',
	padding:'10px',
	display:'flex',
	justifyContent:'space-around',
}
const img={
	width:'75px',
	height:'75px',
	borderRadius:'8px',
}
const veticalFlex={
	display:'flex',
	flexDirection: 'column',
	justifyContent:'space-around',
	marginLeft:'10px',
}
const GoToListingButton={
	padding: '16px 50px',
    minWidth: '200px',
    borderRadius: '2px',
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'inherit',
    color: '#157ebc',
    border: '1px solid #157ebc',
    outline: 'none',
    cursor: 'pointer'
}
class cart extends Component {
	constructor(){
		super();
		this.state={
			errors:{},
			redirectlink:null,
			addToCart:true,
			cartCount:{}
		}
	}

	addCartItemsQunatity=(i,n)=>{
		this.props.addCartItemsQunatity(i,n)
		let cartCount=this.state.cartCount
		cartCount.i=5-n
		this.setState({cartCount:cartCount})
	}
	render(){
		if (this.props.cartItems.length<=0) {
			return(
				<div style={{'height':'100vh'}}>
					<div style ={nav}>
					<img style = {imgStyle} src='/img/back.webp' onClick={this.props.backToListing}/>
					<div style={{fontSize:'20px',color:'#333',marginLeft:'10px'}}>CART</div>
					</div>
					<div style={{'display':'flex','justifyContent':'space-around','marginTop':'50%'}}>
						<div>
							<div>
								You don't have any item in cart.
							</div>
							<button style={GoToListingButton} onClick={this.props.backToListing}>Go To Product Listing</button>
						</div>
					</div>
				</div>
				)
		}
		return(
			<div>
				<div style ={nav}>
				<img style = {imgStyle} src='/img/back.webp' onClick={this.props.backToListing}/>
				<div style={{fontSize:'20px',color:'#333',marginLeft:'10px'}}>CART</div>
				</div>
				<div>
				{
					this.props.cartItems.map((value,index)=>(
						<div key={index} style={container}>
							<img src={value.images.mainImages[0]} style={img} />
							<div style={veticalFlex}>
								<div style={{"overflow":"hidden"}}>{value.details.title}</div>
								<div style={{"fontSize":"12px","marginTop":'5px','overflow':'hidden'}}>  
									<span style={{'fontWeight': '300',"fontSize":"15px"}}>QTY: </span> 
									<span style={{"fontSize":"10px","color":"green"}}>
									<select style={{"fontSize":"15px"}} value={(this.state.cartCount[value.index])?this.state.cartCount[value.index]:5-value.quantity} onChange={(val)=>this.addCartItemsQunatity(value.index,val.target.value)} >
									  <option value="1">1</option>
									  <option value="2">2</option>
									  <option value="3">3</option>
									  <option value="4">4</option>
									  <option value="5">5</option>
									</select>
									</span>
								</div>
							</div>
							<div style={veticalFlex}>
								<img style={{'width':'26px','height':'26px'}} src='/img/del.png' onClick={()=>this.props.removeItemFromCart(value.index)} />
								<div style={{"fontSize":"12px","marginTop":'5px','overflow':'hidden'}}> 
									&#8377;{value.details.variants[0].priceDetails.listedPrice} 
									<span style={{"textDecoration":"line-through",'fontWeight': '300',"fontSize":"10px"}}>{value.details.variants[0].priceDetails.labelPrice}</span> 
									<span style={{"fontSize":"10px","color":"green"}}>{value.details.variants[0].priceDetails.percentOff}% OFF</span>
								</div>
							</div>
						</div>
						)
					)
				}
				</div>
			</div>
			)
	}
}
export default cart;