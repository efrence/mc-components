import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '../../components/HeaderLoggedOut'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'
import TileOverlay from '../../components/TileOverlay'
import TileCaption from '../../components/TileCaption'
import AnimationHandler from '../../components/AnimationHandler'
import HoverHandler from '../../components/HoverHandler'
import ResponsiveHandler from '../../components/ResponsiveHandler'

import Facebook from '../../components/Icons/Facebook'
import Twitter from '../../components/Icons/Twitter'
import Instagram from '../../components/Icons/Instagram'
import ChevronLeft from '../../components/Icons/ChevronLeft'
import ChevronRight from '../../components/Icons/ChevronRight'


const items = [
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    instructor: 'Ron Howard',
    class: 'Directing',
  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/332/original/1477793873-wh-tile.jpg%3F1477793873',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/331/original/1495558129-hero-wh-v3.jpg%3F1495558129',
    instructor: 'Werner Herzog',
    class: 'Filmmaking',

  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/628/original/1493844712-DVF_SlideThumb_V1_A.jpg%3F1493844712',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/627/original/1495558421-hero-dvf-v3.jpg%3F1495558421',
    instructor: 'Diane Von Furstenberg',
    class: 'Building a Fashion Brand',
  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/354/original/1479173180-DM5_SlideThumb_V2_A_%25281%2529.jpg%3F1479173180',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/561/original/1489515027-DM5_CM_Hero_V1_A.jpg%3F1489515027',
    instructor: 'deadmau5',
    class: 'Electronic Music Production',
  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/867/original/1508818886-SLJ_SlideThumb_V2_A.jpg%3F1508818886',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/866/original/1508818329-SLJ_class_hero_no_gradient.jpg%3F1508818329',
    instructor: 'Samuel L. Jackson',
    class: 'Acting',
  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/1087/original/1510618603-Slide_Thumb.jpg%3F1510618603',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1070/original/1510618084-Class_Hero.jpg%3F1510618084',
    instructor: 'Thomas Keller',
    class: 'Cooking Techniques',
  },
  {
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/428/original/1481770014-SR_SlideThumb_V1_B.jpg%3F1481770014',
    image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/429/original/1495558277-hero-sr-v3.jpg%3F1495558277',
    instructor: 'Shonda Rhimes',
    class: 'Writing for Television',
  },
]


