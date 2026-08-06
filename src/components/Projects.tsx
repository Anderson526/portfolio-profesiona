import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { GithubLogo, Globe, Folder } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/hooks/use-language'
import { ProjectCard, Project as ProjectType } from './ProjectCard'

const SAMPLE_PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'E-Commerce Platform for Icontec',
    description: 'A modern, full-featured online marketplace with real-time inventory and payment processing.',
    longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing with Stripe, advanced search and filtering, order tracking, and an admin dashboard. The platform handles thousands of concurrent users with optimized performance and caching strategies.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://tienda.icontec.org/',
    imageUrl: 'https://placehold.co/800x480?text=Icontec'
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [projects, setProjects] = useKV<ProjectType[]>('portfolio-projects', [])
  const { t } = useLanguage()
  
  useEffect(() => {
    if (!projects || projects.length === 0) {
      setProjects(SAMPLE_PROJECTS)
    }
  }, [projects, setProjects])
  
  const projectsList = projects || []

  return (
    <>
      <section id="projects" ref={ref} className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-12">
              <Folder size={32} className="text-accent" weight="duotone" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ letterSpacing: '-0.01em' }}>
                {t('projects.title')}
              </h2>
            </div>

            {projectsList.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center py-20"
              >
                <Folder size={64} className="text-muted-foreground mx-auto mb-4" weight="duotone" />
                <p className="text-xl text-muted-foreground">{t('projects.noProjects')}</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isInView={isInView}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              {selectedProject.imageUrl && (
                <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                  <img
                    src={selectedProject.imageUrl}
                    alt={t(`projectsData.${selectedProject.id}.title`) || selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{t(`projectsData.${selectedProject.id}.title`) || selectedProject.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base mt-2">
                  {t(`projectsData.${selectedProject.id}.description`) || selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('projects.aboutProject')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`projectsData.${selectedProject.id}.longDescription`) || selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('projects.technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-primary/20 border border-accent/20 text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <GithubLogo size={20} weight="fill" className="mr-2" />
                    {t('projects.viewCode')}
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-accent/50 hover:bg-accent/10"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <Globe size={20} weight="fill" className="mr-2" />
                    {t('projects.liveDemo')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
