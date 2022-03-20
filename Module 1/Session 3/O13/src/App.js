import React from 'react'
require('dotenv').config()
function App() {
  if(process.env.SPOTIFY_API_KEY != null) console.log('ok')
  return (
    <div>
    
    </div>
  )
}

export default App
