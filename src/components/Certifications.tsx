import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Certificate, FilePdf } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/hooks/use-language'

interface CertificateItem {
  id: string
  title: string
  year: string
  link: string
  imageUrl?: string
}

const SAMPLE_CERTS: CertificateItem[] = [
  {
    id: '1',
    title: 'Full-Stack Web Development - Coursera',
    year: '2024',
    link: 'https://example.com/certificate/1',
    imageUrl: 'https://placehold.co/800x480?text=Cert+1'
  }
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [certs, setCerts] = useKV<CertificateItem[]>('portfolio-certificates', [])
  const [projects] = useKV<any[]>('portfolio-projects', [])
  const { t } = useLanguage()

  useEffect(() => {
    if (!certs || certs.length === 0) {
      if (projects && projects.length > 0) {
        const p = projects[0]
        const cloned: CertificateItem = {
          id: `c-${p.id}`,
          title: p.title || `Certificate ${p.id}`,
          year: new Date().getFullYear().toString(),
          link: p.liveUrl || p.githubUrl || '#',
          imageUrl: p.imageUrl || `https://placehold.co/800x480?text=Cert+${p.id}`
        }
        setCerts([cloned])
      } else {
        setCerts(SAMPLE_CERTS)
      }
    }
  }, [certs, setCerts])

  const certsList = certs || []

  return (
    <section id="certifications" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Certificate size={32} className="text-accent" weight="duotone" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ letterSpacing: '-0.01em' }}>
              {t('certifications.title')}
            </h2>
          </div>

          {certsList.length === 0 ? (
            <div className="text-center py-20">
              <FilePdf size={64} className="text-muted-foreground mx-auto mb-4" weight="duotone" />
              <p className="text-xl text-muted-foreground">{t('certifications.noCerts')}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certsList.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full bg-card border-border">
                    <div className="h-44 overflow-hidden rounded-t-md bg-muted">
                      {cert.imageUrl ? (
                        <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <FilePdf size={40} />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{cert.title}</CardTitle>
                      <CardDescription>{cert.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" onClick={() => window.open(cert.link, '_blank')}>
                        <FilePdf size={16} className="mr-2" />
                        {t('certifications.viewCertificate')}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
