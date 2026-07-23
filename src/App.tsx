import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { WebGLBackground } from '@/components/WebGLBackground'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { AllProjectsPage } from '@/components/AllProjectsPage'
import { LanguageProvider } from '@/hooks/use-language'

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  if (showAllProjects) {
    return (
      <LanguageProvider>
        <AllProjectsPage onClose={() => setShowAllProjects(false)} />
        <Toaster />
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <WebGLBackground />
        <Navigation onShowAllProjects={() => setShowAllProjects(true)} />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Toaster />
      </div>
    </LanguageProvider>
  )
}

export default App