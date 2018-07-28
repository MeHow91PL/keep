import React, { Component } from 'react';
import NotatkaInput from './NotatkaInput/NotatkaInputContainer';
import { connect } from 'react-redux';
// import Notatka from './Notatka/Notatka';
// import Sidebar from './Sidebar/SidebarContainer';
import NotesList from './NotesList/NotesList';
// import SearchInput from './SearchInput/SearchComponent'
import { fetchNotes } from './NotesList/NotesActions'
// import { toggleSidebar } from './Sidebar/SidebarActions'
// import { setSize, setNotesPos } from './NotesList/NotesActions'
// import Modal from './Modal/RootModal'
// import _ from 'lodash'


class Home extends Component {

    componentWillMount() {
        this.props.getNotes();
    }

    render() {
        const { notatki } = this.props;
        return (
            <div>
                <div className="notesModeContent">
                    <NotatkaInput />
                    {notatki.isFetchingStart ? "Pobieram listę..." : ""}
                    <NotesList
                        setNotesPos={this.props.setNotesPos}
                        setSize={this.props.setSize}
                        notes={notatki.Notes}
                        activeNote={this.props.activeNote} />
                </div>
                <div className="searchModeContent">
                    <div className="inital">
                        <div className={'notatka'}>a</div>
                        <div className={'notatka'}>v</div>
                        <div className={'notatka'}>s</div>
                    </div>
                    <div className="seatchResults">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        notatki: state.NotesList
    }
)

const mapDispatchToProps = {
    getNotes: fetchNotes
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);