import dynamic from 'next/dynamic'

export const Intro = dynamic(() => import('./Intro'))
export const FeatureProject = dynamic(() => import('./FeatureProject'))
export const Description = dynamic(() => import('./Description'))
export const Production = dynamic(() => import('./Production'))
export const Minting = dynamic(() => import('./Minting'))
export const Design = dynamic(() => import('./Designs'))
export const Audience = dynamic(() => import('./Audience'))
export const Structure = dynamic(() => import('./Structure'))
export const Requirements = dynamic(() => import('./Requirements'))
export const RoadMap = dynamic(() => import('./RoadMap'))
export const Launches = dynamic(() => import('./Launches'))
export const Faq = dynamic(() => import('./Faq'))
export const Contact = dynamic(() => import('./Contact'))



/*
export {default as Intro} from './Intro'
export {default as FeatureProject} from './FeatureProject'
export {default as Description} from './Description'
export {default as Production} from './Production'
export {default as Minting} from './Minting'
export {default as Design} from './Designs'
export {default as Audience} from './Audience'
export {default as Structure} from './Structure'
export {default as Requirements} from './Requirements'
export {default as RoadMap} from './RoadMap'
export {default as Launches} from './Launches'
export {default as Faq} from './Faq'
export {default as Contact } from './Contact'*/