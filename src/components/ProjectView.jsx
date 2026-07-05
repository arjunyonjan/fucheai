import { projectContent } from '../data/projects'

export default function ProjectView({ projectId }) {
  const project = projectContent[projectId]
  if (!project) return <div class="text-gray-500">Project not found</div>

  return (
    <div>
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-primary">{project.title}</h1>
        <p class="text-gray-500 mt-1">{project.subtitle}</p>
      </div>
      {project.sections.map(section => (
        <div key={section.heading} class="glass rounded-xl p-5 mb-4">
          <h2 class="text-lg font-semibold text-gray-200 mb-3">{section.heading}</h2>
          <ul class="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} class="text-gray-400 text-sm flex gap-2">
                <span class="text-primary shrink-0 mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
