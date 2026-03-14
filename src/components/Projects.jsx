function Projects() {
  const projects = [
    {
      icon: '📱',
      title: 'Android App — TBD',
      desc: 'A native Android application built with Java & MVVM architecture. Details dropping soon.',
      tags: ['Java', 'MVVM', 'RxJava'],
      color: 'violet',
      coming: true,
    },
    {
      icon: '🌐',
      title: 'Full-Stack Web App — TBD',
      desc: 'A full-stack project with a modern frontend and backend API. Part of my journey into fullstack engineering.',
      tags: ['React', 'Node.js', 'REST API'],
      color: 'teal',
      coming: true,
    },
    {
      icon: '📡',
      title: 'BLE IoT Dashboard — TBD',
      desc: 'A mobile + web dashboard for visualizing data from BLE IoT sensors. Will use real hardware when I get my devices.',
      tags: ['BLE', 'IoT', 'Android'],
      color: 'coral',
      coming: true,
    },
    {
      icon: '⚙️',
      title: 'CI/CD Pipeline Project — TBD',
      desc: 'Practicing DevOps: automating build, test, and deploy pipelines using GitHub Actions for a real project.',
      tags: ['GitHub Actions', 'Docker', 'CI/CD'],
      color: 'violet',
      coming: true,
    },
    {
      icon: '🍎',
      title: 'iOS App — TBD',
      desc: 'A native iOS application built with Swift. Combining my Android expertise with iOS development.',
      tags: ['Swift', 'iOS', 'UIKit'],
      color: 'teal',
      coming: true,
    },
    {
      icon: '☁️',
      title: 'Cloud Deployment — TBD',
      desc: 'Deploying a real app to AWS using EC2, S3, and Lambda. Applying my AWS Academy knowledge hands-on.',
      tags: ['AWS', 'EC2', 'Lambda'],
      color: 'coral',
      coming: true,
    },
  ]

  const tagColors = {
    violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    teal: 'bg-teal-500/10 text-teal-300 border border-teal-500/20',
    coral: 'bg-red-500/10 text-red-300 border border-red-500/20',
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-16 border-t border-white/10">

      <p className="text-violet-400 text-xs uppercase tracking-widest mb-4">04 — projects</p>

      <h2
        style={{ fontFamily: 'Syne, sans-serif' }}
        className="text-5xl font-bold tracking-tight leading-tight mb-16"
      >
        Things I'm<br />building.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-lg p-7 flex flex-col gap-4 opacity-60"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                {project.icon}
              </div>
              <span className="text-xs tracking-widest text-white/20 border border-white/10 border-dashed px-2 py-1 rounded">
                coming soon
              </span>
            </div>

            <h3
              style={{ fontFamily: 'Syne, sans-serif' }}
              className="text-base font-bold"
            >
              {project.title}
            </h3>

            <p className="text-gray-400 text-xs leading-relaxed flex-1">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded ${tagColors[project.color]}`}
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

export default Projects