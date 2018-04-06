import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="foodCard">

                <div className="imgContainer">
                    <img src={this.props.image} alt="Food_picture" className="foodImage" />
                </div>

                <p className="foodName">{this.props.name}</p>

                <div>
                    {this.props.nonVeg ? <span className="foodTypeNV">Non-Veg</span> : ""}
                    {this.props.spicy ? <span className="foodTypeSpicy">Spicy</span> : ""}
                    <Link to={`/food/${this.props.id}`}><button className="foodDetailsBtn">View Details</button></Link>
                </div>

            </div>
        );
    }
}
export default Card;
