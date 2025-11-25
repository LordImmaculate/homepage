<script lang="ts">
  const {
    src,
    alt,
    href = undefined
  }: { src: string; alt: string; href?: string; w?: number } = $props();
</script>

<a {href} class="group relative" target="_blank" rel="noopener noreferrer">
  <img
    {src}
    {alt}
    class={`h-8 w-8 transition-transform ease-in hover:-translate-y-1`}
  />
  <span
    class="text-sm p-2 z-10 whitespace-nowrap rounded-2xl mt-1 border left-1/2 -translate-x-1/2 absolute opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ease-in duration-300 bg-rose-pine-surface"
    >{alt}
  </span>
</a>
