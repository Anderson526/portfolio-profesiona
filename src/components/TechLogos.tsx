import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
}

export const ReactLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <motion.ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      style={{ transformOrigin: "center" }}
      animate={{ rotate: -360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      transform="rotate(60 12 12)"
    />
    <motion.ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      transform="rotate(-60 12 12)"
    />
  </motion.svg>
)

export const TypeScriptLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="2"
      fill="currentColor"
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
    />
    <motion.path
      d="M9 16V10H11V16H9Z M10 9C9.45 9 9 8.55 9 8C9 7.45 9.45 7 10 7C10.55 7 11 7.45 11 8C11 8.55 10.55 9 10 9Z"
      fill="white"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M14 16C12.9 16 12 15.55 12 14.5V13.5H13.5V14.5C13.5 14.78 13.72 15 14 15H15C15.28 15 15.5 14.78 15.5 14.5C15.5 14.22 15.28 14 15 14H14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10H15C16.1 10 17 10.45 17 11.5V12.5H15.5V11.5C15.5 11.22 15.28 11 15 11H14C13.72 11 13.5 11.22 13.5 11.5C13.5 11.78 13.72 12 14 12H15C16.1 12 17 12.9 17 14C17 15.1 16.1 16 15 16H14Z"
      fill="white"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    />
  </motion.svg>
)

export const NextJsLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    whileHover={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 0.5 }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.path
      d="M10 8V16M14 8L18 16M14 11H18"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileHover={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  </motion.svg>
)

export const TailwindLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ y: [-2, 2, -2] }}
    transition={{ duration: 0.6, repeat: 3 }}
  >
    <motion.path
      d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.67 11.81 9.23 12.41 9.84C13.48 10.93 14.72 12.17 17 12.17C19.67 12.17 21.33 10.84 22 8.17C21 9.5 19.83 10 18.5 9.67C17.74 9.5 17.19 8.94 16.59 8.33C15.52 7.24 14.28 6 12 6Z"
      fill="currentColor"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M7 12.17C4.33 12.17 2.67 13.5 2 16.17C3 14.84 4.17 14.34 5.5 14.67C6.26 14.84 6.81 15.4 7.41 16.01C8.48 17.1 9.72 18.34 12 18.34C14.67 18.34 16.33 17.01 17 14.34C16 15.67 14.83 16.17 13.5 15.84C12.74 15.67 12.19 15.11 11.59 14.5C10.52 13.41 9.28 12.17 7 12.17Z"
      fill="currentColor"
      animate={{ x: [0, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
)

export const ThreeJsLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.6 }}
    style={{ transformStyle: "preserve-3d" }}
  >
    <motion.path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      fill="currentColor"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M2 17L12 22L22 17V7L12 12V22"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
)

export const VueLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
    transition={{ duration: 0.5 }}
  >
    <motion.path
      d="M12 3L2 21H22L12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.2"
      animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M12 3L7 11L12 19L17 11L12 3Z"
      fill="currentColor"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
  </motion.svg>
)

export const NodeJsLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    <motion.path
      d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.3"
      animate={{ fillOpacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="currentColor"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
)

export const PythonLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M12 2C9 2 8 3 8 5V8H12V9H6C4 9 2 10 2 13C2 16 4 17 6 17H8V14C8 12 10 10 12 10H16C18 10 19 9 19 7V5C19 3 18 2 15 2H12Z"
      fill="currentColor"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M12 22C15 22 16 21 16 19V16H12V15H18C20 15 22 14 22 11C22 8 20 7 18 7H16V10C16 12 14 14 12 14H8C6 14 5 15 5 17V19C5 21 6 22 9 22H12Z"
      fill="currentColor"
      fillOpacity="0.7"
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.circle
      cx="10"
      cy="5"
      r="1"
      fill="white"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="14"
      cy="19"
      r="1"
      fill="white"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
  </motion.svg>
)

export const GraphQLLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1 }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle cx="12" cy="5" r="1.5" fill="currentColor" />
    <motion.circle cx="17.5" cy="8.5" r="1.5" fill="currentColor" />
    <motion.circle cx="17.5" cy="15.5" r="1.5" fill="currentColor" />
    <motion.circle cx="12" cy="19" r="1.5" fill="currentColor" />
    <motion.circle cx="6.5" cy="15.5" r="1.5" fill="currentColor" />
    <motion.circle cx="6.5" cy="8.5" r="1.5" fill="currentColor" />
    <motion.path
      d="M12 5L17.5 8.5M17.5 8.5L17.5 15.5M17.5 15.5L12 19M12 19L6.5 15.5M6.5 15.5L6.5 8.5M6.5 8.5L12 5"
      stroke="currentColor"
      strokeWidth="1.5"
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </motion.svg>
)

