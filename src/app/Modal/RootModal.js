import React from 'react'
import { connect } from 'react-redux'
import infoModal from './InfoModal'
import { hideModal } from '../Notatka/NotatkaActions'

const MODAL_COMPONENTS = {
    'INFO_MODAL': infoModal
}

const ModalRoot = ({ modal,hideModal,note }) => {
    const { modalType, modalProps } = modal;
    console.log(note);
    
    if (!modalType) {
        return null;
    }

    const SpecifiedModal = MODAL_COMPONENTS[modalType]
    return <SpecifiedModal {...modalProps} hideModal={hideModal}/>
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.Note.modal,
        note: state.NotesList[ownProps.id]
    }
}

const mapDispatchToProps = {
    hideModal
}


export default connect(mapStateToProps,mapDispatchToProps)(ModalRoot)