import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

type CountdownProps = {
  targetDate: Date;
  inView: boolean;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate, inView }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [inView]);

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center space-x-0 sm:space-x-12 gap-4 sm:gap-6 text-center">
      <div className="flex-1 min-w-[70px]">
        <p className="text-3xl sm:text-4xl font-bold text-[#F97316]">{timeLeft.days}</p>
        <p className="text-gray-600 font-medium text-sm sm:text-base">Days</p>
      </div>
      <div className="flex-1 min-w-[70px]">
        <p className="text-3xl sm:text-4xl font-bold text-[#F97316]">{timeLeft.hours}</p>
        <p className="text-gray-600 font-medium text-sm sm:text-base">Hours</p>
      </div>
      <div className="flex-1 min-w-[70px]">
        <p className="text-3xl sm:text-4xl font-bold text-[#F97316]">{timeLeft.minutes}</p>
        <p className="text-gray-600 font-medium text-sm sm:text-base">Minutes</p>
      </div>
      <div className="flex-1 min-w-[70px]">
        <p className="text-3xl sm:text-4xl font-bold text-[#F97316]">{timeLeft.seconds}</p>
        <p className="text-gray-600 font-medium text-sm sm:text-base">Seconds</p>
      </div>
    </div>
  );
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-orange-100/50 to-white overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-bg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-bg"></div>
      </div>

      <div className="section-container relative z-10 w-full px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Pwani Innovation</span>
                <span className="block text-[#F97316] mt-1 sm:mt-2">Week 2025</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-700 mt-3 sm:mt-6">
                Pwani Re-imagined: Youth Agency, Innovation and Sustainability of Coastal Economies
              </p>

              <p className="text-sm sm:text-lg md:text-xl text-[#F97316] font-medium mt-2 sm:mt-4">
                27th - 31st October 2025 • Swahilipot Hub Foundation, Mombasa, Kenya
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              {/*<a
                href="#tickets"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold flex items-center gap-2 transition-colors duration-300 justify-center"
              >
                Register Now <ArrowRight size={20} />
              </a>*/}

              <a
                href="#about"
                className="border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            <div ref={ref} className="pt-6 sm:pt-8 border-t border-orange-200">
              <div className="flex flex-col items-center justify-center">
                <Countdown targetDate={new Date('2025-10-27T00:00:00Z')} inView={inView} />
                <p className="mt-3 sm:mt-4 text-gray-600 font-medium text-base sm:text-lg text-center">
                  Until Pwani Innovation Week 2025
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/30 rounded-2xl animate-pulse blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="People collaborating at innovation event"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
