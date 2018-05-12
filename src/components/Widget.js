import React, {Component} from 'react';

var json = {
               "name":"GradeScope",
               "class":"CSE 140",
               "grades":[ "HW1: 92.0 / 100.0", "HW2: 88.0 / 100.0" ]
               }

var nam = "test";

class Widget extends Component {
    constructor(name) {
      { /*  super(prop); */ }
        super();
        nam = name;
        this.state = {
            courses: ['CSE100', 'CSE110', 'CSE20', 'CSE30', 'CSE 140'],
            urls: ['http://www.gradesource.com/reports/3586/29656/index.html', 'http://www.gradesource.com/reports/7/29889/index.html', 'http://www.gradesource.com/reports/346/29648/index.html', 'http://www.gradesource.com/reports/288/29652/index.html'],
            userName: [1,2,3,4],
            password: [1,2,3,4],
            position: [1,2,3,4]
        }
        
    }
    
    render(){
        return(
        <div className="container-fluid">
            <div className="row">
            {this.state.courses.map((courseTitle, arrayIndex) => {
                return (

            <div className="Widget">
                <div id="e" draggable="true" className="w-container">
                    <div className="w-top">
                    </div>
                    <div key={arrayIndex}>{nam}</div>
                    <div key={arrayIndex}>{json.name}</div>
                    <div key={arrayIndex}>{json.grades[0]}</div>
                    <div key={arrayIndex}>{json.grades[1]}</div>
                    <div key={arrayIndex}>{json.grades[2]}</div>
                </div>
            </div>
                )
            })}

            </div>
        </div>
        );
    }
}

export default Widget;
