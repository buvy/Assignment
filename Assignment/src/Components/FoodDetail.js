import React, {Component} from 'react';


class FoodDetail extends Component {
    render(){
        console.log(this.props.item.image);
        return(
            <div className="detailsContainer">
                <div className="imageContainer">
                    <img src={this.props.item.image} alt="Food_image" className="foodImg"/>
                </div>

                <div className="descContainer">
                    <p className="foodName">{this.props.item.name}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.props.item.description }} />

                    <hr/>

                    {this.props.items.nonVeg ? <span className="foodTypeNV">Non-Veg</span> : ""}
                    {this.props.items.spicy ? <span className="foodTypeSpicy">Spicy</span> : ""}
                </div>
            </div>
        );
    }

}
export default FoodDetail;