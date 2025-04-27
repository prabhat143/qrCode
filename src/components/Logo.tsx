import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-[200px] aspect-square flex items-center justify-center">
        <img 
          src="https://www.isthara.com/assets/website/images/home/img/logo/istharalogo.svg"
          alt="Isthara Logo" 
          className="w-full h-auto"
        />
      </div>
      <p className="text-center text-white/90 text-xl mt-6">Multi Brand dinner</p>
    </div>
  );
};

export default Logo;