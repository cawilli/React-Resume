import React, {Component} from "react";
import {Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skill";


class Resume extends Component {
    render() {
        return(
          <div>
              <Grid>
                <Cell col={4}>
                    <div style={{textAlign: "center"}}>
                      <img 
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQHtJJcvvKCJiA/profile-displayphoto-shrink_100_100/0/1590851811745?e=1643241600&v=beta&t=QykxpVqnCrn85pJwZvv7XFCdMgiEBWiKgSKqCrnXFmM" 
                      alt="Candace Headshot"
                      style={{height: "200px" }}/>
                    </div>

                    <h2 style={{paddingTop: "2em"}}>Candace Williams</h2>
                    <h4 style={{color: "grey"}}>Datacenter Technician</h4>
                    <hr style={{borderTop: "3px solid #833FB2", width: "50%" }} />
                    <p>Experienced Inventory Control with a demonstrated history of working in the computer software industry. Skilled in Research, Microsoft services, and Customer Resolution and Success. Strong operations professional with a Bachelor of Arts (B.A.) focused in Communication/Public Relations with a focus in Information Technology from George Mason University.</p>
                    <hr style={{borderTop: "3px solid #833FB2", width: "50%" }} />
                    <h5>Address</h5>
                    <p> 1 Microsoft Way Bellevue, WA 98007</p>
                    <h5>Phone</h5>
                    <p>(123) 456-7890</p>
                    <h5>Email</h5>
                    <p>cawilli@microsoft.com</p>
                    <hr style={{borderTop: "3px solid #833FB2", width: "50%" }} />


                </Cell> 
                <Cell className="resume-right"col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2012}
                    endYear={2017} 
                    schoolName="George Mason"
                    degreeDescription="Bachelors's in Communication with a Concentration in Public Relations"
                    />
                    <Education
                    startYear={2019}
                    endYear={2021} 
                    schoolName="The University of Arizona: Global Campus"
                    degreeDescription="Master's in Information Systems Management"
                    />
                    <Education
                    startYear={2021}
                    endYear="Present"
                    schoolName="Gallaudet University"
                    degreeDescription="Professional Studies: American Sign Language & Deaf Studies"
                    />
                    <hr style={{borderTop: "3px solid #e22947" }} />

                    <h2>Experience</h2>
                    <Experience 
                    startYear={2012}
                    endYear={2014}
                    companyName="Microsoft"
                    jobName="Consumer Product Advisor"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <Experience 
                    startYear={2014}
                    endYear={2018}
                    companyName="Microsoft"
                    jobName="Inventory Control Expert"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <Experience 
                    startYear={2019}
                    endYear={2020}
                    companyName="Microsoft"
                    jobName="Logistics Technician"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <Experience 
                    startYear={2012}
                    endYear={2014}
                    companyName="Microsoft"
                    jobName="Consumer Product Advisor"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <Experience 
                    startYear={2020}
                    endYear="Present"
                    companyName="Microsoft"
                    jobName="Site Services Technician"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <Experience 
                    startYear={2020}
                    endYear="Present"
                    companyName="Microsoft"
                    jobName="Internal Leap Apprentice"
                    jobdescription="The job description and applicable description goes in this section. Highlight your successes and milestones. Show off your skills!!!"
                    />
                    <hr style={{borderTop: "3px solid #E22947"}} />

                    <h2>Skills</h2>
                    <Skills 
                    Skills="C#"
                    Progress={43}                  
                    />
                     <Skills 
                    Skills="JavaScript"
                    Progress={34}                  
                    />
                     <Skills 
                    Skills="HTML"
                    Progress={68}                  
                    />
                     <Skills 
                    Skills="CSS"
                    Progress={34}                  
                    />
                     <Skills 
                    Skills="Project Management"
                    Progress={73}                  
                    />



                </Cell>
              </Grid>
          </div>  
        )
    }
}

export default Resume;