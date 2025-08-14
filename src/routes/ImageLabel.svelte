<script lang="ts">
  const {
    src,
    alt,
    href = undefined
  }: { src: string; alt: string; href?: string } = $props();
</script>

<a {href} class="group relative" target="_blank" rel="noopener noreferrer">
  <img
    {src}
    {alt}
    class="h-8 w-8 transition-transform ease-in hover:-translate-y-1"
  />
  <span
    class="text-sm p-2 whitespace-nowrap rounded-2xl mt-1 border left-1/2 -translate-x-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300 transparent backdrop-brightness-95"
    >{alt}</span
  >
</a>
