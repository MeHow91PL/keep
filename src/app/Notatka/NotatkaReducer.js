const initModal = {
    modalType: null,
    modalProps: {}
}

export const NotatkaReducer = (
    state = { activeId: 0, modal: initModal }, action) => {
    switch (action.type) {
        case 'SHOW_MORE_NOTE':
            return { ...state, activeId: action.payload };
        case 'SHOW_LESS_NOTE':
            return { ...state, activeId: 0  };
        case 'SHOW_MODAL':
            return { ...state, modal: action.payload };
        case 'HIDE_MODAL':
            return { ...state, modal:initModal };
        default:
            return state;
    }
}