import React, {Component} from 'react';
import Item from './Item.js';

class Menu extends Component {
    componentDidMount(){
        this.props.actions.fetchData();
    }
    render(){
        return(
            <div className="maincontainer">
                {this.props.food.map((data, index)=> <Item {...data} id={index}/>)}
            </div>
        );
    }
}

export default Menu;