<script lang="ts">
  import Input from "./Input.svelte";
  import type { HTMLInputAttributes } from "svelte/elements";

  const props: HTMLInputAttributes & { label: string } = $props();
</script>

<div class="flex flex-col gap-1">
  <label for={props.id}
    >{props.label}{#if props.required}
      <span class="text-sm text-red-500 ml-2">*</span>
    {/if}</label
  >
  <Input id={props.id} {...props} />
</div>
