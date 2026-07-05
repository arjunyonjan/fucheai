export const categories = [
  {
    name: 'Media Tech',
    items: [
      { id: 'premiere-bridge', label: 'Premiere VLM Bridge' },
      { id: 'video-codecs', label: 'Fast 4K Compression' },
    ],
  },
  {
    name: 'AI & ML',
    items: [
      { id: 'ai-terms', label: 'AI Terminology' },
      { id: 'cnn', label: 'CNN Explained' },
      { id: 'quantize', label: 'Quantization' },
    ],
  },
  {
    name: 'Fuche AI',
    items: [
      { id: 'fuche-ai', label: 'Fuche AI System' },
      { id: 'fuche-tts', label: 'Fuche TTS' },
      { id: 'fuche-coder', label: 'Fuche Coder' },
    ],
  },
  {
    name: 'Dev & Tools',
    items: [
      { id: 'opencode', label: 'OpenCode' },
      { id: 'deepseek-mcp', label: 'DeepSeek MCP' },
      { id: 'jarvis-voice', label: 'Jarvis Voice' },
    ],
  },
  {
    name: 'Systems',
    items: [
      { id: 'project-graph', label: 'Project Graph' },
      { id: 'vercel-pg-rag', label: 'Vercel PG RAG' },
      { id: 'vpn-hack', label: 'VPN Hack' },
    ],
  },
]

