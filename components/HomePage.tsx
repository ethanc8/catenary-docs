import { Feature, Features } from '@components/features'
import { FaDiscord, FaGithub } from 'react-icons/fa'


const DICTIONARY = {
  en: {
    welcome: 'Welcome to the Catenary Docs!',
    maps: {
      title: <>Get started with <span className='underline decoration-seashore'>Maps</span></>,
      description: 'Get information on transit vehicles around you, plan trips, and discover communities with Catenary Maps!'
    },
    contribute: {
      title: <><span className='underline decoration-seashore'>Contribute</span> to Catenary</>,
      description: 'Catenary is a community-driven project that cares about its developers. Learn how to get involved and how we&apos;re here for you.'
    },
    api: {
      title: <>Building with our <span className='underline decoration-seashore'>Public API</span></>,
      description: 'Harness the power of Catenary Maps to create your own awesome apps and tools!'
    },
    github: 'Explore Catenary projects and code on GitHub \u2192',
    discord: 'Chat with our community and get help on Discord \u2192',
    headerImage: <>Header image: Christine Nguyen, <i>Long Beach</i></>
  },
  fr: {
    welcome: 'Bienvenue sur la documentation Catenary !',
    maps: {
      title: <>Commencer avec <span className='underline decoration-seashore'>Maps</span></>,
      description: 'Obtenez des informations sur les véhicules de transport en commun autour de vous, planifiez des trajets et découvrez des communautés avec Catenary Maps !'
    },
    contribute: {
      title: <><span className='underline decoration-seashore'>Contribuer</span> à Catenary</>,
      description: 'Catenary est un projet communautaire qui prend soin de ses développeurs. Apprenez comment vous impliquer et comment nous sommes là pour vous.'
    },
    api: {
      title: <>Construire avec notre <span className='underline decoration-seashore'>API publique</span></>,
      description: 'Exploitez la puissance de Catenary Maps pour créer vos propres applications et outils géniaux !'
    },
    github: 'Explorez les projets et le code Catenary sur GitHub \u2192',
    discord: 'Discutez avec notre communauté et obtenez de l\'aide sur Discord \u2192',
    headerImage: <>Image d&apos;en-tête : Christine Nguyen, <i>Long Beach</i></>
  }
}

export function HomeSection({ locale = 'en' }: { locale?: 'en' | 'fr' }) {
  const t = DICTIONARY[locale] || DICTIONARY.en

  return <div className="home-content">
    <div className="content-container md:px-[20vw] text-center">
      <h1 className="!text-4xl lg:!text-6xl inline-block mt-8 subtitle lg:py-[30px]">
        <span className="leading-[3rem] md:leading-[3.5rem] font-semibold">
          {t.welcome}
        </span>
      </h1>
    </div>
    <div className="features-container">
      <div className="content-container">
        <Features>
          <Feature large={false} index={1} href={'/guide'}>
            <h3 className='mb-2 !text-2xl'>{t.maps.title}</h3>
            <p className='text-xl'>{t.maps.description}</p>
          </Feature>
          <Feature large={false} index={2} href={'/contributing'}>
            <h3 className='mb-2 !text-2xl'>{t.contribute.title}</h3>
            <p className='text-xl'>{t.contribute.description}</p>
          </Feature>
          <Feature large={false} index={3} href={'/publicapi'}>
            <h3 className='mb-2 !text-2xl'>{t.api.title}</h3>
            <p className='text-xl'>{t.api.description}</p>
          </Feature>
        </Features>
        <div className='my-6 mx-2 text-center font-medium text-xl'>
          <a href='https://github.com/catenarytransit' className='!no-underline'><FaGithub className='inline mr-2' /> {t.github}</a>
          <br className='my-1 inline-block' />
          <a href='https://discord.gg/yVV6dguwtq' className='!no-underline'><FaDiscord className='inline mr-2' /> {t.discord}</a>
          <br className='py-3 inline-block' />
          <p className='text-sm pt-2'>{t.headerImage}</p>
        </div>
      </div>
    </div>
    {/* more content would go here */}
  </div>
}
