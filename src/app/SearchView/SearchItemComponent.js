//React
import React from 'react'
import PropTypes from 'prop-types';

//React-router
import { Link } from 'react-router-dom';

//Assets



function SearchItem({ Title, Children,setSearchFilter }) {
    return (
        <div className="SearchItem">
            <div className="title">{Title}</div>
            {/* <div>
                {
                    Children.map(child => (
                        <div key={child.Name} className={child.ClassName} onClick={()=>setSearchFilter(child.FilterName)} >
                                <child.Img />
                                <div className={`{$child.ClassName}-name`}>
                                    {child.Name}
                                </div>
                        </div>
                    )
                    )
                }
            </div> */}

            
            <div>
                {
                    Children.map(child => (
                        <div key={child.Name} className={child.ClassName} onClick={()=>setSearchFilter(child.FilterName)} >
                            <Link to={child.Link}   >
                                <child.Img />
                                <div className={`{$}-name`}>{child.Name}</div>
                            </Link>
                        </div>
                    )
                    )
                }
            </div>
           
        </div>
    )
}

SearchItem.propTypes = {
    Title: PropTypes.string.isRequired,
    Children: PropTypes.arrayOf(PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Img: PropTypes.func,
        Link: PropTypes.string
    })),
    setSearchFilter: PropTypes.func.isRequired
}

export default SearchItem
