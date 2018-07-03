export const sidebarReducer = (state = {}, action) => {

    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            console.log("TOGGLE_SIDEBAR");
            return { ...state, show: !state.show };
        default:
            return state
    }
}