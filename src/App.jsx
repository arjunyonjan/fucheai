import { useState, useEffect } from 'preact/hooks'
import Sidebar from './components/Sidebar'
import Welcome from './components/Welcome'
import ProjectView from './components/ProjectView'
import PremiereBridge from './components/PremiereBridge'
import VideoCodecs from './components/VideoCodecs'
import { projectContent } from './data/projects'

const customComponents = {
  'PremiereBridge': PremiereBridge,
  'VideoCodecs': VideoCodecs,
}

function useHash() {
  const [hash, setHash] = useState(null)
  useEffect(() => {
    const h = () => setHash(location.hash.slice(1) || null)
    addEventListener('hashchange', h)
    h()
    return () => removeEventListener('hashchange', h)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (hash && projectContent[hash]) {
      setSelected(hash)
    } else if (!hash) {
      setSelected(null)
    }
  }, [hash])

  const select = (id) => {
    setSelected(id)
    if (id) history.pushState(null, '', '#' + id)
    else history.pushState(null, '', '/')
  }

  const project = selected ? projectContent[selected] : null

  return (
    <div class="h-screen relative">
      <Sidebar selected={selected} onSelect={select} open={sidebarOpen} onToggle={() => setSidebarOpen(s => !s)} />
      {sidebarOpen && (
        <div class="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}
      <main class="h-full p-8 overflow-y-auto">
        {selected && project && (
          <div class="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <button onClick={() => select(null)} class="hover:text-primary transition-colors">Projects</button>
            <span>/</span>
            <span class="text-primary">{project.title}</span>
          </div>
        )}
        {selected ? (
          project.component === 'PremiereBridge' ? <PremiereBridge /> :
          project.component === 'VideoCodecs' ? <VideoCodecs /> :
          <ProjectView projectId={selected} />
        ) : <Welcome />}
      </main>
    </div>
  )
}
