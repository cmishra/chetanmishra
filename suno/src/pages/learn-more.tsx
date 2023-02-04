import { ArrowPathIcon, ArrowsRightLeftIcon, ArrowTrendingUpIcon, QueueListIcon } from '@heroicons/react/24/outline'
import LandingNavBar from '../components/landingNavBar'
import LandingPageContainer from '../components/landingPageContainer'

const features = [
  {
    name: 'Start off slow',
    description:
      'We expose you initially to a smaller set of characters, expanding on it when you\'re ready',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Learn forwards and backwards',
    description:
      'Learn to map between sounds, phonetics, and characters in both directions',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Practice the sore spots',
    description:
      'We\'ll track the characters you may need more help with and help you repeat them more frequently',
    icon: ArrowPathIcon,
  },
  {
    name: 'No need for >200 flash cards',
    description:
      'We\'ll help you map each consonant with the different vowels and half-syllables so you are exposed to the full range of combinations',
    icon: QueueListIcon,
  },
]

export default function Landing() {
  return (
    <LandingPageContainer>
      <LandingNavBar />
      <main>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Learn faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to learn a new script
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Don't just rely on flashcards.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </LandingPageContainer>
  )
}
