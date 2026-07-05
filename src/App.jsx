import { useState } from 'preact/hooks'
import Sidebar from './components/Sidebar'
import Welcome from './components/Welcome'
import ProjectView from './components/ProjectView'
import { projectContent } from './data/projects'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const project = selected ? projectContent[selected] : null

  return (
    <div class="h-screen relative">
      <Sidebar selected={selected} onSelect={setSelected} open={sidebarOpen} onToggle={() => setSidebarOpen(s => !s)} />
      {sidebarOpen && (
        <div class="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}
      <main class="h-full p-8 overflow-y-auto">
        {selected && project && (
          <div class="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <button onClick={() => setSelected(null)} class="hover:text-primary transition-colors">Projects</button>
            <span>/</span>
            <span class="text-primary">{project.title}</span>
          </div>
        )}
        {selected ? <ProjectView projectId={selected} /> : <Welcome />}
      </main>
    </div>
  )
}
