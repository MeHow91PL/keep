export const sidebarReducer = (state = { show: true}, action) => {

    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            console.log("TOGGLE_SIDEBAR");
            return { ...state, show: !state.show};
        default:
            return state
    }
}