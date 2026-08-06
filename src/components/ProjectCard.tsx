import { motion } from 'framer-motion'
import { GithubLogo, Globe, Folder } from '@phosphor-icons/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
  isInView?: boolean
  onClick: () => void
}

export function ProjectCard({ project, index, isInView = true, onClick }: ProjectCardProps) {
  const { t } = useLanguage()
  const localizedTitle = t(`projectsData.${project.id}.title`) || project.title
  const localizedDescription = t(`projectsData.${project.id}.description`) || project.description
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card 
        className="h-full bg-card border-border hover:border-accent/50 transition-all cursor-pointer group overflow-hidden"
        onClick={onClick}
      >
        <div className="h-48 overflow-hidden relative bg-muted">
          {project.imageUrl ? (
            <>
              <img src={project.imageUrl} alt={localizedTitle} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
            </>
          ) : (
            <div className="h-48 bg-gradient-to-br from-primary via-accent/20 to-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Folder size={64} className="text-accent/40 group-hover:text-accent/60 transition-colors" weight="duotone" />
              </div>
            </div>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="group-hover:text-accent transition-colors">
            {localizedTitle}
          </CardTitle>
          <CardDescription>{localizedDescription}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="bg-primary/10 border border-accent/20 text-foreground text-xs"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge 
                variant="secondary"
                className="bg-primary/10 border border-accent/20 text-foreground text-xs"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="flex-1 hover:bg-accent/10 hover:text-accent"
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.githubUrl, '_blank')
            }}
          >
            <GithubLogo size={16} weight="fill" className="mr-2" />
            {t('projects.code')}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="flex-1 hover:bg-accent/10 hover:text-accent"
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.liveUrl, '_blank')
            }}
          >
            <Globe size={16} weight="fill" className="mr-2" />
            {t('projects.demo')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
