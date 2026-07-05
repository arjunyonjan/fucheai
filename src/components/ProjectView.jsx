import { projectContent } from '../data/projects'

function Icon({ path, viewBox = '0 0 24 24', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary shrink-0">
      <path d={path} />
    </svg>
  )
}

const sectionIcons = {
  'Overview': <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />,
  'Core Concepts': <Icon path="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'Activations': <Icon path="M3 3v18h18M7 16l4-8 4 4 4-6" />,
  'Architectures': <Icon path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  'Training': <Icon path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  'Pipeline': <Icon path="M5 12h14M12 5l7 7-7 7" />,
  'Key Concepts': <Icon path="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
  'What it is': <Icon path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  'What it does': <Icon path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  'Methods': <Icon path="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
  'Quality Trade-offs': <Icon path="M12 2v20M2 12h20" />,
  'Practical Notes': <Icon path="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />,
  'Components': <Icon path="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />,
  'Design Principles': <Icon path="M12 3v2m0 14v2m-9-9h2m14 0h2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M4.222 16.364l1.414-1.414m9.9-9.9l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />,
  'Capabilities': <Icon path="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  'Integration': <Icon path="M18.36 6.64a9 9 0 11-12.73 0" />,
  'Key Features': <Icon path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  'Stack': <Icon path="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />,
  'Model': <Icon path="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  'Prompting': <Icon path="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  'What Works': <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  'Needs Fix': <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
  'Benefits': <Icon path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  'Setup': <Icon path="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
  'Architecture': <Icon path="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7M5 3l-2 4m18 0l-2-4M9 21V7m6 14V7" />,
  'Use Cases': <Icon path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  'Technologies': <Icon path="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6" />,
  'Platform: Murf': <Icon path="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
  'Platform: Speechify Studio': <Icon path="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
  'Platform: Copilot Audio Expression': <Icon path="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
  'Workflow': <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
  'Project Groups': <Icon path="M2 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v1M2 17a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H4a2 2 0 00-2 2v8z" />,
  'Tech Stack Distribution': <Icon path="M18 20V10M12 20V4M6 20v-6" />,
  'Plain English': <Icon path="M4 6h16M4 12h16M4 18h12" />,
  'Default': <Icon path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
}

function isCode(item) {
  return item.includes('`') || item.match(/^(npm|ollama|git|curl|pip|node|python|rustc|cargo|screen)\s/)
}

function isBadge(item) {
  return item.includes(' — ') && item.length < 80
}

function renderItem(item) {
  if (isCode(item)) {
    const text = item.replace(/`/g, '')
    return <code class="code-inline">{text}</code>
  }
  if (isBadge(item)) {
    const parts = item.split(' — ')
    return (
      <span class="flex flex-wrap items-center gap-1.5">
        <span class="badge">{parts[0]}</span>
        <span class="text-gray-400">{'—'} {parts.slice(1).join(' — ')}</span>
      </span>
    )
  }
  return <span>{item}</span>
}

export default function ProjectView({ projectId }) {
  const project = projectContent[projectId]
  if (!project) return <div class="text-gray-500">Project not found</div>

  return (
    <div class="project-view">
      <div class="mb-10 animate-fade-in">
        <div class="flex items-center gap-3 mb-2">
          <h1 class="text-3xl font-bold text-primary tracking-tight">{project.title}</h1>
          <span class="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
        <p class="text-gray-500 text-base">{project.subtitle}</p>
        <div class="flex gap-2 mt-3">
          <span class="stat-chip">{project.sections.length} sections</span>
          <span class="stat-chip">{project.sections.reduce((a, s) => a + s.items.length, 0)} items</span>
        </div>
      </div>
      {project.sections.map((section, si) => (
        <div key={section.heading} class="section-card glass rounded-xl p-6 mb-5 animate-slide-up" style={{ animationDelay: `${si * 0.06}s` }}>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-1 h-6 bg-primary rounded-full" />
            <span class="text-primary">{sectionIcons[section.heading] || sectionIcons['Default']}</span>
            <h2 class="text-lg font-semibold text-gray-100 tracking-wide">{section.heading}</h2>
          </div>
          <ul class="space-y-2.5">
            {section.items.map((item, i) => (
              <li key={i} class="item-row">
                <span class="text-primary/60 shrink-0 mt-1.5 text-xs">&#9656;</span>
                <span class="text-gray-400 text-[15px] leading-relaxed">{renderItem(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
