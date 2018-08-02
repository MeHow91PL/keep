//React
import React, { Component } from 'react'

//Others
import _ from 'lodash'
import PropTypes from 'prop-types';

//Components
import Notatka from '../Notatka/NotatkaContainer'
// import Grid, { WidthProvider } from 'react-grid-layout'


// const ReactGridProvider = WidthProvider(Grid);

class NotesList extends Component {
    // static def = {
    //     className: "layout",
    //     isDraggable: false,
    //     isResizable: false,
    //     items: 50,
    //     cols: 12,
    //     rowHeight: 30,
    //     onLayoutChange: function () { }
    // }

    // static test = 'aaas'

    // prop = {
    //     autoSize: false,
    //     containerPadding: [50, 50]
    // }

    // constructor(props) {
    //     super(props);
    //     const layout = this.generateLayout();
    // }

    // generateDOM() {
    //     return _.map(_.range(this.props.items), function (i) {
    //         return (
    //             <div key={i}>
    //                 <span className="text">{i}</span>
    //             </div>
    //         );
    //     });


    //     <div className="card" key="a"
    //     onClick={() => console.log(this.cont)}
    //     data-grid={{ x: 0, y: 0, w: 1, h: 2 }}
    // >sdad</div>
    // <div className="card" key="s"
    //     data-grid={{ x: 1, y: 0, w: 1, h: 2 }} >
    //     sdad
    // </div>
    // <div className="card" key="d"
    //     data-grid={{ x: 0, y: 2, w: 1, h: 2 }} >sdad</div>
    // }

    // generateLayout() {
    //     const p = this.props;
    //     console.log('p',p);
    //     console.log('p.items',p.items);
        
    //     return _.map(new Array(p.items), function (item, i) {
    //         var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
    //         return {
    //             x: (i * 2) % 12,
    //             y: Math.floor(i / 6) * y,
    //             w: 2,
    //             h: y,
    //             i: i.toString()
    //         };
    //     });
    // }

    // onLayoutChange(layout) {
    //     this.props.onLayoutChange(layout);
    // }

    
    // componentWillUpdate() {
    // }
    
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

//PropTypes dla testów
NotesList.propTypes ={
    notes: PropTypes.objectOf(PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }))
}

export default NotesList