import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router';

//Other
import { searchMain, search } from '../paths';
import PropTypes from 'prop-types'

//Actions
import { setPaceholder, setSearchFilter, setInputActive, setInputDeactive } from './SearchActions';

class SearchInput extends Component {
    render() {
        const { setSerchMode, placeholder, setInputActive, setInputDeactive, isActive, actualUrl } = this.props;

        const onFocus = () => {
            setInputActive();
            console.log(actualUrl);
            
            if(!actualUrl.includes(search)) setSerchMode();
        }
        return (
            <div className={`szukaj-cont ${isActive ? 'active' : ''}`}>
                <div className="szukaj-btn">
                    <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    name="wyszukiwarka"
                    id="wyszukiwarka"
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={setInputDeactive}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    placeholder: state.SearchMode.inputPlaceholder.concat('...'),
    actualUrl: state.router.location.pathname,
    isActive: state.SearchMode.isActive
})

const mapDispatchToProps = ({
    setSerchMode: () => push(searchMain),
    setInputActive, setInputDeactive
})

// const mapDispatchToProps = {     setSerchMode: () => {
// push('/Search')     } }

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    setSerchMode: PropTypes.func.isRequired,
    setInputActive: PropTypes.func.isRequired,
    setInputDeactive: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
