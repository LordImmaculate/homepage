<script lang="ts">
  import Textarea from "./Textarea.svelte";
  import type { HTMLTextareaAttributes } from "svelte/elements";

  const props: HTMLTextareaAttributes & { label: string } = $props();
</script>

<div class="flex flex-col gap-1">
  <label for={props.id}
    >{props.label}{#if props.required}
      <span class="text-sm text-red-500 ml-2">*</span>
    {/if}</label
  >
  <Textarea id={props.id} {...props} />
</div>
