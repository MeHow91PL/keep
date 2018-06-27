import React from 'react'
import Notatka from '../Notatka/Notatka'

const NotesList = ({notes}) => {
    return (
        <div className="notatki-cont">
            {notes.map(notatka => (<Notatka {...notatka} key={notatka.id}/>))
}
        </div>
    )
}

export default NotesList
