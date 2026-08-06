import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, FilePdf, ArrowLeft } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/hooks/use-language'

interface CertificateItem {
  id: string
  title: string
  year: string
  link: string
  imageUrl?: string
}

interface AllCertificationsPageProps {
  onClose: () => void
}

const SAMPLE_CERTS: CertificateItem[] = [
  {
    id: 'c-1',
    title: 'Full-Stack Web Development - Coursera',
    year: '2024',
    link: 'https://example.com/certificate/1',
    imageUrl: 'https://placehold.co/800x480?text=Cert+1'
  }
]

export function AllCertificationsPage({ onClose }: AllCertificationsPageProps) {
  const [certs, setCerts] = useKV<CertificateItem[]>('portfolio-certificates', [])
  const [projects] = useKV<any[]>('portfolio-projects', [])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null)
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
  }, [certs, setCerts, projects])

  const filtered = useMemo(() => {
    if (!certs) return []
    const q = searchQuery.toLowerCase()
    return certs.filter(c => c.title.toLowerCase().includes(q) || c.year.includes(q))
  }, [certs, searchQuery])

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      <div className="relative min-h-screen">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-accent/10 hover:text-accent"
                >
                  <ArrowLeft size={24} />
                </Button>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                    <FilePdf size={36} className="text-accent" weight="duotone" />
                    {t('certifications.allCertificatesTitle')}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">{filtered.length} {t('certifications.title')}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="relative">
                <Input
                  placeholder={t('projects.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FilePdf size={64} className="text-muted-foreground mx-auto mb-4" weight="duotone" />
              <p className="text-xl text-muted-foreground">{t('certifications.noCerts')}</p>
            </div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((cert, index) => (
                  <motion.div key={cert.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2, delay: index * 0.04 }}>
                    <Card className="h-full bg-card border-border cursor-pointer" onClick={() => setSelectedCert(cert)}>
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
                          {t('certifications.viewCertificate')}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
            {selectedCert && (
              <>
                {selectedCert.imageUrl && (
                  <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                    <img src={selectedCert.imageUrl} alt={selectedCert.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">{selectedCert.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base mt-2">{selectedCert.year}</DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                  <Button onClick={() => window.open(selectedCert.link, '_blank')}>{t('certifications.viewCertificate')}</Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
