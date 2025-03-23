import React from 'react'
// import aboutbg from "../assets/aboubg.jpg";
function About() {
  return (
    <>


      {/* <img className='Abg' src={} alt="" /> */}
      <div className="abg">

        <div className=' HeadA text-center mt-5'>About Me</div>

        <div className="row">
          <div className="col-md-6">
          <div className="card1">
            <h1 className='text-center pt-3 text-success'>Introduction</h1>
            <p className='fs-4 text-white pt-2 px-5 text-center'>Hi, Welcome to my Website</p>
            <p className='px-5 text-white'> I’m Niraj, a passionate tech student with a strong foundation in frontend development and problem-solving. I specialize in crafting user-friendly web applications using modern technologies like React, JavaScript, Bootstrap and Tailwind CSS.</p>

           <p className='px-5 text-white'> I have hands-on experience through projects and hackathons, where I’ve worked on real-world challenges, including agricultural supply chains and sustainable waste management. I'm excited to collaborate with like-minded individuals and contribute to innovative projects that make a positive impact.</p>

            <p className='px-5 text-white'>Currently, I’m focused on expanding my expertise in Python and SQL while actively participating in tech competitions. My goal is to contribute to innovative projects that bridge technology with real-world impact. Let’s connect and build something amazing!</p>

⸻

            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2">
            <h1 className='text-center pt-3 text-success'> Thinigs I do</h1>
            <div className="row mt-3">
              <div className="col-lg-5 offset-lg-1">
              <div className="boxA text-start px-5 ">
              <h5 className='text-center py-2'>Frontend Development</h5>
            </div>
            <div className="boxA text-start px-5 ">
              <h5 className='text-center py-3'>Web Dsigning</h5>
            </div>
              <div className="boxA text-start px-5 ">
              <h5 className='text-center py-3'>UX Designing</h5>
            </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
              <div className="boxA text-start px-5 ">
              <h5 className='text-center py-2'> Content Writing</h5>
            </div>
            <div className="boxA text-start px-5 ">
              <h5 className='text-center py-3'>Video Editing</h5>
            </div>
              <div className="boxA text-start px-5 ">
              <h5 className='text-center py-2'> Content Creation</h5>
            </div>
              </div>
            </div>
          

            </div>
          </div>
          
        </div>
        
      </div>











    </>
  )
}

export default About