export const PostgreSQLLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ y: [0, -5, 0] }}
    transition={{ duration: 0.5 }}
  >
    <motion.path
      d="M12 2C10 2 8 3 7 5C6 7 6 9 6 11V16C6 18 7 20 9 21C10 21.5 11 22 12 22C13 22 14 21.5 15 21C17 20 18 18 18 16V11C18 9 18 7 17 5C16 3 14 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.2"
      animate={{ fillOpacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.ellipse
      cx="12"
      cy="8"
      rx="6"
      ry="2.5"
      fill="currentColor"
      animate={{ scaleX: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
)

export const MongoDBLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    whileHover={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 0.6 }}
  >
    <motion.path
      d="M12 3C11.5 3 11 3.5 10.5 4.5C10 5.5 9.5 7 9 9C8.5 11 8 13.5 8 16C8 18.5 9 20.5 11 21.5C11.5 21.8 12 22 12 22C12 22 12.5 21.8 13 21.5C15 20.5 16 18.5 16 16C16 13.5 15.5 11 15 9C14.5 7 14 5.5 13.5 4.5C13 3.5 12.5 3 12 3Z"
      fill="currentColor"
      animate={{ scaleY: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.ellipse
      cx="12"
      cy="16"
      rx="5"
      ry="3"
      fill="currentColor"
      fillOpacity="0.5"
      animate={{ scaleX: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
)

export const RedisLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ scale: 1.1 }}
  >
    <motion.ellipse
      cx="12"
      cy="8"
      rx="8"
      ry="3"
      fill="currentColor"
      animate={{ scaleX: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="3"
      fill="currentColor"
      fillOpacity="0.7"
      animate={{ scaleX: [1.1, 1, 1.1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.ellipse
      cx="12"
      cy="16"
      rx="8"
      ry="3"
      fill="currentColor"
      fillOpacity="0.5"
      animate={{ scaleX: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
)

export const MySQLLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: [0, 5, -5, 0] }}
  >
    <motion.path
      d="M12 2C10 2 8 2.5 6.5 3.5C5 4.5 4 6 4 8V12C4 14 5 15.5 6.5 16.5C8 17.5 10 18 12 18C14 18 16 17.5 17.5 16.5C19 15.5 20 14 20 12V8C20 6 19 4.5 17.5 3.5C16 2.5 14 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.2"
      animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.circle
      cx="9"
      cy="10"
      r="1.5"
      fill="currentColor"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="15"
      cy="10"
      r="1.5"
      fill="currentColor"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
)

export const DockerLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ y: [0, -3, 0] }}
    transition={{ duration: 0.5 }}
  >
    <motion.rect x="6" y="10" width="3" height="3" fill="currentColor" />
    <motion.rect x="10" y="10" width="3" height="3" fill="currentColor" />
    <motion.rect x="14" y="10" width="3" height="3" fill="currentColor" />
    <motion.rect x="10" y="6" width="3" height="3" fill="currentColor" />
    <motion.rect x="14" y="6" width="3" height="3" fill="currentColor" />
    <motion.path
      d="M20 13C20 13 21 13 21 12C21 11 20 11 20 11C19 11 19 10 19 10H3C3 10 3 11 2 11C1 11 1 12 1 12C1 13 2 13 2 13H3C3 15 5 17 7 17H17C19 17 21 15 21 13H20Z"
      fill="currentColor"
      fillOpacity="0.5"
      animate={{ scaleY: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
)

export const AWSLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ scale: 1.1 }}
  >
    <motion.path
      d="M6 10L12 7L18 10L12 13L6 10Z"
      fill="currentColor"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M6 14L12 11V17L6 20V14Z"
      fill="currentColor"
      fillOpacity="0.7"
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
    />
    <motion.path
      d="M18 14V20L12 17V11L18 14Z"
      fill="currentColor"
      fillOpacity="0.5"
      animate={{ y: [0, 2, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
    />
  </motion.svg>
)

export const GitLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: [0, 180, 360] }}
    transition={{ duration: 0.8 }}
  >
    <motion.rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="2"
      transform="rotate(45 12 12)"
      fill="currentColor"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      fill="white"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
)

export const KubernetesLogo = ({ className }: LogoProps) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 1.5 }}
  >
    <motion.path
      d="M12 3L19 7.5V16.5L12 21L5 16.5V7.5L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.2"
      animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="currentColor"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle cx="12" cy="7" r="1" fill="currentColor" />
    <motion.circle cx="16" cy="10" r="1" fill="currentColor" />
    <motion.circle cx="16" cy="14" r="1" fill="currentColor" />
    <motion.circle cx="12" cy="17" r="1" fill="currentColor" />
    <motion.circle cx="8" cy="14" r="1" fill="currentColor" />
    <motion.circle cx="8" cy="10" r="1" fill="currentColor" />
  </motion.svg>
)
