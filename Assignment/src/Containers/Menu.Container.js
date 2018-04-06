import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../Actions/Menu.Actions';
import Menu from '../Components/Menu';

const mapStateToProps = (state) => {
    return {
        food: state.food
    };
}

const mapActionToProps =((dispatch) => ({
    actions: bindActionCreators(MenuActions, dispatch)
}));

export default connect(mapStateToProps, mapActionToProps)(Menu);