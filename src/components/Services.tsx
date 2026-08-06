import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Rocket, 
  ShoppingCart
} from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language'
import {
  ReactLogo,
  TypeScriptLogo,
  NextJsLogo,
  TailwindLogo,
  ThreeJsLogo,
  VueLogo,
  NodeJsLogo,
  PythonLogo,
  GraphQLLogo,
  PostgreSQLLogo,
  MongoDBLogo,
  RedisLogo,
  MySQLLogo,
  DockerLogo,
  AWSLogo,
  GitLogo,
  KubernetesLogo,
  PhpLogo,
  WordPressLogo
} from '@/components/TechLogos'

const services = [
  {
    icon: Code,
    titleKey: 'services.webDev.title',
    descriptionKey: 'services.webDev.description',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Rocket,
    titleKey: 'services.landing.title',
    descriptionKey: 'services.landing.description',
    gradient: 'from-purple-500/20 via-pink-500/20 to-purple-500/20',
    iconColor: 'text-pink-400'
  },
  {
    icon: ShoppingCart,
    titleKey: 'services.ecommerce.title',
    descriptionKey: 'services.ecommerce.description',
    gradient: 'from-green-500/20 via-emerald-500/20 to-green-500/20',
    iconColor: 'text-emerald-400'
  }
]

interface Technology {
  name: string
  icon: React.ComponentType<any>
  color: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

const technologies: Technology[] = [
  { name: 'React', icon: ReactLogo, color: 'from-cyan-400 to-blue-500', category: 'frontend' },
  { name: 'TypeScript', icon: TypeScriptLogo, color: 'from-blue-500 to-blue-600', category: 'frontend' },
  { name: 'Next.js', icon: NextJsLogo, color: 'from-gray-700 to-gray-900', category: 'frontend' },
  { name: 'Tailwind', icon: TailwindLogo, color: 'from-cyan-400 to-blue-400', category: 'frontend' },
  { name: 'Three.js', icon: ThreeJsLogo, color: 'from-gray-600 to-gray-800', category: 'frontend' },
  { name: 'Vue.js', icon: VueLogo, color: 'from-green-500 to-teal-500', category: 'frontend' },
  { name: 'WordPress', icon: WordPressLogo, color: 'from-blue-500 to-blue-700', category: 'frontend' },
  
  { name: 'Node.js', icon: NodeJsLogo, color: 'from-green-500 to-green-700', category: 'backend' },
  { name: 'Python', icon: PythonLogo, color: 'from-blue-400 to-yellow-400', category: 'backend' },
  { name: 'GraphQL', icon: GraphQLLogo, color: 'from-pink-500 to-purple-500', category: 'backend' },
  { name: 'PHP', icon: PhpLogo, color: 'from-blue-500 to-blue-700', category: 'backend' },
  
  { name: 'PostgreSQL', icon: PostgreSQLLogo, color: 'from-blue-500 to-blue-700', category: 'database' },
  { name: 'MongoDB', icon: MongoDBLogo, color: 'from-green-500 to-green-700', category: 'database' },
  { name: 'Redis', icon: RedisLogo, color: 'from-red-500 to-red-700', category: 'database' },
  { name: 'MySQL', icon: MySQLLogo, color: 'from-orange-500 to-blue-500', category: 'database' },
  
  { name: 'Docker', icon: DockerLogo, color: 'from-blue-500 to-cyan-500', category: 'tools' },
  { name: 'AWS', icon: AWSLogo, color: 'from-orange-500 to-yellow-500', category: 'tools' },
  { name: 'Git', icon: GitLogo, color: 'from-orange-600 to-red-600', category: 'tools' },
  { name: 'Kubernetes', icon: KubernetesLogo, color: 'from-blue-600 to-purple-600', category: 'tools' }


]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const techByCategory = {
    frontend: technologies.filter(t => t.category === 'frontend'),
    backend: technologies.filter(t => t.category === 'backend'),
    database: technologies.filter(t => t.category === 'database'),
    tools: technologies.filter(t => t.category === 'tools')
  }

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4" 
              style={{ letterSpacing: '-0.01em' }}
            >
              {t('services.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t('services.subtitle')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-card border-border hover:border-accent/50 transition-all group overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} weight="duotone" className={service.iconColor} />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                        {t(service.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <CardDescription className="text-base leading-relaxed">
                        {t(service.descriptionKey)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-12"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              {t('services.techStackTitle')}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { key: 'frontend', label: t('services.frontend'), techs: techByCategory.frontend },
                { key: 'backend', label: t('services.backend'), techs: techByCategory.backend },
                { key: 'database', label: t('services.database'), techs: techByCategory.database },
                { key: 'tools', label: t('services.tools'), techs: techByCategory.tools }
              ].map((category, catIndex) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + catIndex * 0.1, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold text-accent flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {category.label}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.techs.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.9 + catIndex * 0.1 + techIndex * 0.05, duration: 0.4 }}
                        >
                          <Badge 
                            variant="secondary"
                            className="text-sm px-4 py-2 bg-card border border-border hover:border-accent/50 transition-all cursor-pointer group relative overflow-hidden"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                            <div className="flex items-center gap-2 relative z-10">
                              <TechIcon className={`w-5 h-5 text-accent`} />
                              <span className="font-medium">{tech.name}</span>
                            </div>
                          </Badge>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
