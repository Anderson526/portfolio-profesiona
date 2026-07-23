import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { GithubLogo, Globe, Folder } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useKV } from '@github/spark/hooks'

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

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern, full-featured online marketplace with real-time inventory and payment processing.',
    longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing with Stripe, advanced search and filtering, order tracking, and an admin dashboard. The platform handles thousands of concurrent users with optimized performance and caching strategies.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization platform with machine learning insights and predictive analytics.',
    longDescription: 'Developed an advanced analytics dashboard that processes millions of data points in real-time. Integrated machine learning models for predictive analytics, anomaly detection, and trend forecasting. Features interactive charts, customizable widgets, and automated reporting capabilities.',
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '3',
    title: 'Collaborative Workspace Tool',
    description: 'Team collaboration platform with real-time editing, video conferencing, and project management.',
    longDescription: 'Created a comprehensive collaboration tool that combines real-time document editing, video conferencing, task management, and team chat. Implemented operational transformation for conflict-free collaborative editing and WebRTC for peer-to-peer communication.',
    technologies: ['React', 'WebSocket', 'WebRTC', 'Node.js', 'MongoDB', 'Redis', 'Electron', 'GraphQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '4',
    title: '3D Product Configurator',
    description: 'Interactive 3D visualization tool for customizing products with real-time rendering.',
    longDescription: 'Built an immersive 3D product configurator using Three.js and WebGL. Users can customize materials, colors, and components in real-time with photorealistic rendering. Integrated with e-commerce backend for seamless purchasing of customized products.',
    technologies: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Blender', 'Node.js', 'AWS S3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '5',
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with telemedicine and electronic health records.',
    longDescription: 'Developed a secure healthcare platform featuring patient portals, appointment scheduling, telemedicine video consultations, electronic health records, and prescription management. Implemented end-to-end encryption and audit logging for HIPAA compliance.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'FHIR', 'Docker', 'AWS', 'OAuth 2.0'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '6',
    title: 'Blockchain NFT Marketplace',
    description: 'Decentralized marketplace for creating, buying, and selling NFTs with smart contracts.',
    longDescription: 'Built a full-stack NFT marketplace on Ethereum blockchain. Features include minting NFTs, auction mechanisms, wallet integration, royalty distribution, and IPFS storage for digital assets. Implemented smart contracts with comprehensive testing and security audits.',
    technologies: ['React', 'Solidity', 'Ethereum', 'Web3.js', 'IPFS', 'Hardhat', 'TypeScript', 'The Graph'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projects, setProjects] = useKV<Project[]>('portfolio-projects', [])
  
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
                Featured Projects
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
                <p className="text-xl text-muted-foreground">No projects yet. Check back soon!</p>
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
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">About This Project</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
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
                    View Code
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-accent/50 hover:bg-accent/10"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <Globe size={20} weight="fill" className="mr-2" />
                    Live Demo
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

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  onClick: () => void
}

function ProjectCard({ project, index, isInView, onClick }: ProjectCardProps) {
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
        <div className="h-48 bg-gradient-to-br from-primary via-accent/20 to-secondary overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder size={64} className="text-accent/40 group-hover:text-accent/60 transition-colors" weight="duotone" />
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="group-hover:text-accent transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
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
            Code
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
            Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
