// import './styles.css';
import CountUp, { useCountUp } from 'react-countup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { data } from '../pagesSections/socialProofData';

export default function SocialProof() {
    return (
        <div className='bg-default gr-shadow-bottom'>
            <div className='spacer-x'>
                <div className='max-w'>
                    <div className='text-center pt-15 pb-15'>
                        <CardGroup>
                            {
                                data.map((data, keys) => {
                                    return (
                                        <Card key={keys} className='bg-default'>
                                            <div className='gr-text-5 gb-text-3'>
                                                <CountUp end={data.end} enableScrollSpy />{data.text}
                                            </div>
                                            <div className='social-text'>
                                                {data.summary}
                                            </div>
                                        </Card>
                                    );
                                })
                            }
                        </CardGroup>
                    </div>
                </div >
            </div>
        </div>
    );
}