export const projectContent = {
  'ai-terms': {
    title: 'AI Terminology',
    subtitle: '73 fundamental terms',
    sections: [
      { heading: 'Core Concepts', items: ['Neuron / Node — Input, Weight, Bias, Activation', 'Weighted Sum — Mix: input×weight + bias, raw score before activation', 'Perceptron — Single neuron: binary classifier', 'Gradient Descent — Adjust weights by error', 'SGD — Stochastic Gradient Descent'] },
      { heading: 'Activations', items: ['ReLU — max(0, x) keeps positive', 'Sigmoid — Squashes to 0 to 1: 1 / (1 + e⁻ˣ)', 'Softmax — Output probabilities sum to 1', 'Non-linearity — Draws curves to separate classes'] },
      { heading: 'Architectures', items: ['CNN — Convolutional Neural Network', 'Transformer — Self-attention + feed-forward blocks', 'Autoencoder — Learns compressed latent representation', 'Mixture of Experts — MoE'] },
      { heading: 'Training', items: ['Epoch — One full pass through data', 'Batch Size — Samples per iteration', 'Learning Rate — Step size for weight updates', 'Loss Function — Measures prediction error', 'Backpropagation — Loop: adjust weights backward'] },
    ]
  },
  'cnn': {
    title: 'CNN — Visual Guide',
    subtitle: 'Convolutional Neural Networks explained visually',
    sections: [
      { heading: 'Plain English', items: ['A CNN uses tiny flashlights (kernels) that scan across an image looking for patterns. Early layers detect edges/corners. Deeper layers combine into textures, shapes, and objects.'] },
      { heading: 'Pipeline', items: ['Image → Conv → ReLU → Pool → Conv → ReLU → Pool → FC1 (128) → FC2 (classes)'] },
      { heading: 'Key Concepts', items: ['Convolution — Kernel slides across image, multiplies element-wise, sums to one output value', 'Stride — How many pixels the kernel jumps (stride 2 = half output size)', 'Padding — Adds borders so kernels reach edge pixels', 'Pooling — Max/average window shrinks map while preserving strongest signals', 'ReLU — Kills negatives, only positive detections fire the neuron'] },
    ]
  },
  'quantize': {
    title: 'Quantize',
    subtitle: 'Model compression — dev notes',
    sections: [
      { heading: 'What it is', items: ['Reducing numerical precision of weights (FP32 → INT8/FP4) to shrink model size and speed up inference.', 'FP32: 4 bytes per weight → INT8: 1 byte → 4× smaller', 'FP4/NF4: ~0.5 byte → 8× smaller', 'GGUF format supports 2-8 bit quantization via llama.cpp'] },
      { heading: 'Methods', items: ['PTQ (Post-Training Quantization) — Quantize after training, no retraining needed', 'QAT (Quantization-Aware Training) — Simulate quantization during training for better accuracy', 'GGUF — llama.cpp format supporting 2-8 bit quantization levels (Q2_K through Q8_0)'] },
      { heading: 'Quality Trade-offs', items: ['Q8_0 — Near-lossless, ~1% quality drop, 8-bit', 'Q4_K_M — Recommended balance, ~4-5% quality drop, 4-bit', 'Q2_K — Aggressive, ~15-20% quality drop, 2-bit', 'Rule of thumb: Q4_K_M for production, Q8_0 for sensitive tasks, Q2_K for edge devices'] },
      { heading: 'Practical Notes', items: ['Ollama automatically uses quantization tags: qwen2.5-coder:7b-instruct-q8_0', 'Q8_0 model ~8.1 GB vs Q4_K_M ~4.7 GB — nearly 2× size difference', 'GPU offload works with all quantization levels', 'VRAM usage scales linearly with bit width'] },
    ]
  },
  'fuche-ai': {
    title: 'Fuche AI System',
    subtitle: 'Intelligent assistant architecture',
    sections: [
      { heading: 'Overview', items: ['Fuche AI is an intelligent assistant system integrating RAG, TTS, code generation, and voice interface capabilities.', 'Built with modular architecture — each component (Coder, TTS, Voice, RAG) is independently deployable and swappable.'] },
      { heading: 'Components', items: ['Fuche Coder — Dual-model routing (Qwen3 0.6B + Hunyuan 0.5B) for code and general Q&A', 'Fuche TTS — Neural text-to-speech with voice cloning and real-time streaming', 'RAG Engine — Retrieval-augmented generation with vector search', 'Voice Interface — Jarvis-style wake-word activated voice commands', 'All components run locally via Ollama — under 1GB total VRAM'] },
      { heading: 'Design Principles', items: ['Local-first — all processing on-device, no cloud dependencies', 'Modular — swap any component without affecting others', 'Low-resource — optimized for consumer GPUs (RTX 5060 8GB)', 'Voice-native — TTS feedback at every step, voice input supported'] },
    ]
  },
  'fuche-tts': {
    title: 'Fuche TTS Engine',
    subtitle: 'Text-to-Speech with voice synthesis',
    sections: [
      { heading: 'Overview', items: ['High-quality neural text-to-speech engine with voice cloning and real-time streaming.', 'Built as part of the Fuche AI ecosystem for voice-enabled AI interactions.'] },
      { heading: 'Capabilities', items: ['Neural TTS synthesis with natural prosody and intonation', 'Voice cloning — replicate any voice from audio samples', 'Real-time streaming inference — low-latency audio output', 'Multi-language support with accent adaptation', 'SSML support for fine-grained control over pacing, emphasis, and pitch'] },
      { heading: 'Integration', items: ['REST API for programmatic TTS generation', 'WebSocket streaming for real-time applications', 'Fuche Coder integration — voice feedback at every step', 'Jarvis Voice integration — wake-word activated TTS'] },
    ]
  },
  'fuche-coder': {
    title: 'Fuche AI Coder',
    subtitle: 'Local AI stack — Code + Reasoning · Local · Free',
    sections: [
      { heading: 'Overview', items: ['Fuche AI Coder runs entirely on your machine via Ollama — under 1GB VRAM', 'Routes code questions to Qwen3 0.6B, general Q&A to Hunyuan 0.5B', 'Always searches web for fresh context, caches results, falls back gracefully offline', 'TTS enabled — voice feedback at every step'] },
      { heading: 'Key Features', items: ['Dual-model routing — optimal small model for every query type', 'Web search integration with result caching', 'Graceful offline fallback — never hangs when disconnected', 'Voice feedback via TTS engine at every step'] },
      { heading: 'Stack', items: ['Runtime: Ollama local LLM server', 'Code Model: Qwen3 0.6B', 'General Model: Hunyuan 0.5B', 'TTS: Fuche TTS Engine for voice output', 'All under 1GB VRAM combined'] },
    ]
  },
  'opencode': {
    title: 'OpenCode',
    subtitle: 'Local LLM dev notes — Ollama + Qwen2.5-Coder 7B',
    sections: [
      { heading: 'Model', items: ['Qwen2.5-Coder 7B Instruct via Ollama — fully local, fully private, zero API cost', 'Q4_K_M quant: ~4.7 GB disk, ~5.2 GB VRAM (fits RTX 5060 8 GB with headroom)', 'Context: 32K tokens', 'Pull: ollama pull qwen2.5-coder:7b-instruct-q8_0 (~8.1 GB, official 8-bit quant)'] },
      { heading: 'Stack', items: ['Model: Qwen2.5-Coder 7B Instruct — Alibaba code-specialized LLM', 'Runtime: Ollama — model loading, quantization, GPU offload', 'Interface: OpenCode CLI — terminal-native coding agent with tool-use & file editing', 'Hardware: Acer Predator PHN16S-71 · Intel Core Ultra 9 275HX · RTX 5060 8 GB · 32 GB RAM'] },
      { heading: 'Prompting — The Escalation Ladder', items: ['Level 0: Normal prompt (~70% success) — "write a rust function that reverses a string"', 'Level 1: First re-prompt — "No JSON. Just show me the code."', 'Level 2: Firm re-prompt — "Plain text only. No tool-call JSON."', 'Level 3: Baked-in system rule — prepend plain-text instruction to first message'] },
      { heading: 'What Works', items: ['Model loads on RTX 5060 with full GPU offload', 'Generates correct Rust, Python, JS, shell', 'OpenCode CLI sees the model and routes to it', 'Token streaming works in real-time', 'Fully offline — no network needed after pull'] },
      { heading: 'Needs Fix', items: ['Tool calls emit as raw JSON instead of being parsed by agent loop', 'OpenAI-compat adapter schema mismatch w/ Ollama tools field', 'Fix 1: Switch to native Ollama provider (npm: ollama)', 'Fix 2: Update Ollama to 0.5.x+ for correct tool_calls arrays', 'Fix 3: Try tool-tuned tag qwen2.5-coder:7b-instruct-q8_0'] },
    ]
  },
  'deepseek-mcp': {
    title: 'DeepSeek + OpenCode MCP',
    subtitle: 'Model Context Protocol integration',
    sections: [
      { heading: 'What it is', items: ['Integrating DeepSeek models with OpenCode via the Model Context Protocol (MCP) for enhanced AI capabilities.', 'MCP provides structured context passing between AI models and tools.'] },
      { heading: 'Benefits', items: ['Structured context passing between models — maintain conversation state across tool calls', 'Tool-augmented reasoning — models can use file search, git, npm and more', 'Extensible plugin architecture — add new capabilities without modifying core', 'Fully local execution — no data leaves your machine'] },
      { heading: 'Setup', items: ['Configure DeepSeek provider in opencode.json', 'Enable MCP plugin for tool-augmented reasoning', 'Test with a multi-step task like "find all TODO comments and create an issue for each"'] },
    ]
  },
  'jarvis-voice': {
    title: 'Jarvis Voice',
    subtitle: 'AI Voice Studio — Yonjan Ventures',
    sections: [
      { heading: 'Platform: Murf', items: ['AI voice generator with 120+ natural voices across 20+ languages', 'Voice cloning & customization', 'API for programmatic access', 'Studio-quality voiceovers for videos, presentations, and ads', 'Full SSML support + team collaboration'] },
      { heading: 'Platform: Speechify Studio', items: ['Enterprise TTS with ultra-realistic neural voices', 'Fine-tuned pacing & emphasis control', 'API + SDK integration', 'Content, accessibility, and entertainment voiceovers'] },
      { heading: 'Platform: Copilot Audio Expression', items: ['Microsoft AI speech synthesis with "Speecha Ryan Voice"', 'Audio Expression with emotion control', 'Free via Microsoft Copilot labs', 'Natural narrations and audio content'] },
      { heading: 'Workflow', items: ['1. Script & Draft — Write with natural pacing markers', '2. Generate Voice — Choose platform, preview voices, adjust tone/speed', '3. Export & Publish — Download audio, integrate via API, or publish directly'] },
    ]
  },
  'project-graph': {
    title: 'Project Graph',
    subtitle: 'Interactive D3 force-directed graph of 33 projects',
    sections: [
      { heading: 'What it does', items: ['Generates an interactive force-directed graph visualizing all 33 projects with status, group, and connections.', 'Nodes are color-coded: green=active, dark=paused, blue=work, orange=wsl', 'Search bar filters projects in real-time', 'Hover shows project details: type, stack, tags, last activity'] },
      { heading: 'Project Groups', items: ['Work (13 projects) — ai-chat-demo, breevy-clone, electron-fastmind, nabil-bank-bot, next-fastmind, ruster, vite-tailwind-offline, yonjan-ventures, zai-playwright, and more', 'WSL (20 projects) — 3d-jungle-hike, ai-bank-chat, alpine-knowledge-graph, cnn-training, and 16 more'] },
      { heading: 'Tech Stack Distribution', items: ['Node.js based: 12 projects', 'Python based: 5 projects (nabil-bank-bot, credit-default, cnn-training, ai-bank-chat, zai-playwright)', 'Rust: 1 project (ruster)', 'Type: web (14), ml/ai (5), 3d (4), desktop (2), bot (2), lib (1), test (1)'] },
    ]
  },
  'vercel-pg-rag': {
    title: 'Vercel PG RAG',
    subtitle: 'PostgreSQL + RAG on Vercel',
    sections: [
      { heading: 'Architecture', items: ['RAG (Retrieval-Augmented Generation) pipeline deployed on Vercel with PostgreSQL storage.', 'Combines vector search (pgvector) with LLM generation for accurate, context-aware answers.'] },
      { heading: 'Components', items: ['PostgreSQL with pgvector extension for embedding storage and similarity search', 'Vercel serverless functions for API endpoints', 'LLM integration for answer generation based on retrieved context', 'Document chunking and embedding pipeline'] },
      { heading: 'Benefits', items: ['Single deployment platform (Vercel + Neon/Postgres)', 'Scalable serverless architecture', 'No separate vector database needed — pgvector inside Postgres', 'Low-latency hybrid search (keyword + vector)'] },
    ]
  },
  'premiere-bridge': {
    title: 'Premiere VLM Bridge',
    subtitle: 'vidchain + LLaVA + DeepSeek → color-coded Premiere markers',
    sections: [{ heading: 'Overview', items: ['AI-assisted video editing pipeline using VLM models for scene analysis and automated Premiere Pro markers.'] }],
    component: 'PremiereBridge',
  },
  'video-codecs': {
    title: 'Fast 4K Compression',
    subtitle: 'AV1 Blackwell + HEVC NVENC encode guide',
    sections: [{ heading: 'Overview', items: ['GPU-accelerated 4K encoding benchmarks and ffmpeg commands for RTX 3060/5060.'] }],
    component: 'VideoCodecs',
  },
  'vpn-hack': {
    title: 'VPN Hack',
    subtitle: 'Network tunneling & secure proxy setup',
    sections: [
      { heading: 'Overview', items: ['Guide for setting up VPN tunnels and network proxies for secure communication.', 'Covers WireGuard, OpenVPN, and custom SSH tunneling configurations for privacy and access.'] },
      { heading: 'Technologies', items: ['WireGuard — Modern, fast VPN protocol with kernel-level performance', 'OpenVPN — Mature, feature-rich VPN with broad client support', 'SSH Tunneling — Quick port forwarding and SOCKS proxies', 'DNS over HTTPS/TLS — Prevent DNS leaks'] },
      { heading: 'Use Cases', items: ['Bypass geo-restrictions for development resources', 'Secure public Wi-Fi traffic on laptops and mobile', 'Access internal networks via bastion host tunneling', 'Privacy protection for research and communication'] },
    ]
  },
}
