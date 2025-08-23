import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company History */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Company Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <span className="font-semibold">Garg Industries</span>, established in <span className="font-semibold">2017</span>, is a leading Manufacturer, Wholesaler, and Supplier of LDPE Granules, Shade Net, PVC Tarpaulin, Safety Net, and more. With a modern manufacturing unit in Chikhali, Pimpri Chinchwad, Pune, Maharashtra, we serve thousands of customers across India, providing reliable plastic solutions for agricultural and industrial sectors.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our company operates as a proprietorship under the leadership of CEO <span className="font-semibold">Sanket Garg</span>, with a dedicated team of 11 to 25 employees. We are committed to quality, innovation, and customer satisfaction, reflected in our <span className="font-semibold">ISO 9001:2015</span> and <span className="font-semibold">ISO 14001:2015</span> certifications. Our annual turnover ranges from ₹1.5 to ₹5 crore.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Garg Industries is recognized for its advanced manufacturing facilities, quality control laboratories, and 24/7 production capabilities. We pride ourselves on delivering high-quality products and building lasting relationships with our clients.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-40 h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/ZI/LU/TI/18484447/whatsapp-image-2022-04-26-at-5-58-11-pm-1000x1000.jpeg" alt="Manufacturing Unit" className="object-cover w-full h-full" />
              </div>
              <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/OI/YA/UF/18484447/whatsapp-image-2022-04-26-at-5-53-26-pm-1000x1000.jpeg" alt="Warehouse" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Key Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Nature of Business:</span> Manufacturer</li>
                <li><span className="font-semibold">Legal Status:</span> Proprietorship</li>
                <li><span className="font-semibold">CEO:</span> Sanket Garg</li>
                <li><span className="font-semibold">Employees:</span> 11 to 25 People</li>
                <li><span className="font-semibold">Annual Turnover:</span> ₹1.5 - ₹5 Crore</li>
                <li><span className="font-semibold">GST No.:</span> 27AYJPG4068M1ZY</li>
                <li><span className="font-semibold">Location:</span> Chikhali, Pimpri Chinchwad, Pune, Maharashtra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Products</h3>
              <ul className="space-y-2 text-gray-700">
                <li>LDPE Granules</li>
                <li>Shade Net</li>
                <li>PVC Tarpaulin</li>
                <li>Safety Net</li>
                <li>Plastic Sheet</li>
                <li>Agriculture Net</li>
                <li>Plastic Granules</li>
                <li>HDPE Monofilament Granules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure and Manufacturing */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-green-600 mb-6">Infrastructure & Manufacturing Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Manufacturing Facilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 50,000 sq ft modern manufacturing facility</li>
                <li>• Advanced plastic extrusion machines</li>
                <li>• Automated cutting and packaging systems</li>
                <li>• Quality control laboratories</li>
                <li>• 24/7 production capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Production Capacity</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shade nets: 1000+ tons annually</li>
                <li>• Tarpaulins: 500+ tons annually</li>
                <li>• Agriculture nets: 800+ tons annually</li>
                <li>• Plastic granules: 2000+ tons annually</li>
                <li>• Custom products on demand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">Certifications & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-semibold">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">🌿</div>
              <h3 className="font-semibold">ISO 14001:2015</h3>
              <p className="text-sm text-gray-600">Environmental Management</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-semibold">Industry Excellence Award</h3>
              <p className="text-sm text-gray-600">Best Manufacturer 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Note from the Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <p className="text-center mt-4 font-semibold">Mr. Rajesh Kumar</p>
              <p className="text-center text-sm text-gray-600">Founder & CEO</p>
            </div>
            <div className="md:w-3/4">
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "When I started this company 15 years ago, my vision was simple - to create products 
                that truly serve our customers' needs while maintaining the highest standards of quality. 
                Today, I am proud to see how far we've come, but more importantly, I'm excited about 
                the future we're building together.
                <br/><br/>
                Our success is built on three pillars: innovation in our products, integrity in our 
                business practices, and dedication to our customers. Every product that leaves our 
                facility carries with it our commitment to excellence and our promise of reliability.
                <br/><br/>
                As we continue to grow, we remain committed to sustainable manufacturing practices 
                and contributing positively to our community. Thank you for being part of our journey."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
