export default function Welcome() {
  return (
    <div class="flex items-center justify-center h-full">
      <div class="text-center max-w-lg">
        <h1 class="text-4xl font-bold text-primary mb-4">fucheai</h1>
        <p class="text-gray-400 text-lg">Select a project from the sidebar to explore.</p>
        <div class="mt-8 flex justify-center gap-3">
          <div class="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style="animation-delay:0ms" />
          <div class="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style="animation-delay:150ms" />
          <div class="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style="animation-delay:300ms" />
        </div>
      </div>
    </div>
  )
}
