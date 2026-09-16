// import Navbar from '#components/Navbar'
// import React from 'react'
// import Welcome from '#components/Welcome'
// import Dock from '#components/Dock'

// const App = () => {
//   return (
// <main>
//   <Navbar/>
//   <Welcome />
//   <Dock />
// </main>
//   )
// }

// export default App
import Navbar from '#components/Navbar'
import React from 'react'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { dockApps } from '#constants' // Import dockApps array here

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock dockApps={dockApps} /> {/* Pass dockApps as a prop */}
    </main>
  )
}

export default App