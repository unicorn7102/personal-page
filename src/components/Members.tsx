type Member = {
  name: string;
  role: string;
  bio: string;
  email?: string;
  website?: string;
};

const pi: Member = {
  name: "HE Mengfei",
  role: "Principal Investigator",
  bio: "",
  email: "hemf_at_sustech.edu.cn",
};

const members: Member[] = [
  {
    name: "PhD Student One",
    role: "PhD Student",
    bio: "Working on [topic]. BSc from [university], [year].",
    email: "xxx_at_sustech.edu.cn",
  },
  {
    name: "PhD Student Two",
    role: "PhD Student",
    bio: "Working on [topic]. MSc from [university], [year].",
    email: "xxx_at_sustech.edu.cn",
  },
  {
    name: "Postdoc Researcher",
    role: "Postdoctoral Researcher",
    bio: "Research focus: [topic]. PhD from [university], [year].",
    email: "xxx_at_sustech.edu.cn",
  },
  {
    name: "Visiting Researcher",
    role: "Visiting Scholar",
    bio: "Visiting from [institution]. Working on [topic].",
    email: "xxx_at_sustech.edu.cn",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="w-20 h-20 rounded-full bg-lab-blue-light border-2 border-lab-blue/20 flex items-center justify-center text-lab-blue font-bold text-lg flex-shrink-0">
      {initials}
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex gap-5 p-5 border border-gray-200 rounded-lg hover:border-lab-blue hover:shadow-sm transition-all">
      <Avatar name={member.name} />
      <div className="min-w-0">
        <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
        <p className="text-lab-blue text-xs font-semibold mb-2">{member.role}</p>
        {member.bio && <p className="text-gray-500 text-xs leading-relaxed mb-2">{member.bio}</p>}
        <div className="flex flex-col gap-1">
          {member.email && (
            <span className="text-xs text-gray-400">{member.email}</span>
          )}
          {member.website && (
            <a href={member.website} className="text-xs text-gray-400 hover:text-lab-blue transition-colors">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Members() {
  return (
    <section id="members" className="py-20 px-6 bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto">
        <p className="section-label">The Team</p>
        <h2 className="section-title">Members</h2>
        <div className="section-rule" />

        <div className="grid sm:grid-cols-2 gap-4">
          <MemberCard member={pi} />
          {members.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
