import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Plus, Pencil, Trash, X, FloppyDisk, Eye, EyeSlash, LockKey, MagnifyingGlass, Funnel } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
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

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [projects, setProjects] = useKV<Project[]>('portfolio-projects', [])
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState<{ isOwner: boolean } | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    technologies: '',
    githubUrl: '',
    liveUrl: '',
    imageUrl: ''
  })

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await window.spark.user()
        setUser(currentUser)
        if (currentUser && currentUser.isOwner) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Error checking user:', error)
      }
    }
    checkUser()
  }, [])

  const allTechnologies = useMemo(() => {
    if (!projects) return []
    const techSet = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (!projects) return []
    
    let filtered = projects

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

    return filtered
  }, [projects, searchQuery, selectedTech])

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setPassword('')
      toast.success('Welcome to Admin Panel')
    } else {
      toast.error('Invalid password')
    }
  }

  const handleAddProject = () => {
    setEditingProject(null)
    setIsEditing(true)
    setFormData({
      title: '',
      description: '',
      longDescription: '',
      technologies: '',
      githubUrl: '',
      liveUrl: '',
      imageUrl: ''
    })
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setIsEditing(true)
    setFormData({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      technologies: project.technologies.join(', '),
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      imageUrl: project.imageUrl || ''
    })
  }

  const handleDeleteProject = (projectId: string) => {
    setProjects((currentProjects) => (currentProjects || []).filter(p => p.id !== projectId))
    toast.success('Project deleted successfully')
  }

  const handleSaveProject = () => {
    if (!formData.title || !formData.description) {
      toast.error('Title and description are required')
      return
    }

    const newProject: Project = {
      id: editingProject?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      longDescription: formData.longDescription,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t),
      githubUrl: formData.githubUrl,
      liveUrl: formData.liveUrl,
      imageUrl: formData.imageUrl
    }

    if (editingProject) {
      setProjects((currentProjects) => 
        (currentProjects || []).map(p => p.id === editingProject.id ? newProject : p)
      )
      toast.success('Project updated successfully')
    } else {
      setProjects((currentProjects) => [...(currentProjects || []), newProject])
      toast.success('Project added successfully')
    }

    setIsEditing(false)
    setEditingProject(null)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditingProject(null)
  }

  if (!isOpen) return null

  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <LockKey size={28} className="text-accent" weight="duotone" />
              Admin Access
            </DialogTitle>
            <DialogDescription>
              {user?.isOwner 
                ? 'You are authenticated as the owner' 
                : 'Enter password to access admin panel'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {!user?.isOwner && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                      placeholder="Enter admin password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <Button 
                  onClick={handleLogin} 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden bg-card border-border flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Project Management</DialogTitle>
          <DialogDescription>
            Add, edit, or delete portfolio projects
            {projects && projects.length > 0 && (
              <span className="ml-2 text-accent">
                ({filteredProjects.length} of {projects.length} {projects.length === 1 ? 'project' : 'projects'})
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        {!isEditing ? (
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <Button 
              onClick={handleAddProject}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Plus size={20} weight="bold" className="mr-2" />
              Add New Project
            </Button>

            {projects && projects.length > 0 && (
              <div className="space-y-3">
                <div className="relative">
                  <MagnifyingGlass 
                    size={18} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                  />
                  <Input
                    placeholder="Search projects by title, description, or technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {allTechnologies.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Funnel size={16} />
                      <span>Filter by technology:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={selectedTech === null ? 'default' : 'outline'}
                        className={`cursor-pointer transition-colors ${
                          selectedTech === null 
                            ? 'bg-accent text-accent-foreground' 
                            : 'hover:bg-accent/10'
                        }`}
                        onClick={() => setSelectedTech(null)}
                      >
                        All
                      </Badge>
                      {allTechnologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant={selectedTech === tech ? 'default' : 'outline'}
                          className={`cursor-pointer transition-colors ${
                            selectedTech === tech 
                              ? 'bg-accent text-accent-foreground' 
                              : 'hover:bg-accent/10'
                          }`}
                          onClick={() => setSelectedTech(tech)}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {projects && projects.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>No projects yet. Add your first project!</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>No projects match your search criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTech(null)
                  }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="bg-card/50 border-border hover:border-accent/30 transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {project.description}
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditProject(project)}
                              className="hover:bg-accent/10 hover:text-accent"
                            >
                              <Pencil size={18} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteProject(project.id)}
                              className="hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Trash size={18} />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 border border-accent/20 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Project Title *</Label>
                  <Input
                    id="project-title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="E-Commerce Platform"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Short Description *</Label>
                  <Textarea
                    id="project-description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="A brief description shown on project cards"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-long-description">Detailed Description</Label>
                  <Textarea
                    id="project-long-description"
                    value={formData.longDescription}
                    onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                    placeholder="A detailed description shown in the project modal"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-technologies">Technologies (comma-separated)</Label>
                  <Input
                    id="project-technologies"
                    value={formData.technologies}
                    onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                    placeholder="React, TypeScript, Node.js, PostgreSQL"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-github">GitHub URL</Label>
                    <Input
                      id="project-github"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-live">Live Demo URL</Label>
                    <Input
                      id="project-live"
                      value={formData.liveUrl}
                      onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-image">Image URL (optional)</Label>
                  <Input
                    id="project-image"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://example.com/image.png"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  onClick={handleSaveProject}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <FloppyDisk size={20} weight="fill" className="mr-2" />
                  {editingProject ? 'Update Project' : 'Create Project'}
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted"
                >
                  <X size={20} weight="bold" className="mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
