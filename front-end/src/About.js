import { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
  const [about, setAbout] = useState(null) // about = currenValue, setAbout = function that updates it

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(res => setAbout(res.data))
  }, [])
  if (!about) return <p>Loading...</p>

  return (
    <div
      style={{
        display: 'flex', // flex display to make the paragraphs and image side by side
        justifyContent: 'center', // centers image & paragraphs horizontally
        gap: '20px',
        alignItems: 'center', // centers image & paragraphs vertically
      }}
    >
      <div
        style={{
          maxWidth: '400px', // set max width the paragraphs will take
          textAlign: 'justify', // text-align
          lineHeight: '1.6', // add vertical space between lines for better appearance
        }}
      >
        <h1> {about.name}</h1>
        {about.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
      <img
        src={about.imageURL}
        alt="my image"
        width="300"
        style={{ borderRadius: '40px' }}
      />
    </div>
  )
}

export default About
