import React from 'react';
import './Search.css'
import {useClickOutside} from "../../../UI/hooks/useClickOutside";



const SearchModal = (props) => {

    let domNode = useClickOutside(() => {
        props.closeModal()
    })

    return (
        <div>
            {props.showModal ? <div className="search" ref={domNode}>
                <div className="search__header">
                    <div className="search__title">Search</div>
                    <div className="search__close-btn" onClick={props.setShowModal}>
                    </div>
                </div>

                <div className="search__body">

                    <div className="select-category">
                        <select name="category" id="category">
                            <option>All categories</option>
                            <option>Women</option>
                            <option>Men</option>
                            <option>Accessories</option>
                            <option>Beauty</option>
                        </select>

                        <div className="search-input">
                            <input type="text" placeholder="What are you looking for?"/>
                        </div>
                    </div>

                    <hr/>
                </div>
            </div> : null}

        </div>
    );
};

export default SearchModal;