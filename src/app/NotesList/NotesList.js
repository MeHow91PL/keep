import React from 'react'
import Notatka from '../Notatka/NotatkaContainer'
import _ from 'lodash'

const NotesList = ({ notes, activeNote }) => {
    return (
        <div className="notatki-cont">
            {
                _.map(notes, (notatka, key) => {
                    console.log('notatka.id'.notatka);
                    console.log('activeNote', activeNote);
                    return (
                        <Notatka {...notatka}
                            key={notatka.id}
                            isActive={notatka.id === activeNote ? true : false}
                        />
                    )
                })
            }
        </div>
    )
}

export default NotesList
