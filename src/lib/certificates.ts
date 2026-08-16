import udemyLogo from '@/img/logos/udemy-logo-share.png'
import codigoFacilitoLogo from '@/img/logos/codigofacilito.png'
import googleLogo from '@/img/logos/Google-Logo.png'
import courseraLogo from '@/img/logos/coursera.webp'
import platziLogo from '@/img/logos/platzi-logo-huge.png'
import senaLogo from '@/img/logos/Sena_Colombia_logo.svg.webp'

export interface CertificateItem {
  id: string
  title: string
  issuer: string
  issued: string
  credentialId?: string
  link: string
  imageUrl?: string
}

export const DEFAULT_CERTIFICATES: CertificateItem[] = [
  {
    id: 'copilot-beginner-to-pro',
    title: 'GitHub Copilot Beginner to Pro - AI for Coding & Development',
    issuer: 'Udemy',
    issued: 'Aug 2026',
    credentialId: 'UC-d4efb136-8d81-488f-b40e-d9d2602e09c1',
    link: 'https://www.udemy.com/certificate/UC-d4efb136-8d81-488f-b40e-d9d2602e09c1/',
    imageUrl: udemyLogo
  },
  {
    id: 'prompt-engineering',
    title: 'Curso de ingeniería de prompts',
    issuer: 'Código Facilito',
    issued: 'Feb 2026',
    credentialId: '9962783b-6ff4-408e-b57d-d626fdde8c4f',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'nodejs-profesional',
    title: 'Curso profesional node js',
    issuer: 'Código Facilito',
    issued: 'Oct 2025',
    credentialId: '15cf7dca-e75a-45a7-9d40-3309ff79106b',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'db-profesional',
    title: 'Curso Profesional de Base de Datos',
    issuer: 'Código Facilito',
    issued: 'Nov 2024',
    credentialId: 'b4559155-83af-4ff2-aa2f-4efdc5e06e71',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials',
    issuer: 'Google',
    issued: 'Aug 2024',
    credentialId: '993A4OBJ24OA',
    link: 'https://www.coursera.org/account/accomplishments/verify/993A4OBJ24OA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    imageUrl: googleLogo
  },
  {
    id: 'analisis-exploratorio-python',
    title: 'ANALISIS EXPLORATORIO DE DATOS EN PYTHON',
    issuer: 'Servicio Nacional de Aprendizaje (SENA)',
    issued: 'Dec 2023',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: senaLogo
  },
  {
    id: 'ux-low-fidelity',
    title: 'Crear esquemas de página y prototipos de baja fidelidad',
    issuer: 'Coursera',
    issued: 'Oct 2023',
    credentialId: 'Z7N48S4H84QY',
    link: 'https://www.coursera.org/account/accomplishments/verify/Z7N48S4H84QY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    imageUrl: courseraLogo
  },
  {
    id: 'ux-empathy',
    title: 'Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear',
    issuer: 'Coursera',
    issued: 'Aug 2023',
    credentialId: 'RMYXH9K99LRC',
    link: 'https://www.coursera.org/account/accomplishments/verify/RMYXH9K99LRC',
    imageUrl: courseraLogo
  },
  {
    id: 'ux-basic',
    title: 'Aspectos básicos del diseño de la experiencia del usuario',
    issuer: 'Coursera',
    issued: 'Jun 2023',
    credentialId: 'LPQT3UL6WSQY',
    link: 'https://www.coursera.org/account/accomplishments/verify/LPQT3UL6WSQY',
    imageUrl: courseraLogo
  },
  {
    id: 'git-github',
    title: 'Curso Profesional de Git y GitHub',
    issuer: 'Platzi',
    issued: 'Apr 2023',
    credentialId: '3d2011f4-0dec-4ade-9e97-9e96256664b5',
    link: 'https://platzi.com/p/1megaword1/curso/1557-git-github/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'javascript-practico',
    title: 'Curso Práctico de JavaScript',
    issuer: 'Platzi',
    issued: 'Mar 2023',
    credentialId: '98d65d7d-0f0c-4833-8b45-832c9861faf2',
    link: 'https://platzi.com/p/1megaword1/curso/3271-javascript-practico/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'web-accessibility',
    title: 'Audiocurso de Accesibilidad Web: Casos de Estudio',
    issuer: 'Platzi',
    issued: 'Mar 2023',
    credentialId: '90784a8f-b9f9-47bd-ad6c-4e9bc0b26973',
    link: 'https://platzi.com/p/1megaword1/curso/3240-accesibilidad-casos-estudio/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'frontend-developer',
    title: 'Curso de Frontend Developer',
    issuer: 'Platzi',
    issued: 'Mar 2023',
    credentialId: '0595999d-ce96-407b-b031-cffde3594217',
    link: 'https://platzi.com/p/1megaword1/curso/2467-frontend-developer/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'jquery-gratis',
    title: 'Curso Gratis de JQuery',
    issuer: 'Código Facilito',
    issued: 'Aug 2022',
    credentialId: 'b3ea02ed-a003-4211-b961-1c967a3df57e',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'css-fondo',
    title: 'Curso a Fondo CSS',
    issuer: 'Código Facilito',
    issued: 'Aug 2022',
    credentialId: 'b9b717ad-bae0-4bf0-b683-7d615b9a5b9a',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'desarrollo-web',
    title: 'Curso Profesional Desarrollo Web',
    issuer: 'Código Facilito',
    issued: 'Jul 2022',
    credentialId: 'fd246e16-800c-4e89-a5a2-3fdc57134825',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: codigoFacilitoLogo
  },
  {
    id: 'javascript-basico',
    title: 'Curso Básico de JavaScript',
    issuer: 'Platzi',
    issued: 'Jul 2021',
    credentialId: '7dde51d7-447a-4175-92fe-06a07ba1833c',
    link: 'https://www.linkedin.com/in/anderson-chila-36344923b/details/certifications/',
    imageUrl: platziLogo
  },
  {
    id: 'php-basico',
    title: 'Curso Básico de PHP: Arreglos, Funciones y Estructuras de Control',
    issuer: 'Platzi',
    issued: 'Oct 2022',
    credentialId: '455da7c8-fee5-48cf-a244-982619fe1aa3',
    link: 'https://platzi.com/p/1megaword1/curso/2794-php-arreglos-funciones/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'design-developers',
    title: 'Curso de Diseño para Developers',
    issuer: 'Platzi',
    issued: 'Jul 2021',
    credentialId: '85905eeb-abce-48b5-9736-2ed5d3334af9',
    link: 'https://platzi.com/p/1megaword1/curso/1906-diseno-programadores/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'figma',
    title: 'Curso de Figma',
    issuer: 'Platzi',
    issued: 'Oct 2022',
    credentialId: 'a1e45727-a2d0-41b4-8760-924229c1b540',
    link: 'https://platzi.com/p/1megaword1/curso/1961-figma/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'html-css',
    title: 'Curso Definitivo de HTML y CSS',
    issuer: 'Platzi',
    issued: 'Jun 2021',
    credentialId: '40bd9283-7c6a-4e3c-b9cc-7978ba5d3d36',
    link: 'https://platzi.com/p/1megaword1/curso/2008-html-css/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'terminal',
    title: 'Curso de Introducción a la Terminal y Línea de Comandos',
    issuer: 'Platzi',
    issued: 'Apr 2021',
    credentialId: 'd9d29c12-2b7d-412a-bad4-4a1a1279307c',
    link: 'https://platzi.com/p/1megaword1/curso/2292-terminal/diploma/detalle/',
    imageUrl: platziLogo
  },
  {
    id: 'php-practico',
    title: 'Curso Práctico de PHP',
    issuer: 'Platzi',
    issued: 'Nov 2022',
    credentialId: 'e4c614a9-ce47-49bc-9257-fb12a370aa2d',
    link: 'https://platzi.com/p/1megaword1/curso/2516-php-practico/diploma/detalle/',
    imageUrl: platziLogo
  }
]
