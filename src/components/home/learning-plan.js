export default function LearningPlan() {
  return (
    <section className='mt-8 md:mt-16'>
      <div className='flex items-center content-between mb-6'>
        <h2 className='flex-grow text-xl font-bold text-gray-800 md:text-2xl'>
          Learning Plan
        </h2>
      </div>

      <ul>
        <li>Continued: Stripe.js</li>
        <li>Storyblock</li>
        <li>Monorepos</li>
        <li>TypeScript</li>
        <li>Jest</li>
        <li>Serverless Functions</li>
        {/*<li className='line-through'>React.js</li>*/}
      </ul>
    </section>
  )
}
