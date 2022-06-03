import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeMainCityName} from "../../redux/headerReducer";


function Header() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault()

        if (value.trim()) {
            setValue('')
            dispatch(changeMainCityName(value))
        } else (alert("Type something"))
    }


return (
    <div>
        <form className="search__city"
              onSubmit={handlerSubmit}>
            <input className="city"
                   type="text"
                   placeholder="Dnipro"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}/>
            <button className="search__btn"
                    >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                </svg>

            </button>
        </form>
    </div>
)
}

export default Header;
