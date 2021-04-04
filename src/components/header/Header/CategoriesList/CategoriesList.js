import React from 'react';
import './CategoriesList.css';
import {useDispatch} from 'react-redux';
import {setSelectedSubreddit} from '../../../../store/redditSlice';


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
            <ul>
                {categories.map(category => {
                    return(
                        <li key={category}>
                            <button
                            onClick={handleCategoryChange}
                            value = {category}
                            >
                            {category}
                            </button>
                        </li>
                    )
                })
            }
                
            </ul>
        </div>
    )
}

export default CategoriesList;