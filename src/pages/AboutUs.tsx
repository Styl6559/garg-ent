import React from 'react';
import { Quote, Award, Users, Factory } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center" 
               style={{backgroundImage: "url('https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              10+ Years of Trusted Manufacturing
            </h1>
            <p className="text-lg text-gray-200">Building excellence in technical textiles since 2015</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <section className="bg-white py-12 lg:py-16 mb-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <Factory className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Founded in 2015, Garg Industries began its journey as a small manufacturing unit in Chikali with a vision to innovate and deliver quality in the technical textile industry. Over the years, consistent growth and commitment to excellence have transformed the company into a 44,500 sq. ft. state-of-the-art facility in Ambethan, Chakan, equipped with advanced infrastructure and modern quality systems.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-gray-50 py-12 lg:py-16 mb-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-600 p-3 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Today, a dedicated team of 40+ skilled professionals drives our operations, combining experience and innovation to serve diverse industry needs. Our journey reflects steady progress, resilience, and an enduring focus on building long-term partnerships.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ankit Garg" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Sankit</h3>
                <p className="text-gray-600">Founder</p>
              </div>
              <div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "For us, quality is not just a checkbox. It is the foundation of everything we do. Every package that leaves our facility carries our commitment to reliability and the trust our partners place in our company."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Co-founder Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ankit Garg" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Ankit</h3>
                <p className="text-gray-600">Co-founder</p>
              </div>
              <div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "Our journey has always been about pushing boundaries and redefining what's possible in textiles. To us, innovation means shaping solutions that are not only smarter and stronger but also sustainable for the industries of tomorrow."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ISO Certification */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Recognised with ISO 9001:2015</h3>
                <p className="text-gray-600">Quality Management System Certification</p>
              </div>
              <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">ISO</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">Stringent checks and advanced infrastructure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-600 text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Continuous research and development for future ready solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-purple-600 text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Customer satisfaction</h3>
                <p className="text-gray-600">Tailored support for long lasting business partnerships.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutUs;
