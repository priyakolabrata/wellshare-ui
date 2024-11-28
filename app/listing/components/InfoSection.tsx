import React from 'react';

const InfoSection = () => {
  const sections = [
    {
      title: 'House rules',
      items: [
        'Check-in: 3:00 pm - 12:00 am',
        'Checkout before 11:00 am',
        '2 guests maximum'
      ]
    },
    {
      title: 'Opening hours',
      items: [
        'Mon - Fri: 3:00 pm - 12:00 am',
        'Sat - Sun: 3:00 pm - 12:00 am',
        'Sat - Sun: 3:00 pm - 12:00 am'
      ]
    },
    {
      title: 'Parking & public transport',
      items: [
        'Carbon monoxide alarm',
        'Smoke alarm',
        'Not suitable for children and infants'
      ]
    }
  ];

  return (
    <section className="bg-[#f4f3e8] px-4 sm:px-6 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl text-[#4f4f4f] font-semibold capitalize mb-8">
          Things you should know
        </h2>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg sm:text-xl text-[#4f4f4f] font-semibold capitalize">
                {section.title}
              </h3>
              <ul className="space-y-2 text-[#4f4f4f] text-base">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="text-[#4f4f4f] text-base font-semibold underline hover:text-[#64775e] transition-colors">
                Show more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
