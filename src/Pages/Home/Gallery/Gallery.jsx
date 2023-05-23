import React from 'react';

const Gallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
    "https://images.unsplash.com/photo-1582571352032-448f7928eca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=992&q=80",
    "https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
    "https://images.unsplash.com/photo-1549145159-2f1242ce0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",

    // Add more photo URLs as needed
  ];

  return (
    <div className='mb-10'>
      <div className='my-14 text-start md:text-center' data-aos="fade-up"
        data-aos-duration="1000">
        <h2 className='mb-5  text-2xl text-black font-semibold'>Robotick ToyZone</h2>
        <p className='mb-8 text-xl mt-9 '>You Will Find Your Best Robotics Toys Are Hopefully In Here.</p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            data-aos="zoom-out"
            data-aos-duration="500"
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="object-cover rounded w-full lg:h-[15rem] md:h-[12rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;