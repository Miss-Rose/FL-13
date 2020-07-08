import React from 'react';
import {connect} from 'react-redux';
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import '../styles/button.css';
import '../styles/inputs.css';
import '../App.css';
import {searchCourse} from "../redux/actionCreators/courseActionCreators";

const CourseList = ({courses, searched, searchC}) => {
    console.log(searched);
    return (
        <div className="main-content">
            <div className="search-add">
                <Input
                    type="search"
                    value={searched}
                    onChange={(e) => searchC(e.target.value)}
                    className="searchInput"
                    placeholder="search"
                />
                <Link to={'add-course'}>
                    <Button className="blue-button">
                        Add course
                    </Button>
                </Link>
            </div>
            <ListItem list={courses}/>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        courses: state.courseReducer.filter(({title}) => title.startsWith(state.searchReducer.search)),
        searched: state.searchReducer.search
    }

};

const mapDispatchToProps = (dispatch) => ({
    searchC: (data) => dispatch(searchCourse(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);