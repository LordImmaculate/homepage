<script lang="ts">
  import clsx from "clsx";
  import type { HTMLInputAttributes } from "svelte/elements";

  const props: HTMLInputAttributes = $props();
  const className = clsx(
    props.class,
    "p-2 rounded-2xl border-2 border-rose-pine-highlight-high"
  );
</script>

<input {...props} class={className} />
