import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Code } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useLanguage } from '@/hooks/use-language'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const skills = [
    'JavaScript', 'React', 'Python', 'PHP', 'WordPress', 'Node.js',
    'Git Flow', 'HTML/CSS', 'SEO', 'Web Accessibility', 'E-commerce', 'CRM Systems'
  ]

  const experience = t('experience')

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Code size={32} className="text-accent" weight="duotone" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ letterSpacing: '-0.01em' }}>
              {t('about.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.intro1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.intro2')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={24} className="text-accent" weight="duotone" />
                {t('about.skillsTitle')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-card border border-accent/20 text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          <Separator className="mb-16" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase size={28} className="text-accent" weight="duotone" />
              {t('about.experienceTitle')}
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-accent/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <span className="text-sm text-accent font-mono">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
