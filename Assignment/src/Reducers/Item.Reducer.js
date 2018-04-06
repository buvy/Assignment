const initialState={
    food:[]
};

export default function ItemReducer(state=initialState, action) {
    switch(action.type){
        case "FETCH_SUCCESS":
            return Object.assign({}, state, {
                food: action.response
            });
        default:
            return state;
    }
    
}