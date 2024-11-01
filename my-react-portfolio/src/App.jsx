// App.jsx

import { useState } from 'react'
import './App.css'
import { TopSection } from '../components/1-top-section/TopSection.jsx'
import { SkillsSection } from '../components/2-skills-section/SkillsSection.jsx'
import { ProjectSection } from '../components/3-featured-projects/ProjectSection.jsx'
import { TechSection } from '../components/4-tech-section/TechSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <TopSection />
        <SkillsSection />
        <ProjectSection />
        <TechSection />
      </main>
    </>
  )
}

export default App
