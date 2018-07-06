import React from 'react'
import { connect } from 'react-redux'
import infoModal from './InfoModal'

const MODAL_COMPONENTS = {
    'INFO_MODAL': infoModal
}

const ModalRoot = ({ modal }) => {
    const { modalType, modalProps } = modal;
    if (!modalType) {
        return null;
    }

    const SpecifiedModal = MODAL_COMPONENTS[modalType]
    return <SpecifiedModal {...modalProps} />
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.Note.modal
    }
}

export default connect(mapStateToProps)(ModalRoot)