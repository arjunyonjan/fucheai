import { categories } from '../data/projects'

export default function Sidebar({ selected, onSelect, open, onToggle }) {
  return (
    <>
      {!open && (
        <button
          onClick={onToggle}
          class="fixed top-4 left-4 z-30 w-10 h-10 flex items-center justify-center rounded-lg glass text-gray-400 hover:text-primary transition-colors text-xl"
        >
          ☰
        </button>
      )}
      <aside
        class={`fixed top-0 left-0 h-full z-20 w-64 glass border-r border-gray-800/50 flex flex-col transition-all duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div class="p-4 flex flex-col h-full">
          <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-primary tracking-tight">fucheai</h1>
            <button onClick={onToggle} class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary transition-colors text-lg">
              ✕
            </button>
          </div>
          <nav class="flex-1 space-y-6 overflow-y-auto">
            {categories.map(cat => (
              <div key={cat.name}>
                <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 px-2">{cat.name}</p>
                {cat.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => { onSelect(item.id); onToggle() }}
                    class={`w-full text-left px-3 py-2 rounded-lg text-base transition-colors ${
                      selected === item.id
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