storiesOf('playground|Pages', module)
  .add('Home', () =>
    <div>
      <Header />

      <div className='mc-hero'>
        <ResponsiveHandler>
          {({ gteLG }) =>
            <Carousel transition='fade' loop>
              {items.map((item, key) => (
                <div key={key} className='container'>
                  <Tile
                    key={key}
                    aspectRatio={gteLG ? '16x9' : '4x3'}
                    naked
                  >
                    <Tile
                      className='mc-hero__image'
                      aspectRatio={gteLG ? '16x9' : '4x3'}
                      naked
                    >
                      <TileImage imageUrl={item.image} />
                      <TileOverlay type='offset-spotlight' />
                    </Tile>

                    <div className='mc-hero__content'>
                      <div className='row row--fill align-items-center'>
                        <div className='col-xl-5 col-lg-6 col-md-8'>
                          <h2 className='mc-text-d1 mc-text--uppercase mc-text-center mc-text-md-left'>
                            {item.instructor}
                          </h2>
                          <h3 className='mc-text-h3 mc-text--muted mc-text-center mc-text-md-left'>
                            Teaches {item.class}
                          </h3>
                          <br />
                          <p className='mc-text-intro mc-text-center mc-text-md-left'>
                            Online classes taught by the world&apos;s greatest
                            minds.<br /> Learn from {item.instructor} and all
                            35+ other instructors.
                          </p>
                          <br />
                          <div className='row'>
                            <div className='col-md-6'>
                              <Button primary fullWidth>
                                All Access Pass
                              </Button>
                            </div>
                            <div className='col-md-6'>
                              <Button secondary fullWidth>
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tile>
                </div>
              ))}
            </Carousel>
          }
        </ResponsiveHandler>
      </div>

      <div className='container'>
        <Carousel className='row'
          centered
          controls
          fadeEdges
          loop
        >
          {items.map((item, key) => (
            <div key={key} className='col-auto'>
              <Tile key={item.id}>
                <TileImage imageUrl={item.thumbnail} />
              </Tile>
            </div>
          ))}
        </Carousel>
      </div>

      <div className='container'>
        <div className='mc-section'>
          <div className='mc-section__header'>
            <h2 className='mc-text-h3 mc-text-center'>
              MasterClass In The News
            </h2>
          </div>

          <div className='row'>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/today-4d4e4dfc0db7fa08e4e18e4b0ae9f8598e674c0de4f3349d9b74f02138604276.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/nbc-e43bb6ae09ed3b16c8e6509a76ed454e7cb9289c3723288a84d4b31e34785222.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/new_york_times-8e2107a8c7cb51f1ea6dff352bbe21ad7c414e2348b2fa88b0c506b5ddc80ed9.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/billboard-afafead87dedb11a8a2c8684e2a9714dc4add1f508b91ea5ad06789197e6e8ee.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/espn-2aca223117c3e92562149a240ff5dab1619562b8de78ed05cae0ce69c50afae8.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/vanity_fair-cdfde3c2628fa297d4bba5cf9aaa5786cc0f0fb8c66a593bb5da88afe407ec99.svg' />
            </div>
          </div>
        </div>
      </div>

      <div className='mc-background--dark'>
        <div className='container'>
          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                Now Available
              </h2>
            </div>

            <div className='row'>
              <div className='col-12'>
                <ResponsiveHandler>
                  {({ ltMD }) =>
                    <HoverHandler>
                      {({ hovering }) =>
                        <Tile aspectRatio={ltMD ? '16x9' : '519x187'}>
                          <AnimationHandler type='ken-burns' animating={hovering}>
                            <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1473/original/1520466687-Featured_Tile.jpg%3F1520466687' />
                          </AnimationHandler>

                          <TileOverlay />

                          <AnimationHandler type='lift' animating={hovering}>
                            <TileCaption
                              title='Malcom Gladwell'
                              subtitle='Teaches Writing'
                            />
                          </AnimationHandler>
                        </Tile>
                      }
                    </HoverHandler>
                  }
                </ResponsiveHandler>
              </div>

              <div className='col-md-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1049/original/1510617187-Class_Tile.jpg%3F1510617187' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Alice Waters'
                          subtitle='Teaches the Art of Home Cooking'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-md-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/343/original/1513219465-Class_Tile.jpg%3F1513219465' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Annie Leibovitz'
                          subtitle='Teaches Photography'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>
            </div>
          </div>

          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                What Students Are Saying
              </h2>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <div className='mc-card mc-card--equal-height mc-background--light mc-text--invert'>
                  <div className='row align-items-center small-gutters'>
                    <div className='col col-auto'>
                      <img width='56' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-al-300e6379265c09b2f4b659df27a10cace702dd3beb031af97178f4f1b683adc3.png' />
                    </div>
                    <div className='col'>
                      <h4 className='mc-text-h4'>Annie Leibovitz</h4>
                      <h5 className='mc-text-h5 mc-text--muted'>Photography</h5>
                    </div>

                    <div className='col-12'>
                      <p>
                        Annie&apos;s MasterClass offered insight into her
                        approach, but also offered the permission to create,
                        create, create! And with a tenacity I had been afraid
                        to embody.
                      </p>
                    </div>

                    <div className='col-auto'>
                      <img src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png' />
                    </div>
                    <div className='col'>
                      <p className='mc-text--muted'>Jesse L.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='mc-card mc-card--equal-height mc-background--light mc-text--invert'>
                  <div className='row align-items-center small-gutters'>
                    <div className='col col-auto'>
                      <img width='56' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-gr-24c1d9b59bbeadd671a0ef5140e137d07e26368f5b0984a0b90fe5f794700de0.png' />
                    </div>
                    <div className='col'>
                      <h4 className='mc-text-h4'>Gordon Ramsay</h4>
                      <h5 className='mc-text-h5 mc-text--muted'>Cooking</h5>
                    </div>

                    <div className='col-12'>
                      <p>
                        I loved this class, I learned to create rather than
                        follow recipes and how to think outside the box!
                        I&apos;ve always loved cooking, this class has taken me
                        to a new level!
                      </p>
                    </div>

                    <div className='col-auto'>
                      <img src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png' />
                    </div>
                    <div className='col'>
                      <p className='mc-text--muted'>Pamela E.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='mc-card mc-card--equal-height mc-background--light mc-text--invert'>
                  <div className='row align-items-center small-gutters'>
                    <div className='col col-auto'>
                      <img width='56' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/instructor-jp-cde7e157ed95191ad3167e5dea00394798decee7462fc897d71ac6e450cd8b79.png' />
                    </div>
                    <div className='col'>
                      <h4 className='mc-text-h4'>James Patterson</h4>
                      <h5 className='mc-text-h5 mc-text--muted'>Writing</h5>
                    </div>

                    <div className='col-12'>
                      <p>
                        These classes are the important keys to unlocking our
                        written creativity. If you have belief, freedom and
                        discipline, then who knows what the future will hold.
                      </p>
                    </div>

                    <div className='col-auto'>
                      <img src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/stars/user-al-9f00247416a322eee5fcefe147d2c9172a018cda43240ab2bdb383fa84100db7.png' />
                    </div>
                    <div className='col'>
                      <p className='mc-text--muted'>Jean-Paul W.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                Now Available
              </h2>
            </div>

            <div className='row'>
              <div className='col-12'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='519x187'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1532/original/1521243500-Featured_Tile.jpg%3F1521243500' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Spike Lee'
                          subtitle='Teaches Filmmaking'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-md-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1689/original/1528446991-Class_Tile.jpg%3F1528446991' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Daniel Negreanu'
                          subtitle='Teaches Poker'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-md-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1752/original/1530892888-Class_Tile.jpg%3F1530892888' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Margaret Atwood'
                          subtitle='Teaches Creative Writing'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>
            </div>
          </div>

          <div className='mc-section'>
            <div className='row align-items-center'>
              <div className='col-lg-4'>
                <div className='mc-section__header'>
                  <h2 className='mc-text-h1 mc-text-center mc-text-lg-left'>
                    Instructor Announcements
                  </h2>
                  <p className='mc-text-center mc-text-lg-left mc-text--muted'>
                    Learn from the world’s greatest minds.
                  </p>
                  <br />

                  <div className='row small-gutters justify-content-center justify-content-lg-start'>
                    <div className='col-auto'>
                      <ChevronLeft className='mc-icon--7x mc-icon--circled mc-text--muted' />
                    </div>

                    <div className='col-auto'>
                      <ChevronRight className='mc-icon--7x mc-icon--circled' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='mc-card mc-background--light mc-text--invert'>
                          <div className='row align-items-center small-gutters'>
                            <div className='col col-auto'>
                              <img width='56' src='https://d3e9iqx18mbphw.cloudfront.net/images/1429/original/1518557721-Slide_Thumb.jpg?1518557721' />
                            </div>
                            <div className='col'>
                              <h4 className='mc-text-h4'>
                                Malcom Gladwell
                              </h4>
                              <h5 className='mc-text-h5 mc-text--muted'>
                                @Gladwell
                              </h5>
                            </div>

                            <div className='col-12'>
                              <p>
                                If my books aren&apos;t enough for you,
                                I&apos;ve done a really fun writing seminar!
                                <br />
                                <a href='#' className='mc-text--twitter'>
                                  @MasterClass
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-12'>
                        <div className='mc-card mc-background--light mc-text--invert'>
                          <div className='row align-items-center small-gutters'>
                            <div className='col col-auto'>
                              <img width='56' src='https://d3e9iqx18mbphw.cloudfront.net/images/1194/original/1512075998-Slide_Thumb.jpg?1512075998' />
                            </div>
                            <div className='col'>
                              <h4 className='mc-text-h4'>
                                Armin Van Buuren
                              </h4>
                              <h5 className='mc-text-h5 mc-text--muted'>
                                @arminvanbuuren
                              </h5>
                            </div>

                            <div className='col-12'>
                              <p>
                                My
                                <a href='#' className='mc-text--twitter'>
                                  @masterclass
                                </a>
                                is now live! So proud to be able to share
                                everything I know about dance music with you.
                                Join me in the studio:
                                <a href='#' className='mc-text--twitter'>
                                  http://www.masterclass.com/avb
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='mc-card mc-card--equal-height mc-background--light mc-text--invert'>
                      <div className='row align-items-center small-gutters'>
                        <div className='col col-auto'>
                          <img width='56' src='https://d3e9iqx18mbphw.cloudfront.net/images/528/original/1488402263-1488323293-SM_SlideThumb_V1_A.jpg?1488402263' />
                        </div>
                        <div className='col'>
                          <h4 className='mc-text-h4'>
                            Steve Martin
                          </h4>
                        </div>

                        <div className='col-12'>
                          <img src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/instructor-announcements/steve-martin-7ff79ae2d7ec7677b76aa0dfe1c51b47c8b54d6065d330be11c49388e68624ad.jpg' />
                          <p>
                            I&apos;m told people are signing up in droves (a car
                            made in the 30s) for my
                            <a href='#' className='mc-text--twitter'>
                              MasterClass
                            </a>
                            in comedy. For the aspiring comedian, writer, or
                            future world leader.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='mc-section'>
          <div className='mc-section__header'>
            <h4 className='mc-text-h4 mc-text-center mc-text--muted'>
              Stay up to date with MasterClass
            </h4>
          </div>

          <div className='row justify-content-center'>
            <div className='col-auto'>
              <Twitter className='mc-icon--15x mc-icon--circled mc-text--muted' />
            </div>
            <div className='col-auto'>
              <Facebook className='mc-icon--15x mc-icon--circled mc-text--muted' />
            </div>
            <div className='col-auto'>
              <Instagram className='mc-icon--15x mc-icon--circled mc-text--muted' />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>,
  )
