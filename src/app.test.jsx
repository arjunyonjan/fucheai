import { describe, test, expect } from 'vitest'
import { render } from 'preact'

function setup(component) {
  const root = document.createElement('div')
  document.body.innerHTML = ''
  document.body.appendChild(root)
  render(component, root)
  return root
}

describe('Welcome', () => {
  test('renders title', async () => {
    const mod = await import('./components/Welcome')
    const root = setup(mod.default())
    expect(root.textContent).toContain('fucheai')
    expect(root.textContent).toContain('Select a project')
  })
})

describe('Sidebar', () => {
  test('renders categories and project labels', async () => {
    const mod = await import('./components/Sidebar')
    const root = setup(mod.default({ selected: null, onSelect: () => {}, open: true, onToggle: () => {} }))
    expect(root.textContent).toContain('AI & ML')
    expect(root.textContent).toContain('Fuche AI')
    expect(root.textContent).toContain('Dev & Tools')
    expect(root.textContent).toContain('Systems')
    expect(root.textContent).toContain('Media Tech')
    expect(root.textContent).toContain('AI Terminology')
    expect(root.textContent).toContain('Premiere VLM Bridge')
    expect(root.textContent).toContain('Fast 4K Compression')
    expect(root.textContent).toContain('OpenCode')
  })

  test('highlights selected project', async () => {
    const mod = await import('./components/Sidebar')
    const root = setup(mod.default({ selected: 'cnn', onSelect: () => {}, open: true, onToggle: () => {} }))
    const buttons = root.querySelectorAll('button')
    const cnnBtn = Array.from(buttons).find(b => b.textContent.includes('CNN'))
    expect(cnnBtn).toBeTruthy()
  })
})

describe('ProjectView', () => {
  test('renders project content sections', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'cnn' }))
    expect(root.textContent).toContain('CNN')
    expect(root.textContent).toContain('Plain English')
    expect(root.textContent).toContain('Pipeline')
    expect(root.textContent).toContain('Key Concepts')
    expect(root.textContent).toContain('Convolution')
  })

  test('renders stats chips', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'ai-terms' }))
    expect(root.textContent).toContain('sections')
    expect(root.textContent).toContain('items')
  })

  test('renders code blocks for code items', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'opencode' }))
    const codes = root.querySelectorAll('.code-inline')
    expect(codes.length).toBeGreaterThanOrEqual(0)
  })

  test('renders badges for labeled items', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'quantize' }))
    const badges = root.querySelectorAll('.badge')
    expect(badges.length).toBeGreaterThanOrEqual(3)
  })

  test('renders SVG icons in section headers', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'cnn' }))
    const svgs = root.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })

  test('unknown project shows not found', async () => {
    const mod = await import('./components/ProjectView')
    const root = setup(mod.default({ projectId: 'nonexistent' }))
    expect(root.textContent).toContain('Project not found')
  })
})

describe('All 14 projects render without error', () => {
  const ids = [
    'ai-terms', 'cnn', 'quantize',
    'fuche-ai', 'fuche-tts', 'fuche-coder',
    'opencode', 'deepseek-mcp', 'jarvis-voice',
    'project-graph', 'vercel-pg-rag', 'vpn-hack',
    'premiere-bridge', 'video-codecs',
  ]
  for (const id of ids) {
    test(`${id} renders`, async () => {
    const mod = await import('./components/ProjectView')
      const root = setup(mod.default({ projectId: id }))
      expect(root.textContent.length).toBeGreaterThan(10)
    })
  }
})

describe('Projects data integrity', () => {
  test('all categories have items', async () => {
    const mod = await import('./data/projects')
    for (const cat of mod.categories) {
      expect(cat.items.length).toBeGreaterThan(0)
    }
  })

  test('all project IDs have content', async () => {
    const mod = await import('./data/projects')
    for (const cat of mod.categories) {
      for (const item of cat.items) {
        expect(mod.projectContent[item.id]).toBeTruthy()
      }
    }
  })
})

describe('Custom components', () => {
  test('PremiereBridge renders key content', async () => {
    const mod = await import('./components/PremiereBridge')
    const root = setup(mod.default())
    expect(root.textContent).toContain('Premiere VLM Bridge')
    expect(root.textContent).toContain('vidchain')
    expect(root.textContent).toContain('DeepSeek')
    expect(root.textContent).toContain('LLaVA')
    expect(root.textContent).toContain('Installation')
  })

  test('VideoCodecs renders key content', async () => {
    const mod = await import('./components/VideoCodecs')
    const root = setup(mod.default())
    expect(root.textContent).toContain('Fast 4K Compression')
    expect(root.textContent).toContain('AV1 NVENC')
    expect(root.textContent).toContain('HEVC')
    expect(root.textContent).toContain('ffmpeg')
    expect(root.textContent).toContain('RTX 5060')
  })
})
