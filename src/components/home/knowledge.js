import { motion } from 'framer-motion'

import SVGIcon from '../svg-icons'
//import { SignKnowledge } from '../svg-signs'

import { stagger, fadeInUp } from '../../utilities/motions'

import { Dev, Design, Services, Principles } from '../../data/knowledge'

export default function SectionKnowledge() {
  return (
    <motion.section
      initial='initial'
      animate='animate'
      className='my-16 md:my-32'
    >
      <div className='flex items-center content-between mb-6'>
        <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
          Skills &amp; Knowledge
        </h2>
        {/*<SignKnowledge />*/}
      </div>

      <h3 className='mb-1 text-gray-800 text-md'>
        <SVGIcon name='code' className='inline-block w-4 h-6 mb-1 mr-2' />
        Development
      </h3>
      <motion.div variants={stagger}>
        {Dev.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='photograph' className='inline-block w-4 h-6 mb-1 mr-2' />
        Design
      </h3>
      <motion.div variants={stagger}>
        {Design.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon
          name='clipboard-check'
          className='inline-block w-4 h-6 mb-1 mr-2'
        />
        Services
      </h3>
      <motion.div variants={stagger}>
        {Services.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='scale' className='inline-block w-4 h-6 mb-1 mr-2' />
        Principles
      </h3>
      <motion.div variants={stagger}>
        {Principles.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>
    </motion.section>
  )
}
