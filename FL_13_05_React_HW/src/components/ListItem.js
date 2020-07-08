import React, {useState} from 'react';
import '../styles/listItem.css';
import PopUp from "./PopUp";

const ListItem = ({list}) => {
    const [isPopUp, setIsPopUp] = useState(0);

    const handleClick = (id) => {
        if (isPopUp) {
            setIsPopUp(0);
        }else {
            setIsPopUp(id);
        }
    };

    return (
        <ul className="list">
            {
                list.map(({id, title, description, date, duration}) => {
                    return (
                        <li key={id} className="list-item">
                            <span>{date} </span>
                            <span>{title} </span>
                            <span>{description} </span>
                            <span>{duration} </span>
                            <span onClick={() => handleClick(id)}>...</span>
                            <PopUp id={id} isPopUp={isPopUp === id} setIsPopUp = {() => setIsPopUp(0)}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default ListItem;