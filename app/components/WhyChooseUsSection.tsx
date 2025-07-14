
'use client';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: 'Transparent Pricing, No Hidden Fees',
      description: 'Clear, upfront pricing with no surprises. You know exactly what you\'ll pay before we start.',
      image: 'https://readdy.ai/api/search-image?query=Transparent%20pricing%20document%20with%20clear%20itemized%20costs%20and%20no%20hidden%20fees%20concept%2C%20clean%20professional%20financial%20transparency%20illustration&width=400&height=300&seq=benefit1&orientation=landscape',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      title: 'Licensed, Insured & Contracted',
      description: 'Fully licensed moving company with comprehensive insurance coverage and proper contracts for your peace of mind.',
      image: 'https://readdy.ai/api/search-image?query=Official%20business%20licenses%20insurance%20certificates%20and%20legal%20contracts%20displayed%20professionally%2C%20trust%20and%20credibility%20business%20concept&width=400&height=300&seq=benefit2&orientation=landscape',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Professional Experienced Movers',
      description: 'Our team consists only of trained, experienced professionals who treat your belongings with utmost care.',
      image: 'https://readdy.ai/api/search-image?query=Team%20of%20professional%20movers%20in%20uniform%20with%20years%20of%20experience%20badges%2C%20skilled%20workforce%20and%20expertise%20in%20moving%20industry&width=400&height=300&seq=benefit3&orientation=landscape',
      icon: 'ri-team-line'
    },
    {
      title: 'Home Interior Protection',
      description: 'We care about your current and new home, using protective materials for floors, walls, and doorways.',
      image: 'https://readdy.ai/api/search-image?query=Movers%20placing%20protective%20padding%20on%20walls%20floors%20and%20doorways%20during%20home%20move%2C%20interior%20protection%20and%20damage%20prevention&width=400&height=300&seq=benefit4&orientation=landscape',
      icon: 'ri-home-heart-line'
    },
    {
      title: 'Fast Booking & Friendly Support',
      description: 'Quick and easy booking process with responsive customer support ready to help you every step of the way.',
      image: 'https://readdy.ai/api/search-image?query=Customer%20service%20representative%20on%20phone%20with%20calendar%20and%20booking%20system%2C%20friendly%20customer%20support%20and%20fast%20service%20concept&width=400&height=300&seq=benefit5&orientation=landscape',
      icon: 'ri-customer-service-2-line'
    },
    {
      title: 'Flexible Scheduling Available',
      description: 'We work around your schedule, offering weekend and evening appointments to fit your busy life.',
      image: 'https://readdy.ai/api/search-image?query=Calendar%20showing%20flexible%20scheduling%20options%20including%20weekends%20and%20evenings%2C%20time%20management%20and%20customer%20convenience%20concept&width=400&height=300&seq=benefit6&orientation=landscape',
      icon: 'ri-calendar-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose U-MOVEX</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Florida's most trusted moving company
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                
                <div 
                  className="h-32 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url('${benefit.image}')` }}
                />
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
