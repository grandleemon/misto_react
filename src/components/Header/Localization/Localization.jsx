import React, {useEffect, useRef} from 'react';
import './Localization.css'

const Localization = (props) => {

    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)) {
                props.closeModal()
            }
        }
        document.addEventListener('mousedown', handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div>
            {props.showModal ? <div className="localization" ref={menuRef}>
                <div className="localization__header">
                    <div className="localization__title">Localization</div>
                    <div className="localization__close-btn" onClick={props.setShowModal}>
                    </div>
                </div>

                <div className="localization__body">
                    <div className="choose__language">
                        <h3>Language</h3>
                        <div>
                            <input type="radio" name="language" value="English" id="English"/>
                            <label htmlFor="English">English</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Русский" id="Russian"/>
                            <label htmlFor="Russian">Русский</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Français" id="French"/>
                            <label htmlFor="French">Français</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Deutsche" id="German"/>
                            <label htmlFor="German">Deutsche</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Español" id="Spanish"/>
                            <label htmlFor="Spanish">Español</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Polskie" id="Polish"/>
                            <label htmlFor="Polish">Polskie</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="Türkçe" id="Turkish"/>
                            <label htmlFor="Turkish">Türkçe</label>
                        </div>
                        <div>
                            <input type="radio" name="language" value="한국어" id="Korean"/>
                            <label htmlFor="Korean">한국어</label>
                        </div>
                    </div>

                    <div className="choose__currency">
                        <h3>Currency</h3>
                        <div>
                            <input type="radio" name="currency" value="USD ( US Dollar )" id="USD"/>
                            <label htmlFor="USD">USD ( US Dollar )</label>
                        </div>
                        <div>
                            <input type="radio" name="currency" value="RUB ( RU ruble )" id="RUB"/>
                            <label htmlFor="RUB">RUB ( RU ruble )</label>
                        </div>
                        <div>
                            <input type="radio" name="currency" value="EUR ( Euro )" id="EUR"/>
                            <label htmlFor="EUR">EUR ( Euro )</label>
                        </div>
                        <div>
                            <input type="radio" name="currency" value="PLN ( Polish Zloty )" id="PLN"/>
                            <label htmlFor="PLN">PLN ( Polish Zloty )</label>
                        </div>
                        <div>
                            <input type="radio" name="currency" value="TRY ( Turkish Lira )" id="TRY"/>
                            <label htmlFor="TRY">TRY ( Turkish Lira )</label>
                        </div>
                        <div>
                            <input type="radio" name="currency" value="KRW ( Korean Won )" id="KRW"/>
                            <label htmlFor="KRW">KRW ( Korean Won )</label>
                        </div>
                    </div>
                </div>
            </div> : null}

        </div>
    );
};

export default Localization;