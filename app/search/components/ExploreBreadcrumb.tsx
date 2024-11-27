import React from 'react';

const ExploreBreadcrumb = () => {
  const categories = [
    { title: 'Treatment', icon: '/api/placeholder/40/40' },
    { title: 'Medical', icon: '/api/placeholder/40/40' },
    { title: 'Therapy', icon: '/api/placeholder/40/40' },
    { title: 'Beauty', icon: '/api/placeholder/40/40' },
    { title: 'Dental', icon: '/api/placeholder/40/40' },
    { title: 'Hair', icon: '/api/placeholder/40/40' },
    { title: 'Movement', icon: '/api/placeholder/40/40' },
    { title: 'Group', icon: '/api/placeholder/40/40' }
  ];

  const treatments = Array(8).fill({
    title: 'Wollongong...',
    type: 'Treatment',
    rating: 4.99,
    pricing: {
      hour: 40,
      day: 100,
      week: 300
    }
  });

  return (
    <div className="w-[1080px] h-[460px] flex-col justify-start items-start gap-10 inline-flex">
    <div className="self-stretch h-[98px] flex-col justify-start items-start gap-10 flex">
        <div className="self-stretch h-[0px] border border-[#eae9dd]"></div>
        <div className="justify-start items-center gap-[7px] inline-flex">
            <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Wellshare</div>
            <div className="w-2 h-2 relative"></div>
            <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Australia</div>
            <div className="w-2 h-2 relative"></div>
            <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">New South Wales</div>
            <div className="w-2 h-2 relative"></div>
            <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Sydney</div>
        </div>
        <div className="self-stretch h-[0px] border border-[#eae9dd]"></div>
    </div>
    <div className="self-stretch h-[322px] flex-col justify-start items-start gap-10 flex">
        <div className="flex-col justify-start items-start gap-8 flex">
            <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">Explore other options in and around Sydney</div>
            <div className="justify-start items-start gap-60 inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Sydney CBD</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Surry Hills</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">St. Leonards</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Pyrmont</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Penrith</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Doncaster East</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Caringbah</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Canberra</div>
                        <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[115px] flex-col justify-start items-start gap-8 flex">
            <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">Other types of rooms available on Wellshare</div>
            <div className="justify-start items-start gap-16 inline-flex">
                <div className="justify-start items-center gap-[88px] flex">
                    <div className="justify-start items-start gap-48 flex">
                        <div className="flex-col justify-start items-start gap-6 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Sydney treatment rooms</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Medical rooms in New South Wales</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-48 flex">
                        <div className="flex-col justify-start items-start gap-6 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Penrith weekly casual rooms</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Furnished Co-working space in Sydney</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-start gap-48 flex">
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Pyrmont furnished beauty salon</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">Yoga / pilates room rentals in Surry Hill</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ExploreBreadcrumb;