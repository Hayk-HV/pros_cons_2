import React, { Component } from 'react';

import Item from '../components/item';

class ProsConsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      listOne: [''],
	      listTwo: [''],		
	  }
	  this.fun = this.fun.bind(this);
	}

fun(arr) {
	return ( (text, index) => {
		if(arr.length === index + 1){
			arr.push("");
		}
		arr[index] = text;
		for(let i = 0; i < arr.length -1; i++ ) {
			if(arr[i] === "") {
        		arr.splice(i,1);
        		i--;
		}
	} 
	this.setState({arr})
		}
	)
}

	listRender(arr) {
		 return (
				 	(value,key) => <div key={key}>
					 					 <Item key={key} 
										 value={value} 
										 changeInput={this.fun(arr)}
										 index={key} />
									</div>
				)	
	}

	render() {
		return (
			<div className='OneTwo'>
				<div className='One'> {this.state.listOne.map(this.listRender(this.state.listOne))} </div>
				<div className='Two'> {this.state.listTwo.map(this.listRender(this.state.listTwo))} </div>
			</div>
		);
	}
}

export default ProsConsList;