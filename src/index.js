import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Widget1} from './App';
import Widget from './components/Widget.js';

var courses = ['CSE100', 'CSE110', 'CSE20', 'CSE30'];

ReactDOM.render(<App />, document.getElementById('top'));

function addWidget(param) {
  {/* This removes any widgets that may be from a different class */}
  ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));
  
  {/* Render the course widgets */}
  ReactDOM.render(<Widget1 name={param}></Widget1>, document.getElementById('bottom')); 
}

ReactDOM.render(
<div className="container-fluid">
    <div className="row">
    {courses.map((courseTitle, arrayIndex) => {
        return (
        <button key={arrayIndex} className="Button" 
        onClick={addWidget.bind(this, courseTitle)}>{courseTitle}</button>
        )
    })}
    </div>
</div>, document.getElementById('buttons'));
