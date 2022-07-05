import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container my-5 py-3 rounded" >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
            
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              KULDEEP PRAKASH --react developer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>P E R S O N A L P R O F I L E : </strong>I am a certified full-stack web developer who is passionate about coding and loves to learn new things. I have excellent problem-solving skills and the ability to perform well in a team. <code>Certified MERN stack developer</code>  linkedin.com/in/kuldeepprakash
              
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
            
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              E D U C A T I O N A L H I S T O R Y
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>B.tech : </strong>B.Tech
              Computer Science and Engineering | Final Year 2021<code>HEMVATI NANDAN BAHUGUNA GARHWAL
              UNIVERSITY A Central University</code>,
              Percentage: 65%
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button
            
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              News-Feed app
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Some of its features: </strong> In this application, we can see category-wise news articles.<code>--kuldeep prakash</code>,
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="conatiner my-4">
          <button type="button" className="btn btn-primary mx-2" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
    </div>
  )
}

export default About
