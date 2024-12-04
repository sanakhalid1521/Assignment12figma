import React from 'react';
import Image from 'next/image';
import Apple from '../public/Apple.png';
import microsoft from '../public/Microsoft.png';
import slacktechnology from '../public/Slack_Technologies_Logo 1.png';
import google from '../public/Google.png';

const Sponsors = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Sponsors</h2>
        <div className="flex justify-between items-center space-x-8">
          <div className="w-auto p-4">
            <Image src={Apple} alt="Sponsor 1" width={100} height={50} className="object-contain w-[55.47px] h-[68px]" />
          </div>
          <div className="w-auto p-4">
            <Image src={microsoft} alt="Sponsor 2" width={100} height={50} className="object-contain w-[287px] h-[62px]" />
          </div>
          <div className="w-auto p-4">
            <Image src={slacktechnology} alt="Sponsor 3" width={100} height={100} className="w-[280px] h-[71px]" />
          </div>
          <div className="w-auto p-4">
            <Image src={google} alt="Sponsor 4" width={100} height={100} className="w-[211px] h-[68px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
