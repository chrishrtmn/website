import { motion } from 'framer-motion'

import SVGIcon from '../svg-icons'
//import { SignPersonal } from '../svg-signs'

import { stagger, fadeInUp } from '../../utilities/motions'

import { Interests, Software, Hardware } from '../../data/personal'

export default function Personal() {
  return (
    <motion.section
      initial='initial'
      animate='animate'
      className='mt-8 md:mt-16'
    >
      <div className='flex items-center content-between mb-6'>
        <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
          Up-Close &amp; Personal
        </h2>
        {/*<SignPersonal />*/}
      </div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon
          name='emoji-happy'
          className='inline-block w-4 h-6 mb-1 mr-2'
        />
        Interests
      </h3>
      <motion.div variants={stagger}>
        {Interests.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='chart-pie' className='inline-block w-4 h-6 mb-1 mr-2' />
        Software
      </h3>
      <motion.div variants={stagger}>
        {Software.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon name='chip' className='inline-block w-4 h-6 mb-1 mr-2' />
        Hardware
      </h3>
      <motion.div variants={stagger}>
        {Hardware.map((value, index) => {
          return (
            <motion.span key={index} className='pill' variants={fadeInUp}>
              {value}
            </motion.span>
          )
        })}
      </motion.div>

      <h3 className='mt-8 mb-1 text-gray-800 text-md'>
        <SVGIcon
          name='external-link'
          className='inline-block w-4 h-6 mb-1 mr-2'
        />
        Profiles
      </h3>
      <motion.div variants={stagger}>
        <a
          href='http://github.com/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.span className='pill' variants={fadeInUp}>
            Github
          </motion.span>
        </a>
        <a
          href='http://linkedin.com/in/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.span className='pill' variants={fadeInUp}>
            LinkedIn
          </motion.span>
        </a>
        <a
          href='http://twitter.com/chrishrtmn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <motion.span className='pill' variants={fadeInUp}>
            Twitter
          </motion.span>
        </a>
      </motion.div>

      <div className='mt-16 text-xs italic text-center text-gray-500'>
        Site is a work in progress. Made using React with Next.js, styled with
        Tailwind CSS, and hosted on Vercel.
      </div>
    </motion.section>
  )
}
