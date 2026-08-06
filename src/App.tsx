import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { WebGLBackground } from '@/components/WebGLBackground'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { AllProjectsPage } from '@/components/AllProjectsPage'
import { AllCertificationsPage } from '@/components/AllCertificationsPage'
import { LanguageProvider } from '@/hooks/use-language'

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showCertificates, setShowCertificates] = useState(false)

  if (showAllProjects) {
    return (
      <LanguageProvider>
        <AllProjectsPage onClose={() => setShowAllProjects(false)} />
        <Toaster />
      </LanguageProvider>
    )
  }

  if (showCertificates) {
    return (
      <LanguageProvider>
        <AllCertificationsPage onClose={() => setShowCertificates(false)} />
        <Toaster />
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <WebGLBackground />
        <Navigation onShowAllProjects={() => setShowAllProjects(true)} onShowCertificates={() => setShowCertificates(true)} />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        
        <Toaster />
      </div>
    </LanguageProvider>
  )
}

export default App