import React from 'react';
import './CategoriesList.css';
import {useDispatch} from 'react-redux';
import {setSelectedSubreddit} from '../../../../store/redditSlice';
import {Link} from 'react-router-dom';


function CategoriesList(props) {
    const dispatch = useDispatch();
    let visible = props.visible;
    // list of initial searchable subreddits
    let categories = props.categories

    function handleCategoryChange(e) {
        console.log(e.target.value)
        dispatch(setSelectedSubreddit(e.target.value));

    }

    return(
        <div data-testid="cats-list" className={visible ? 'catMenu' : 'catMenuHidden'}>
            <ul className="cats-list">
                {categories.map(category => {
                    return(
                        <li key={category}>
                            <Link to='/'>
                                <button
                                className="cat-button"
                                onClick={handleCategoryChange}
                                value = {category}
                                >
                            {category}
                            </button>
                            </Link>
                        </li>
                    )
                })
            }
                
            </ul>
        </div>
    )
}

export default CategoriesList;