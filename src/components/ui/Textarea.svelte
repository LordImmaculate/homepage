<script lang="ts">
  import clsx from "clsx";
  import type { HTMLTextareaAttributes } from "svelte/elements";

  const props: HTMLTextareaAttributes = $props();
  const className = clsx(
    props.class,
    "p-2 rounded-2xl border-2 border-rose-pine-highlight-high"
  );
</script>

<textarea {...props} class={className}></textarea>
