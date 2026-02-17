import React from 'react'
import myPicture from './images/myPicture.JPG'

const About = () => {
  return (
    <div style={{ 
        display: 'flex', 
        alignItems: "center",
        justifyContent: "center", 
        gap: "25px",
        flexWrap: "wrap"
        }}
    >
      <div className="description" style={{maxWidth: "600px", textAlign: "justify", lineHeight: "1.6"}}>
        <p>
          Hey! I’m Abir, a senior at NYU CAS studying Computer Science. <br />
          I’m currently focused on building strong full-stack development skills
          and preparing to start my career as a software engineer after
          graduation.
        </p>
        <p>
          In my free time, I enjoy watching movies, playing video games, and
          spending time with friends.
        </p>
      </div>

      <img
        src={myPicture}
        alt="Abir Mahmood"
        style={{ width: '300px', height: 'auto', borderRadius: "10px"}}
      />
    </div>
  )
}

export default About
