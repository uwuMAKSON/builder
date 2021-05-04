const initialState = {
    ingredients: {
        ball: 1,
        beanbag: 1,
        robot:1,
        bear:1,
        bunny:1,
        girrafe:1,
    }
};

const builderReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredients]++;
            break;
            case "REMOVE_INGREDIENT":
                newState.ingredients[action.ingredients]--;
            break;

            default:
                break;
    }
    return state;
}