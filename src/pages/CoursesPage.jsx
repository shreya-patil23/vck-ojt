import React from "react"
import Header from "../components/Herader/Header"
import Footer from "../components/Footer/Footer"
import './courses.css'
import { Link } from "react-router-dom"


const CoursesPage = () => {
    return (
        <div className="back">
            <Header/>
              <div className="cu a" style={{overflow:"auto"}}>
            <h1 className="cr">Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2>Discover Campus Life</h2>
            <video src="/Videos/video1.mp4" controls width="100%" height="auto"></video>
            <h2 className="line">Undergraduate Programs (UG)</h2>
      <ul>
        <li>**Bachelor of science(B.Sc)
        <ul>
            <li>Computer Science (3 years)</li>
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
        </ul>
        </li>
        <li>**Bachelor of Commerce
        <ul>
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
        </ul>
        </li>
        <li>**Bachelor of Arts(B.A.)
        <ul>
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
        </li>
      </ul>
      <h3 className="line">Postgraduate Programs (PG)</h3>
      <ul>
        <li>**Master of Science (M.Sc.)**
        <ul>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
        </ul>
        </li>
        <li>**Master of Commerce (M.Com)** (2 years)</li>
        <li>**Master of Arts (M.A.)** (2 years)</li>
      </ul>
      <h5 className="line">Program Details & Fee Structure (Annual)</h5>
      <table className="q">
        <thead>
          <tr>
            <th>Program Type</th>
            <th> Course Name</th>
            <th>Duration</th>
            <th>Annual Fee ()</th>
            <th>Eligibility</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <td>U G</td>
            <td> B.Sc. Computer Science</td>
            <td>3 Years</td>
            <td>70000</td>
            <td>10+2 Commerce</td>
          </tr>
          <tr>
            <td>PG</td>
           <td>MSc. Information Technology</td>
           <td>2 Years</td>
           <td>95000</td>
           <td>BSc. IT/CS</td>
          </tr>
         </tbody>
      </table>
      
      <h4 className="line">Specialized & Vocational Courses</h4>
      <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
      <h5 className="text">Explore detailed syllabi and admission criteria on our Admissions page.</h5>
      <Link to="/admissions"><button className="A">Inquire About Courses</button></Link>
      </div>        
          <Footer/>
        </div>
    ) 
    
}

export default CoursesPage