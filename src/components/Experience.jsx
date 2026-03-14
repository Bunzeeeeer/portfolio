function Experience() {
  const experiences = [
    {
      period: 'February 2025 — Present',
      role: 'Junior Software Engineer',
      company: 'MinibeaMitsumi Philippines Inc.',
      location: 'FPIP, Sto. Tomas, Batangas',
      color: 'violet',
      bullets: [
        'Developing mobile applications using Java, Kotlin, and Swift for Android and iOS platforms.',
        'Building apps for Bluetooth Low Energy (BLE) IoT devices ensuring seamless hardware integration.',
        'Implementing UI designs for web and mobile, adding new features to existing applications.',
        'Collaborating in Scrum ceremonies with Philippine and Japanese engineering teams.',
        'Managing project version control via GitHub and tracking bugs with internal QA team.',
      ],
    },
    {
      period: 'November 2023 — April 2024',
      role: 'Freelance Frontend Developer',
      company: 'Streaming Platform',
      location: 'Remote',
      color: 'teal',
      bullets: [
        'Developed and maintained frontend features for a streaming platform.',
        'Collaborated with clients to define project requirements and deliverables.',
        'Created wireframes and mockups to communicate design ideas effectively.',
        'Negotiated project fees and contracts with clients.',
      ],
    },
    {
      period: 'January 2023 — April 2023',
      role: 'Junior DevOps Engineer — Internship',
      company: 'OnePaul Global Services',
      location: '',
      color: 'coral',
      bullets: [
        'Learned CI/CD pipelines using GitLab CI and GitHub Actions.',
        'Assisted with repository management, branching strategies, and pull request workflows.',
        'Explored cloud platforms (AWS, Azure) through documentation and team demos.',
        'Participated in code reviews and deployment workflow discussions.',
      ],
    },
    {
      period: 'Graduated June 2024',
      role: 'B.S. Information Technology',
      company: 'Jose Rizal University',
      location: '',
      color: 'violet',
      bullets: [],
    },
  ]

  const dotColor = {
    violet: 'bg-violet-400',
    teal: 'bg-teal-400',
    coral: 'bg-red-400',
  }

  const companyColor = {
    violet: 'text-violet-400',
    teal: 'text-teal-400',
    coral: 'text-red-400',
  }

  return (
    <section id="experience" className="py-32 px-16 border-t border-white/10">

      <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">03 — experience</p>

      <h2
        style={{ fontFamily: 'Syne, sans-serif' }}
        className="text-5xl font-bold tracking-tight leading-tight mb-16"
      >
        Where I've<br />been building.
      </h2>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.role} className="pl-10 relative">
              <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-1/2 ${dotColor[exp.color]}`} />

              <p className="text-xs uppercase tracking-widest text-white/20 mb-1">
                {exp.period}
              </p>

              <h3
                style={{ fontFamily: 'Syne, sans-serif' }}
                className="text-xl font-bold mb-1"
              >
                {exp.role}
              </h3>

              <p className={`text-sm mb-4 ${companyColor[exp.color]}`}>
                {exp.company} {exp.location && `· ${exp.location}`}
              </p>

              {exp.bullets.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-violet-400 mt-0.5">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience