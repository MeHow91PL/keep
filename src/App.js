// REACT
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux'

//RxJs

//Routing
import { ConnectedRouter, goBack } from 'connected-react-router'
import {  Route, Switch } from 'react-router-dom';

//Components
import TopBar from './app/TopBar/TopBarComponent';
// import SearchInput from './app/SearchInput/SearchComponent'
import Sidebar from './app/Sidebar/SidebarContainer'
import SearchView from './app/SearchView/SearchView'
import Modal from './app/Modal/RootModal'

//Actions
import { fetchNotes } from './app/NotesList/NotesActions'
import { toggleSidebar } from './app/Sidebar/SidebarActions'
import { setSize, setNotesPos } from './app/NotesList/NotesActions'

//CSS
import './style/Main.css';
import './style/TopBar.css';
import './style/Sidebar.css';
import './style/NotatkaInput.css';
import './style/Modal.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';



import Home from './app/Home';
import { dispatch } from '../node_modules/rxjs/internal/observable/pairs';

class App extends Component {
    render() {
        const { toggleSidebar, sidebar, previousSite,history } = this.props;
        const mode = this.props.mode === "" ? "NoteMode" : this.props.mode;

        //Stała dla wygodniejszego przekazania do komponentu topbar
        const topbarProps = { toggleSidebar, sidebar, mode,previousSite };
        
        return (
            <ConnectedRouter history={history} >
                <div>
                    <div id="PageContainer"
                        className={`${sidebar.show ? 'stop-scroll' : ''} 
          ${mode}`
                        }>
                        <TopBar {...topbarProps} />
                        <div className="main-container">
                            <Sidebar />
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/Search" component={SearchView} />
                                </Switch>

                            </div>
                            <Modal />
                        </div>
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    notatki: state.NotesList,
    sidebar: state.Sidebar,
    activeNote: state.Note.activeId,
    mode: state.router.location.hash.slice(1)
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar,
    getNotes: fetchNotes,
    setSize,
    setNotesPos,
    previousSite: () => dispatch(goBack())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
