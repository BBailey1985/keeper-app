import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'
import Footer from './footer.jsx'
import Note from './Note.jsx'

function App() {
  return (
    <div>
      <Header />
      <Note />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App;