import React, { Component } from 'react';

class Item extends Component {
	constructor(props) {
		super(props);
		this.changeInput = this.changeInput.bind(this)
	}

	changeInput(event) {	
		this.props.changeInput(event.target.value, this.props.index)
	}

	render() {
		return(
			<div>
				<span className='Number'>{this.props.index + 1 + "."}</span>
				<input type='text'
					   className='List' 
					   value={this.props.value} 
					   onChange={this.changeInput}
					   index = {this.props.index} 
					   />
			</div>
		);
	}
}

export default Item;
