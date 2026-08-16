import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MagnifyingGlass, 
  Funnel, 
  SortAscending, 
  GithubLogo, 
  Globe, 
  Folder,
  ArrowLeft
} from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ProjectCard } from './ProjectCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/hooks/use-language'
import icontecWebsite from '@/img/projectsimg/icontecwebsite.png'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl?: string
}

type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a'

interface AllProjectsPageProps {
  onClose: () => void
}

export function AllProjectsPage({ onClose }: AllProjectsPageProps) {
  const [projects, setProjects] = useKV<Project[]>('portfolio-projects', [])
  
  const SAMPLE_PROJECTS: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform for Icontec',
      description: 'A modern, full-featured online marketplace with real-time inventory and payment processing.',
      longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing with Stripe, advanced search and filtering, order tracking, and an admin dashboard.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://tienda.icontec.org/',
      imageUrl: icontecWebsite
    }
  ]

  useEffect(() => {
    if (!projects || projects.length === 0) {
      setProjects(SAMPLE_PROJECTS)
    }
  }, [projects, setProjects])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { t } = useLanguage()

  const allTechnologies = useMemo(() => {
    if (!projects) return []
    const techSet = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [projects])

  const filteredAndSortedProjects = useMemo(() => {
    if (!projects) return []
    
    let filtered = [...projects]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.longDescription.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      )
    }

    if (selectedTech) {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTech)
      )
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return Number(b.id) - Number(a.id)
        case 'oldest':
          return Number(a.id) - Number(b.id)
        case 'a-z':
          return a.title.localeCompare(b.title)
        case 'z-a':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

    return filtered
  }, [projects, searchQuery, selectedTech, sortBy])

  const projectCount = filteredAndSortedProjects.length
  const totalCount = projects?.length || 0

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
                    <Folder size={36} className="text-accent" weight="duotone" />
                    {t('projects.allProjectsTitle')}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('projects.showingResults', {
                      count: projectCount,
                      total: totalCount,
                      projects: projectCount === 1 ? t('projects.project') : t('projects.projects')
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
              <div className="relative">
                <MagnifyingGlass 
                  size={20} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                />
                <Input
                  placeholder={t('projects.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SortAscending size={18} className="mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t('projects.sortNewest')}</SelectItem>
                  <SelectItem value="oldest">{t('projects.sortOldest')}</SelectItem>
                  <SelectItem value="a-z">{t('projects.sortAZ')}</SelectItem>
                  <SelectItem value="z-a">{t('projects.sortZA')}</SelectItem>
                </SelectContent>
              </Select>

              {(searchQuery || selectedTech) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTech(null)
                  }}
                  className="border-accent/50 hover:bg-accent/10"
                >
                  {t('projects.clearFilters')}
                </Button>
              )}
            </div>

            {allTechnologies.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Funnel size={16} />
                  <span>{t('projects.filterByTech')}:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={selectedTech === null ? 'default' : 'outline'}
                    className={`cursor-pointer transition-all ${
                      selectedTech === null 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'hover:bg-accent/10 hover:border-accent'
                    }`}
                    onClick={() => setSelectedTech(null)}
                  >
                    {t('projects.allTechnologies')}
                  </Badge>
                  {allTechnologies.map((tech) => {
                    const techCount = projects?.filter(p => p.technologies.includes(tech)).length || 0
                    return (
                      <Badge
                        key={tech}
                        variant={selectedTech === tech ? 'default' : 'outline'}
                        className={`cursor-pointer transition-all ${
                          selectedTech === tech 
                            ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                            : 'hover:bg-accent/10 hover:border-accent'
                        }`}
                        onClick={() => setSelectedTech(tech)}
                      >
                        {tech} <span className="ml-1 text-xs opacity-70">({techCount})</span>
                      </Badge>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {filteredAndSortedProjects.length === 0 ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Folder size={64} className="text-muted-foreground mx-auto mb-4" weight="duotone" />
              <p className="text-xl text-muted-foreground mb-4">
                {totalCount === 0 ? t('projects.noProjects') : t('projects.noResults')}
              </p>
              {totalCount > 0 && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTech(null)
                  }}
                  className="border-accent/50 hover:bg-accent/10"
                >
                  {t('projects.clearFilters')}
                </Button>
              )}
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredAndSortedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

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
    </div>
  )
}

// Using shared ProjectCard component
