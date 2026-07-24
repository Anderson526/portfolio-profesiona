import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

export function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent font-mono text-sm mb-4 tracking-wider"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-4 justify-center items-center flex-wrap"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.viewProjects')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent/50 text-foreground hover:bg-accent/10 transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.getInTouch')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center mt-16"
          >
            <a 
              href="https://github.com/Anderson526" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <GithubLogo size={28} weight="fill" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anderson-chila-36344923b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <LinkedinLogo size={28} weight="fill" />
            </a>
            <a 
              href="mailto:andersonchila16@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <EnvelopeSimple size={28} weight="fill" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
