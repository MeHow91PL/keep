const initModal = {
    modalType: null,
    modalProps: {}
}

export const NotatkaReducer = (
    state = { activeId: 0, modal: initModal }, action) => {
    switch (action.type) {
        case 'ACTIVE_NOTE':
            return { ...state, activeId: action.payload };
        case 'DEACTIVE_NOTE':
            return { ...state, activeId: 0 };
        case 'SHOW_MODAL':
        return { ...state, modal:action.payload };
        default:
            return state;
    }
}