export const NotatkaReducer = (
    state = 0, action) => {
    switch (action.type) {
        case 'ACTIVE_NOTE':
            return action.payload;
        case 'DEACTIVE_NOTE':
            return 0;
        default:
            return state;
    }
}