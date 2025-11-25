<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import type { Activity } from './discord';

	const { activity, class: className }: { activity: Activity; class: ClassValue } = $props();

	if (activity.assets.large_image.includes('spotify:')) {
		const spotifyID = activity.assets.large_image.split(':')[1];
		activity.assets.large_image = `https://i.scdn.co/image/${spotifyID}`;

		activity.details = `Listening to ${activity.details}`;
		activity.state = `By ${activity.state}`;
	} else if (activity.assets.large_image.includes('https')) {
		const URL = activity.assets.large_image.split('https/')[1];
		activity.assets.large_image = `https://${URL}`;
	}
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
		<img src={activity.assets.large_image} class="h-auto w-20 rounded-2xl" alt="Profile" />
	</div>
</div>
