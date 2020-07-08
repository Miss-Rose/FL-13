import React, { useState } from 'react';
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addCourse, editCourse } from '../redux/actionCreators/courseActionCreators';
import '../styles/button.css';
import '../styles/addNewCourse.css'


const AddEditCourse = ({addCourse, editCourse, history, location, courses}) => {
    const ID = location.pathname.split('/')[2];
    const currentCourse = courses.find((el) => +el.id === +ID);
    console.log('currentCourse', currentCourse);
    const [title, setTitle] = useState(ID ? currentCourse.title : '');
    const [description, setDescription] = useState(ID ? currentCourse.description : '');
    const [duration, setDuration] = useState(ID ? currentCourse.duration : '');
    const [author, setAuthor] = useState(ID ? currentCourse.author : '');
    const [date, setDate] = useState(ID ? currentCourse.date : '');

    const onSubmit = () => {
        if(ID){
            editCourse({title, description, duration, author, date, id: ID});
        }else{
            addCourse({title, description, duration, author, date, id: Date.now()});
        }
        history.push('/');
    };

    return (
        <div className="new-course">
            <div className="item">
                <label>Title*</label>
                <Input className="add-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="item">
                <label>Description*</label>
                <TextArea value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="item">
                <label>Duration*</label>
                <Input className="add-input" type="text" value={duration} onChange={(e) => setDuration(e.target.value)}/>
            </div>

            <div className="item">
                <label>Author*</label>
                <Input className="add-input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>

            <div className="item">
                <label>Date*</label>
                <Input className="add-input" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <Button type="btn" onClick={onSubmit} className="blue-button">Save</Button>
                <Link to='/'>
                    <Button type="button" className="white-button">Cancel</Button>
                </Link>
            </div>


        </div>
    );
};

const mapStateToProps = (state) => ({
    courses: state.courseReducer
});

const mapDispatchToProps = (dispatch) => ({
    addCourse: (data) => dispatch(addCourse(data)),
    editCourse: (data) => dispatch(editCourse(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddEditCourse);