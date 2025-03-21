import React, { useRef, useState } from 'react'
import videoBg from "../assets/homevideo.mp4";
import musicBg from "../assets/bgmusic.mp3";
import pic from "../assets/image.jpg";
function Home() {

  const [isMuted, setIsMuted] = useState(true); // State to manage mute/unmute
  const audioRef = useRef(null); // Reference to audio element

  // Toggle Mute Function
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="home-container">
        <video className="background-video" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Background Music (Hidden) */}
        <audio ref={audioRef} src={musicBg} autoPlay loop muted />

        <div className="row">
          <div className="col-lg-7">
            <div className="text">
            <div data-aos="zoom-in" data-aos-duration="4000">
              <div className="title">Creative  <br />
                <span className='text1'> Web</span> Design<span className='text2'>er</span>
                </div>

                <p className='mt-4 intro text-start'> Hey, It's me <span className='text2'>Niraj</span>, passionate Frontend Developer dedicated to crafting intuitive, responsive, and visually engaging user interfaces. With a strong focus on modern web technologies. I'm currently diving into Python and Django for backend development and also for my AI Career.
                </p></div>

              <button className='touchbtn btn '> Get in Touch  <i class="bi bi-arrow-right-circle-fill px-2"></i> </button>

            </div>

          </div>
          <div className="col-lg-5">

            <div className="image">
            <div data-aos="zoom-in" data-aos-duration="5000">
              <img src={pic} alt="" />
              </div>
            </div>

          </div>
        </div>

        {/* Mute/Unmute Button */}
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "Unmute 🔊" : "Mute 🔇"}
        </button>

      </div>


    </>
  )
}

export default Home
