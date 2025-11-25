<script lang="ts">
  import clsx from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const props: HTMLButtonAttributes = $props();
  const className = clsx(
    props.class,
    "p-2 rounded-2xl border-2 border-rose-pine-highlight-high"
  );
</script>

<!-- svelte-ignore slot_element_deprecated -->
<button {...props} class={className}><slot /></button>
