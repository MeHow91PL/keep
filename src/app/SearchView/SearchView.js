//React
import React, { Component } from 'react'

//Redux 
import { connect } from 'react-redux';

//Components
import NotesList from '../NotesList/NotesList';
import SearchItem from './SearchItemComponent';
import { TypeItem, LabelItem } from './SearchItems';

//Actions
import { setSearchFilter } from '../SearchInput/SearchActions';

class SearchView extends Component {
    render() {
        const { filter, setSearchFilter } = this.props;
        return (
            <div>
                <div className="notatka">
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
    
                <div className="searchResults">
                    <NotesList notes={[]} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    filter: state.SearchMode.searchFilter
})

const mapDispatchToProps = {
    setSearchFilter
    // setSearchFilter: (filter) => dispatch(setSearchFilter(filter))
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)