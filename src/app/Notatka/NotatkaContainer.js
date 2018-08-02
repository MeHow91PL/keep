import { connect } from 'react-redux'
import Notatka from './Notatka'
import {activeNote, deactiveNote,showModal} from './NotatkaActions'

const mapStateToProps = (state, ownProps) => ({
    note:state.Note
})

const mapDispatchToProps = {
    activeNote,
    deactiveNote,
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Notatka)
