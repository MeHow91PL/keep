//React
import React, { Component } from 'react'

//Redux 
import { connect } from 'react-redux';

//Components
import NotesList from '../NotesList/NotesList';
import SearchItem from './SearchItemComponent';
import { TypeItem, LabelItem } from './SearchItems';

//Actions
import { setSearchFilter, searchNote } from '../SearchInput/SearchActions';

//Others
import { FilterTypes } from './SearchItems';

class SearchView extends Component {

    render() {
        // const { TypeItem } = this.props;
        // const searchFilter = filtres[filter]

        const { setSearchFilter, notes } = this.props;
        return (
            <div>
                <div className={`filterContainer ${notes.length > 0 ? 'hidden' : ''}`}>
                    <div className={`notatka`}>
                        {
                            <SearchItem {...TypeItem} setSearchFilter={setSearchFilter} />
                        }
                    </div>
                    <div className="notatka">
                        {
                            <SearchItem {...LabelItem} setSearchFilter={setSearchFilter} />
                        }
                    </div>
                    <div className="notatka">Rzeczy</div>
                </div>
                <div className="searchResults">
                    <NotesList notes={notes} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    notes: state.NotesList.FilteredNotes
})

const mapDispatchToProps = {
    setSearchFilter,
    searchNote
    // setSearchFilter: (filter) => dispatch(setSearchFilter(filter))
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)