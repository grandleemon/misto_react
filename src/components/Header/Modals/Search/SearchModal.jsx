import React, {useState} from 'react';
import {useClickOutside} from "../../../UI/hooks/useClickOutside";
import {data} from '../../../../app/Data'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentProduct} from "../../../../app/features/products/productsSlice";
import CloseIcon from '@mui/icons-material/Close';
import './Search.css'


const SearchModal = ({closeModal, setShowModal, showModal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")
    const handleFilter = (e) => {
       const searchWord =  e.target.value;
       setWordEntered(searchWord)
       const newFilter = data.filter((value) => {
           return value.cardTitle.toLowerCase().includes(searchWord.toLowerCase())
       });
       if(searchWord === "") {
           setFilteredData([])
       } else {
           setFilteredData(newFilter)
       }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered("")
    }

    let domNode = useClickOutside(() => {
        closeModal()
    })

    return (
        <div>
            {showModal ? <div className="search" ref={domNode}>
                <div className="search__header">
                    <div className="search__title">Search</div>
                    <div className="search__close-btn" onClick={setShowModal}>
                    </div>
                </div>

                <div className="search__body">
                    <div className="search-input">
                        <input type="text" placeholder="What are you looking for?" value={wordEntered} onChange={handleFilter}/>
                        {wordEntered ?
                            <div className="closeIcon" onClick={ clearInput } >
                                <CloseIcon />
                            </div> : null
                        }
                    </div>
                    <hr/>
                    {filteredData.length  ?
                        <div className="search__results">
                            {filteredData.slice(0, 10).map((value, key) => {
                                return <div className="search__card" onClick={() => {
                                    closeModal()
                                    dispatch(setCurrentProduct(value))
                                    navigate(`/products/${value.cardTitle}`)
                                }}>
                                    <div className="search__card-image">
                                        <img src={value.cardImage} alt=""/>
                                    </div>
                                    <div className="search__card-content">
                                        <div className="search__card-title">{value.cardTitle}</div>
                                        <div className="search__card-price">$ {value.cardPrice.toFixed(2)}</div>
                                    </div>
                                </div>
                            })}
                        </div> : null
                    }
                </div>
            </div> : null}

        </div>
    );
};

export default SearchModal;