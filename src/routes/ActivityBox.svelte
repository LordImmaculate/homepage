<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import type { Activity } from "./discord";

  const {
    activity,
    class: className
  }: { activity: Activity; class: ClassValue } = $props();
</script>

<div
  class={`${className} mx-2 flex flex-row items-center justify-between gap-4 rounded-4xl border p-4 backdrop-brightness-75 lg:mx-0`}
>
  <div class="flex flex-col items-start">
    <h1 class="text-xl">{activity.name}</h1>
    <p class="text-sm">{activity.details}</p>
    <p class="text-sm">{activity.state}</p>
  </div>
  <div>
    <img
      src={activity.assets.large_image}
      class="h-auto w-20 rounded-2xl"
      alt="Profile"
    />
  </div>
</div>
