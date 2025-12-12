import React from 'react'
const App: React.FC = () => {
  return (
    <div>
      <header>Weather BBL</header>
      <main>
        <input placeholder="Search city" />
        <section id="current-weather" />
        <section id="forecast" />
        <section id="charts" />
      </main>
    </div>
  )
}
export default App