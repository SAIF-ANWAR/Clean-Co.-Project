import React, { useEffect } from 'react';
import img from '../../assets/image/bucketgirl.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Landing = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div class="hero h-screen lg:h-[62vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >Best Quality</p>
                        <h1 data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={img} data-aos="fade-left" data-aos-duration="1000" class="h-full" alt='' />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mx-auto mt-[-48px] bg-base-200 relative z-20 shadow-lg p-10 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>

    );
};

export default Landing;