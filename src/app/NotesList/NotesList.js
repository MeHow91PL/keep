//React
import React, { Component } from 'react'

//Others
import _ from 'lodash'
import PropTypes from 'prop-types';

//Components
import Notatka from '../Notatka/NotatkaContainer'


class NotesList extends Component {
    render() {
        // const { activeNote, setNotesPos } = this.props;
        
        // const notes = Object.values(this.props.notes);
        const notes = this.props.notes;
        return (
            <div ref={r => this.cont = r} >
                <div className={'notatki-cont'}>
                    {
                        _.map(notes, note => (
                            <Notatka key={note.id} {...note} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

NotesList.propTypes ={
    notes: PropTypes.object.isRequired
}

export default NotesList