import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
      <div className="profile">
        <h5>Objective</h5>
        <p>Creating and designing minimal, innovative and intuitive visual interfaces 
            that solve problems, contributes to the success and growth of a dynamic corporate 
            organization which desires, supports and appreciates special skill.</p>

        <h5>Personal Skills and Ability</h5>
        <ul>
            <li>HyperText Markup Language (HTML)</li>
            <li>Cascading Style Sheet (CSS)</li>
            <li>Javascript (JS)</li>
            <li>React Js</li>
            <li>Good Communication Skills</li>
            <li>Excellent Human Relation Skills</li>
        </ul>

        <h5>Qualities</h5> 
            <ul>
                <li>Implement websites.</li>
                <li>Assess UI and UX designs and also implement them.</li>
                <li>Collaborate with team members to implement features.</li>
            </ul> 
        <h5>Educational Qualifications</h5>
        <table>
            <tr>
                <td>2017-2018	</td>
                <td>National Youth Service Corps: Faith International Schools Gadabuke, Nasarawa State.</td>
            </tr>
            <tr>
                <td>2012-2016</td>
                <td>Michael Okpara University of Agriculture, Umudike Abia State: Bachelors of Science (B.Sc) in Computer Science</td>
            </tr>
        </table>
    </div>
  )
}

export default About
