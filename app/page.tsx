'use client';

import HeadTags from './components/HeadTags';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
    <HeadTags />
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <Hero />
            </div>
            <FeaturedProducts />
            <Testimonials />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
}
