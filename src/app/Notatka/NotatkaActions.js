import { ACTIVE_NOTE, DEACTIVE_NOTE, SHOW_MODAL, HIDE_MODAL } from '../actions';

export const test = (payload) => {
    return ({ type: 'TEST', payload })
}

export const activeNote = (id) => ({
    type: ACTIVE_NOTE,
    payload: id
})

export const deactiveNote = () => ({
    type: DEACTIVE_NOTE
})

export const showModal = ({modalType, modalProps}) => ({
    type: SHOW_MODAL,
    payload: {
        modalType,
        modalProps
    }
})

export const hideModal = () => ({
    type: HIDE_MODAL
})