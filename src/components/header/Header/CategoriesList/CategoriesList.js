import React from 'react';
import './CategoriesList.css';

function CategoriesList(props) {
    let visible = props.visible;

    return(
        <div data-testid="cats-list" className={visible ? 'catMenu' : 'catMenuHidden'}>
            <ul>
                <li>Category</li>
            </ul>
        </div>
    )
}

export default CategoriesList;