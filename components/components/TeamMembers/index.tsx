import React from 'react';

const TeamMembers: React.FC = () => {
  const TEAM_MEMBERS= [
  {
    name: 'Pasang Sherpa',
    role: 'Lead Guide',
    description: 'With 15 years on Everest and Manaslu, Pasang ensures safety with a smile.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    icon: 'hiking',
    iconColor: 'primary',
  },
  {
    name: 'Maya Gurung',
    role: 'Logistics Manager',
    description: 'Maya coordinates every permit, flight, and teahouse booking seamlessly.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80',
    icon: 'map',
    iconColor: 'secondary',
  },
  {
    name: 'Rajesh Tamang',
    role: 'High Altitude Medic',
    description: 'Certified in wilderness medicine, Rajesh is your safety net in the clouds.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    icon: 'medical_services',
    iconColor: 'primary',
  },
  {
    name: 'Anjali Shrestha',
    role: 'Cultural Storyteller',
    description: 'Expert in local folklore and history, bringing the mountains to life with stories.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    icon: 'photo_camera',
    iconColor: 'secondary',
  },
];


  return (
   <section className="mb-32 relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(217,30,70,0.8)]"></span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">Our Guides</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Meet the Team</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          The experienced climbers, cultural experts, and logistics masters who make your Himalayan dreams a reality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group hover:shadow-xl hover:shadow-primary/5 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6 relative flex-grow flex flex-col">
              <div className="-mt-12 mb-4 relative z-10">
                <div className={`w-10 h-10 ${member.iconColor === 'primary' ? 'bg-primary shadow-primary/30' : 'bg-secondary shadow-secondary/30'} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <span className="material-symbols-outlined text-sm">{member.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
