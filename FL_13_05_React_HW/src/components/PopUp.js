import React from 'react';
import remove from '../delete.svg';
import edit from '../edit.svg';
import { connect } from "react-redux";
import { deleteCourse } from '../redux/actionCreators/courseActionCreators'
import {Link} from "react-router-dom";

const PopUp = ({isPopUp, setIsPopUp, removeCourse, id}) => {
    console.log("id", id);
    const handleClick = (id) => {
        removeCourse(id);
        setIsPopUp(0);
    };

    return (
        <>
            {isPopUp ? (
                <div>
                    <div onClick={() => handleClick(id)}>
                        <img width={20} height={20} src={remove} alt="delete"/>
                    </div>
                    <Link to={`edit-course/${id}`}>
                       <img width={20} height={20} src={edit} alt="edit"/>
                    </Link>
                </div> ) : null
           }
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        removeCourse: (data)=> dispatch(deleteCourse(data))
    }
};

export default connect(null, mapDispatchToProps)(PopUp);