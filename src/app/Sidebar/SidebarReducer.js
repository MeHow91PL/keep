export const sidebarReducer = (state = {show: false}, action) => {
    console.log("sidebarReducer");
    
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return  {...state, show: !state.show};    
        default:
            return state
    }
}