import React from 'react';
import Image from 'next/image';
import workManagementImage from '../public/workmanagment.png';

const WorkManagement = () => {
  return (
    <div className="flex flex-col items-center w-full py-16 px-8 bg-white gap-16">
      {/* Section 1: Project Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1200px]">
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Project Management</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Get Started →
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center bg-[#C4DEFD]">
          {/* Placeholder or image goes here */}
        </div>
      </div>

      {/* Section 2: Work Together */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1200px]">
        {/* Image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={workManagementImage}
            alt="Work Together"
            width={350}
            height={330}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Work Together</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            With white space, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Try It Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
