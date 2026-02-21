import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import MyButton from '../pagesSections/myButton';
import Images from '../components/images.jsx';

// Assets
import Img2 from '../../public/gpm/grp2.jpg';
import Img1 from '../../public/gpm/cover.jpg';

import LandingImg from '../../public/gpm/gpm logo.jpeg';

function GridExample() {
  return (
    <>
      <Head>
        <title>About Us | Ghar Par Mehfil</title>
      </Head>

      <div className='pms-all gr-shadow-bottom bg-default'>
        <div className='pms-landing-page gr-shadow-top'>
          <div className='bg-white gr-shadow-bottom'>
            <div className='spacer-x'>
              <div className='max-w'>

                {/* Landing Section */}
                <Row xs={1} md={1} xl={2} className="g-0 reverse-content pt-on-1200px-2 pb-on-1200px align-items-center">
                  <Col className='g-0 animate-cross-left-r'>
                    <Card className='bg-white border-0'>
                      <Card className='bg-white border-0 pt-13 pb-13 upperCase'>
                        Apne log. apni mehfil...
                      </Card>
                      <Card className='border-0'>
                        <h1 className='bg-white pb-13 landing-text text-grad'>
                          A Cosy Event
                          <br />
                          Like Never Before
                        </h1>
                      </Card>
                      <Card className='bg-white border-0 pb-14 landing-sub-text pe-4'>
                        Welcome to Ghar Par Mehfil, an intimate evening of shayari, music, and shared silences. Set within the comfort of a home, this mehfil is crafted for those who seek soulful conversations, gentle melodies, and a cozy escape from the outside world.
                      </Card>
                      <Card className='bg-white border-0 pb-14'>
                        <Link href="/contact" className='w-fit-content'>
                          <MyButton title="Book Your Spot Now!" />
                        </Link>
                      </Card>
                    </Card>
                  </Col>

                  <Col className="g-0 animate-cross-right-r d-flex justify-content-center">
                    <div className="image-container-circle">
                      <Image
                        src={LandingImg}
                        alt="Ghar Par Mehfil Logo"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="responsive-img"
                      />
                    </div>
                  </Col>
                </Row>

                {/* About Text Section */}
                <div className='pt-20 pt-15 animate-bottom'>
                  <div className='border-none'>
                    <Card.Body className='text-center bg-none'>
                      <div className='landing-text text-grad'>
                        About The Event
                      </div>
                    </Card.Body>
                  </div>

                  <div className='border-none gr-text-2 tw-2 pt-15'>
                    <Card.Body className='text-center bg-none'>
                      <div className='title-sub-text '>
                        A Cozy Night of Art, Music, and Conversations.
                      </div>
                    </Card.Body>
                  </div>
                </div>

                <div className='border-none gr-text-2 tw-2 max-w m-auto pt-15'>
                  <Card.Body className='text-center bg-none'>
                    <div className='landing-sub-text'>
                      Ghar Par Mehfil is a celebration of togetherness, art, and human connection. Born from the idea that the most meaningful moments happen at home, our mehfil brings people together for evenings of poetry, music, stories, and shared silences.

                      Set in a cozy, home-like space, Ghar Par Mehfil is designed for those who seek depth over noise—where words are felt, music is lived,
                      <br />
                      and every guest feels like they belong.
                    </div>
                  </Card.Body>
                </div>

                <div className='border-none gr-text-2 tw-2 pt-15 pb-12'>
                  <Card.Body className='text-center bg-none'>
                    <div className='title-text text-grad'>
                      GPM - 1st Event
                    </div>
                  </Card.Body>
                </div>

                {/* Bottom Circular Image */}
                <div className='pt-12 pb-15 d-flex justify-content-center'>
                  <div className="image-container-circle">
                    <Image
                      src={Img2}
                      alt="Event Cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="responsive-img"
                    />
                  </div>
                </div>

                <div className='border-none gr-text-2 tw-2 max-w m-auto'>
                  <Card.Body className='text-center bg-none'>
                    <div className='landing-sub-text'>
                      Our first event was a huge success—we were overbooked, and the audience went wild over the performances. Many first-time performers took the stage, sharing their art and feeling the energy of a space where creativity is alive and slowly shaping into a family.

                      Come as you are. Sit close. Listen deeply.
                      This is where art feels at home.
                    </div>
                  </Card.Body>
                </div>


                <div className='border-none gr-text-2 tw-2 pt-15 pb-12'>
                  <Card.Body className='text-center bg-none'>
                    <div className='title-text text-grad'>
                      GPM - 2nd Event
                    </div>
                  </Card.Body>
                </div>

                {/* Bottom Circular Image */}
                <div className='pt-12 pb-15 d-flex justify-content-center'>
                  <div className="image-container-circle">
                    <Image
                      src={Img1}
                      alt="Event Cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="responsive-img"
                    />
                  </div>
                </div>

                <div className='border-none gr-text-2 tw-2 max-w m-auto pb-20'>
                  <Card.Body className='text-center bg-none'>
                    <div className='landing-sub-text'>
                      Ghar Par Mehfil is where hearts meet, words flow, and music comes alive. Our first gathering was so warmly received that we experienced overbooking, and by the second event, 50% of our attendees were new faces, bringing fresh energy and stories.

                      The highlight of our evenings has always been the music jamming sessions, where melodies merge with laughter, creating moments that linger long after the night ends. Every mehfil is a celebration of art, connection, and the joy of simply being together.
                    </div>
                  </Card.Body>
                </div>

                <Images />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridExample;