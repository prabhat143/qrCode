import React from 'react';
import Header from './Header';
import Logo from './Logo';
import StoreButtons from './StoreButtons';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900">
      {/* App content - full width with centered elements */}
      <div className="w-full min-h-screen bg-gradient-to-b from-[#4A5F67] via-[#8A6976] to-[#D68B93] flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-screen-md mx-auto text-center">
          <Header />
          <div className="my-8">
            <Logo />
          </div>
          <div className="my-8">
            <StoreButtons />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;