import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, TwitterLogo } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLanguage } from '@/hooks/use-language'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: EnvelopeSimple,
      label: t('contact.email'),
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      color: 'hover:text-accent'
    },
    {
      icon: GithubLogo,
      label: t('contact.github'),
      value: '@alexrodriguez',
      href: 'https://github.com',
      color: 'hover:text-accent'
    },
    {
      icon: LinkedinLogo,
      label: t('contact.linkedin'),
      value: 'Alex Rodriguez',
      href: 'https://linkedin.com',
      color: 'hover:text-accent'
    },
    {
      icon: TwitterLogo,
      label: t('contact.twitter'),
      value: '@alexdev',
      href: 'https://twitter.com',
      color: 'hover:text-accent'
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon size={28} weight="duotone" className={`text-accent transition-colors ${method.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg mb-1">{method.label}</h3>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              )
            })}
          </div>

          <Separator className="my-12" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            <p>{t('contact.footer')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
