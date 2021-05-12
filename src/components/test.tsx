import * as React from 'react'

const TestButtons = () : JSX.Element => {
  return(
    <div>
        <a href="http://localhost:8888/.netlify/functions/auth/github" className="w3-button w3-black">GITHUB</a>
        &ensp;
        <a href="http://localhost:8888/.netlify/functions/auth/google" className="w3-button w3-black">GOOGLE</a>
    </div>
  )
}

export default TestButtons