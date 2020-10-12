import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const imgStyle={
	width:'30px',
	height:'30px'
}
const mainDivStyle={
	display:'flex',
	justifyContent: 'space-between',
	paddingTop:'15px',
	paddingBottom:'15px',
	height:'auto',
}
const quantityStyle={
	width:'20px',
	height:'20px',
	color:'#ffffff',
	borderRadius:'50%',
	backgroundColor:'red',
	padding:'3px',
	fontSize:'11px',
	textAlign:'center',
	marginLeft:'-25px',
	marginTop:'-10px',
}

class Navbar extends Component {
	constructor(){
		super();
		this.state={
			errors:{},
			redirectlink:null,
			addToCart:true,
		}
	}

	render(){
		return(
			<div style={mainDivStyle}>
				<div style={{"display":'flex', 'justifyContent':'space-around'}}>
				<img style = {imgStyle} src='/img/back.webp'/>
				<div style = {{'fontSize':'20px'}}>{this.props.pageTitle}</div>
			</div>
			<div style={{"display":'flex', 'justifyContent':'space-around'}}>
				<img style = {imgStyle} src='/img/search.webp'/>
				<div style={{"display":'flex', 'justifyContent':'center'}} onClick={this.props.goToCart}>
					<img style = {imgStyle} src='/img/cart.webp'/>	
					<div style={quantityStyle}>{this.props.totalquantity}</div>
				</div>
				<img style = {imgStyle} src='/img/more.png'/>
			</div>
			</div>
			)
	}
}
export default Navbar;