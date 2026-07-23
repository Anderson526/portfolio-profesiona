import { Toaster } from '@/components/ui/sonner'
import { WebGLBackground } from '@/components/WebGLBackground'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      <WebGLBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Toaster />
    </div>
  )
}

export default App