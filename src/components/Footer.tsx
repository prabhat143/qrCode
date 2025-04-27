import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-auto pb-6">
      <a 
        href="https://www.isthara.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-black/80 hover:text-black transition-colors text-lg"
      >
        www.isthara.com
      </a>
    </div>
  );
};

export default Footer;