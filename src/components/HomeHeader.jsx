import React from 'react';
import { Link } from 'react-router';
import { Compass } from 'lucide-react';
import Button from './common/Button';

function HomeHeader() {
  return (
    <header className="w-full bg-sand-50 border-b border-sand-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">

        {/* Left Section: Logo & Explore */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight text-[#3b322c]">
            ClassRoom
          </Link>
          <div className="hidden sm:block">
            <Button 
              to="/explore" 
              variant="outline" 
              size="sm"
              leftIcon={<Compass className="w-4 h-4 text-sand-300" />}
            >
              Explore
            </Button>
          </div>
        </div>

        {/* Center Section: Search placeholder */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="w-full relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-white/80 border border-sand-200 rounded-full py-1.5 px-4 text-sm text-[#3b322c] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-sand-300 focus:bg-white focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="sm:hidden">
            <Button 
              to="/explore" 
              variant="outline" 
              size="sm"
            >
              Explore
            </Button>
          </div>

          <Link
            to="/profile"
            className="cursor-pointer p-1.5 sm:p-2 rounded-full hover:bg-sand-100 transition-colors"
            aria-label="User Profile"
          >
            {/* Profile Avatar / Placeholder */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sand-200 text-[#3b322c] flex items-center justify-center font-medium text-xs sm:text-sm">
              U
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default HomeHeader;