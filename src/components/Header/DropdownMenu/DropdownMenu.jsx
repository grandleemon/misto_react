import React from 'react';
import './DropdownMenu.css'

const DropdownMenu = () => {
    return (
        <div>
            <div className="dropdown__menu-body">
                <div className="dropdown__menu-categories">
                    <div className="tops-categories">
                        <ul>
                            <h2>tops</h2>
                            <li>
                                <a href="#">Awesome</a>
                            </li>
                            <li>
                                <a href="#">Beachwear</a>
                            </li>
                            <li>
                                <a href="#">Beige</a>
                            </li>
                            <li>
                                <a href="#">Cool New</a>
                            </li>
                            <li>
                                <a href="#">Dress</a>
                            </li>
                            <li>
                                <a href="#">Gap</a>
                            </li>
                            <li>
                                <a href="#">Guess</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottoms-categories">
                        <ul>
                            <h2>bottoms</h2>
                            <li>
                                <a href="#">Jeans</a>
                            </li>
                            <li>
                                <a href="#">Lacoste</a>
                            </li>
                            <li>
                                <a href="#">Levi's</a>
                            </li>
                            <li>
                                <a href="#">Model</a>
                            </li>
                            <li>
                                <a href="#">Nice Featured</a>
                            </li>
                            <li>
                                <a href="#">Polo</a>
                            </li>
                            <li>
                                <a href="#">Pullover</a>
                            </li>
                        </ul>
                    </div>
                    <div className="accessories-categories">
                        <ul>
                            <h2>accessories</h2>
                            <li>
                                <a href="#">Scarf Sale 13%</a>
                            </li>
                            <li>
                                <a href="#">Shirt</a>
                            </li>
                            <li>
                                <a href="#">Shoes</a>
                            </li>
                            <li>
                                <a href="#">Shorts</a>
                            </li>
                            <li>
                                <a href="#">Summer</a>
                            </li>
                            <li>
                                <a href="#">Sunglasses</a>
                            </li>
                            <li>
                                <a href="#">Vintage</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown__menu-bestsellers">

                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;