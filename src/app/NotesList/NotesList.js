// import React from 'react'
import Notatka from '../Notatka/NotatkaContainer'
import _ from 'lodash'

// const NotesList = ({ notes, activeNote }) => {
//     return (
//         <div className="notatki-cont" 
//         >
//                 {
//                     _.map(notes, (notatka, key) => {
//                     return (
//                         <Notatka {...notatka}
//                         key={notatka.id}
//                         isActive={notatka.id === activeNote ? true : false}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }

import React, { Component } from 'react'

class NotesList extends Component {
    componentDidMount() {
        this.colCount = Math.trunc(this.refs.test.clientWidth/270);
    }

    render() {
        const { notes, activeNote } = this.props;
        return (
            <div className="notatki-cont" ref="test" 
            // style={{columnCount: this.colCount}}
            >
                {
                    _.map(notes, (notatka, key) => {
                        return (
                            <Notatka {...notatka} ref='tt'
                                key={notatka.id}
                                isActive={notatka.id === activeNote ? true : false}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


export default NotesList
