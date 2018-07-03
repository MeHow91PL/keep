import React from 'react'
import Notatka from '../Notatka/Notatka'
import _ from 'lodash'

const NotesList = ({ notes }) => {
    return (
        <div className="notatki-cont">
            {
                console.log(notes)}
            {
                _.map(notes, (notatka, key) => {
                    return (
                        <Notatka {...notatka} key={notatka.id} />
                    )
                })
            }
        </div>
    )
}

export default NotesList
