function Skills() {
  const skills = [
    {
      icon: '📱',
      title: 'Mobile Development',
      desc: 'Building native Android and iOS apps with modern architectures like MVVM, clean patterns, and reactive programming.',
      tags: ['Java', 'Swift', 'MVVM', 'RxJava', 'Dagger2'],
      color: 'violet',
    },
    {
      icon: '🌐',
      title: 'Web Frontend',
      desc: 'Implementing clean, accessible UI designs for web platforms. Wireframing, mockups, and translating designs into code.',
      tags: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
      color: 'teal',
    },
    {
      icon: '📡',
      title: 'IoT & BLE',
      desc: 'Developing mobile applications for Bluetooth Low Energy IoT devices, ensuring seamless integration and optimal performance.',
      tags: ['BLE', 'IoT', 'Android'],
      color: 'coral',
    },
    {
      icon: '⚙️',
      title: 'DevOps & CI/CD',
      desc: 'Familiar with pipelines, version control strategies, GitHub Actions, and cloud platforms. Growing this stack actively.',
      tags: ['GitHub Actions', 'Git', 'AWS', 'Azure'],
      color: 'violet',
    },
    {
      icon: '🔧',
      title: 'Engineering Practices',
      desc: 'Version control, QA collaboration, Agile Scrum ceremonies, issue tracking, and clean code principles.',
      tags: ['GitHub', 'Redmine', 'Jira', 'Agile/Scrum', 'QA'],
      color: 'teal',
    },
    {
      icon: '🤝',
      title: 'Communication',
      desc: 'Cross-cultural collaboration with Philippine and Japanese teams. Client-facing requirements gathering.',
      tags: ['Cross-cultural', 'Client Relations', 'Presentations'],
      color: 'coral',
    },
  ]

  const tagColors = {
    violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    teal: 'bg-teal-500/10 text-teal-300 border border-teal-500/20',
    coral: 'bg-red-500/10 text-red-300 border border-red-500/20',
  }

  const topBorder = {
    violet: 'hover:border-t-violet-400',
    teal: 'hover:border-t-teal-400',
    coral: 'hover:border-t-red-400',
  }

  return (
    <section id="skills" className="py-32 px-16 border-t border-white/10">

      <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">02 — skills</p>

      <h2
        style={{ fontFamily: 'Syne, sans-serif' }}
        className="text-5xl font-bold tracking-tight leading-tight mb-16"
      >
        What I bring<br />to the table.
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className={`bg-white/5 border border-white/10 border-t-2 border-t-transparent ${topBorder[skill.color]} rounded-lg p-7 transition-all hover:bg-white/8`}
          >
            <div className="text-2xl mb-4">{skill.icon}</div>
            <h3
              style={{ fontFamily: 'Syne, sans-serif' }}
              className="text-base font-bold mb-3"
            >
              {skill.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              {skill.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded ${tagColors[skill.color]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills