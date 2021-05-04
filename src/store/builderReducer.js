const initialState = {
    toys: {
        ball: 1,
        beanbag: 1,
        robot:1,
        bear:1,
        bunny:1,
        girrafe:1,
    },
    price:1020
};
const prices = {
    ball: 200,
    beanbag: 180,
    robot:100,
    bear:350,
    bunny:250,
    girrafe:290,
  };

const builderReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case "ADD_TOYS":
            newState.toys[action.toy]++;
            newState.price += prices[action.toy]
            break;
            case "REMOVE_TOYS":
                newState.toys[action.toy]--;
                newState.price -= prices[action.toy]
            break;

            default:
                break;
    }
    return newState;
}
export default builderReducer;