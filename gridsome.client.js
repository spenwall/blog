import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser, 
  faFolderOpen, 
  faBriefcase,
  faPencilRuler,
  faGraduationCap,
  faAddressCard,
  faFileAlt,
  faBars,
  faTimes,
  faEnvelope,
  faQuestion,
  faBlog,
 } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { resultKeyNameFromField } from 'apollo-utilities';

config.autoAddCss = false
library.add(
  faGithub, 
  faTwitter, 
  faLinkedin,
  faUser, 
  faFolderOpen,
  faBriefcase,
  faPencilRuler,
  faGraduationCap,
  faAddressCard,
  faFileAlt,
  faBars,
  faTimes,
  faEnvelope,
  faQuestion,
  faBlog,
  )

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}