import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-200 p-4 h-[446px] w-64  rounded-2xl">
      <div className="bg-gray-300 h-56 w-full rounded-md"></div>
      <div className="h-5 bg-gray-300 mt-10 rounded w-1/2 m-auto"></div>
      <div className="h-4 bg-gray-300 mt-6 rounded w-3/4 m-auto"></div>
      <div className="h-2 bg-gray-300 mt-6 rounded w-3/5 m-auto"></div>
      <div className="flex justify-between items-center mt-7">
        <div className="h-4 bg-gray-300 rounded w-1/3 "></div>
        <div className="h-8 bg-gray-300 rounded-2xl aspect-[4/1] "></div>
      </div>
    </div>
  );
};


export default SkeletonCard