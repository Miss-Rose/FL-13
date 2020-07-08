import React from 'react';
import './App.css';
import CourseList from "./pages/CourseList";
import {Route} from 'react-router-dom';
import AddEditCourse from "./pages/AddEditCourse";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Route exact path='/' component={CourseList}/>
                <Route path='/add-course' component={AddEditCourse}/>
                <Route path='/edit-course/:id' component={AddEditCourse}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
