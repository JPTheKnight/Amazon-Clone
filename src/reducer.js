export const initialState = {
    basket: [],
    user: null
};

export const basketTotalPrice = (basket) => {
    var total = 0;
    for (let i=0; i < basket.length; i++)
    {
        if (basket[i].selected)
        {
            total += basket[i].info.price;
        }
    }

    return total;
};


const reducer = (state, action) => {

    switch(action.type){
        case 'add_to_basket':
            return {
                ...state, basket: [...state.basket, action.item]
            };
        case 'remove_from_basket':
            state.basket.splice(action.index, 1);
            return {
                ...state, basket: [...state.basket]
            };
        case 'empty_basket':
            return {
                ...state, basket: [], selected_basket: []
            };
        case 'deselect_item': 
            state.basket[action.index].selected = false;
            return {
                ...state, basket: [...state.basket]
            }
        case 'select_item': 
            state.basket[action.index].selected = true;
            return {
                ...state, basket: [...state.basket]
            }
        case 'set_user':
            return {
                ...state, user: action.user
            };

        default:
            return state;
    }
}

export default reducer;