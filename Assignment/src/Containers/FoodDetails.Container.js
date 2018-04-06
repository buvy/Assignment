import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FoodDetail from '../Components/FoodDetail';

const mapStateToProps = (state, props) => {
    return {
        item: state.food[props.match.params.id]
    };
}

const mapActionToProps =((dispatch) => ({
}));

export default connect(mapStateToProps, mapActionToProps)(FoodDetail);