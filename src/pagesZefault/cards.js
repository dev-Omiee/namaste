import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Image from 'next/image';

// import ReadMore from '../pagesSections/storiesData'

import { data } from './cardsData';

export default function templates() {
  return (
    <div className='pb-20 pt-15 bg-grad-4'>
      <div className='spacer-x'>
        <div className='max-w'>

          <div className=''>
            <div className='border-none gr-text-1 tw-2 pt-14'>
              <Card.Body className='text-center bg-none pb-15 gb-text-3'>
                <div className='landing-text text-grad'>
                  Our Programs
                </div>
              </Card.Body>
            </div>
            <div className='border-none'>
              <Card.Body className='text-center bg-none tw-3 gr-text-2'>
                <div className='text-grad'>
                  Elevate Your Skills, Transform Your Future
                </div>
              </Card.Body>
            </div>
          </div>


          <div>
            <Row xs={1} md={3} className="g-4 pt-20">
              {
                data.map((data, keys) => {
                  return (
                    <Col key={keys} className=''>
                      <Card className='social-card hov-shadow bg-grad-4'>
                        <Card className='bg-grad-4' style={{ width: '7rem' }}>
                          <Image priority={true} variant="top" src={data.src} alt="card-img" className='w-auto h-auto pt-12' />
                        </Card>
                        <Card.Body className='pt-0'>

                          <Card.Title className='villa-name text-grad pt-13 pb-11'>
                            <b>{data.content}</b>
                          </Card.Title>

                          {/* <Card.Text className='card-link text-grad'>
                            {data.content}
                          </Card.Text> */}

                          <Card.Text className='pe-12'>
                            {data.summary}
                          </Card.Text>

                          {/* <ReadMore /> */}

                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
          </div>        

        </div>



      </div>
    </div>
  )
}
