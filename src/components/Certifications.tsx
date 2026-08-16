import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Certificate, FilePdf } from '@phosphor-icons/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/hooks/use-language'
import { DEFAULT_CERTIFICATES, type CertificateItem } from '@/lib/certificates'

interface CertificationsProps {
  onShowAllCertificates?: () => void
}

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
}

export function Certifications({ onShowAllCertificates }: CertificationsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [certs, setCerts] = useKV<CertificateItem[]>('portfolio-certificates', [])
  const { t } = useLanguage()

  useEffect(() => {
    if (!certs || certs.length === 0) {
      setCerts(DEFAULT_CERTIFICATES)
    }
  }, [certs, setCerts])

  const parseCertificateDate = (issued: string) => {
    const [month, year] = issued.split(' ')
    const monthIndex = monthMap[month] ?? 0
    return new Date(Number(year), monthIndex, 1)
  }

  const certsList = useMemo(() => {
    if (!certs || certs.length === 0) return []

    return [...certs]
      .sort((a, b) => {
        const aDate = parseCertificateDate(a.issued)
        const bDate = parseCertificateDate(b.issued)
        return bDate.getTime() - aDate.getTime()
      })
      .slice(0, 3)
  }, [certs])

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
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certsList.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full bg-card border-border overflow-hidden">
                      {cert.imageUrl ? (
                        <div className="flex items-center justify-center h-20 border-b border-border bg-background/40 px-4">
                          <img src={cert.imageUrl} alt={cert.issuer} className="max-h-10 max-w-[140px] object-contain" />
                        </div>
                      ) : (
                        <div className="px-6 pt-6">
                          <Badge variant="secondary" className="text-[10px] uppercase tracking-[0.12em]">
                            {cert.issuer}
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="space-y-3 pt-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                          <span className="text-xs text-muted-foreground">{cert.issued}</span>
                        </div>
                        <CardTitle className="text-lg leading-snug">{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {cert.credentialId && (
                          <p className="text-xs text-muted-foreground break-all">
                            ID: <span className="font-mono text-foreground">{cert.credentialId}</span>
                          </p>
                        )}
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

              <div className="mt-10 flex justify-center">
                <Button
                  onClick={onShowAllCertificates}
                  className="px-6 py-3 rounded-full border border-accent/30 bg-accent/10 text-accent hover:bg-accent hover:text-background"
                >
                  {t('certifications.viewAllCertificates')}
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
