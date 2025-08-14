<script lang="ts">
	import '@fontsource/jetbrains-mono';
	import pfp from '$lib/assets/links.jpg';
	import type { DiscordResponse } from './discord';
	import ActivityBox from './ActivityBox.svelte';
	import { technologies } from './technologies';
	import { socials } from './socials';

	const promise: Promise<DiscordResponse> = fetch(
		'https://api.lanyard.rest/v1/users/694817835209326652'
	).then((x) => x.json());
</script>

<div class="flex flex-row items-center justify-center lg:min-h-screen">
	<div
		class="lg flex h-screen w-full flex-col items-center justify-center gap-4 border-2 border-main text-white shadow-2xl backdrop-blur-xl backdrop-brightness-75 lg:h-auto lg:w-auto lg:rounded-4xl lg:p-52 lg:pt-2"
	>
		{#await promise}
			<div class="flex flex-row items-center justify-center gap-4 p-2">
				<div class="flex flex-col items-start">
					<h1 class="text-xl">Immaculate</h1>
					<p class="text-sm">@lordimmaculate</p>
					<p class="text-sm">TypeScript Programmer</p>
				</div>
				<img src={pfp} class="h-auto w-20 rounded-full" alt="Profile" />
			</div>
		{:then { data, error }}
			{#if !data}
				Error
			{:else}
				<div class="flex flex-row items-center justify-center gap-4 p-2">
					<div class="flex flex-col items-start">
						<h1 class="text-xl">{data.discord_user.global_name}</h1>
						<p class="text-sm">@lordimmaculate</p>
						<p class="text-sm">TypeScript Programmer</p>
					</div>
					<div class="relative">
						<img src={pfp} class="h-auto w-20 rounded-full" alt="Profile" />
						<svg
							class="absolute right-[1.5px] bottom-[1.5px]"
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								r="10"
								cx="10"
								cy="10"
								fill={data.discord_status == 'online' ? '#43a35a' : '#707890'}
							/>
						</svg>
					</div>
				</div>
				<div class="grid gap-4 lg:grid-cols-2">
					{#each data.activities.slice(0, 2) as activity}
						<ActivityBox {activity} class={data.activities.length === 1 ? 'col-span-2' : ''} />
					{/each}
				</div>
			{/if}
		{/await}
		<h2 class="text-xl">Links</h2>
		<div class="flex h-auto flex-row gap-2">
			{#each socials as social}
				<a href={social.href} target="_blank">
	<img
		src={social.src}
		alt={social.alt}
		class="h-auto w-10 object-contain transition-transform ease-in hover:-translate-y-1"
	/>
</a>
			{/each}
		</div>
		<h2 class="text-xl">Technologies</h2>
		<div class="flex flex-row gap-2">
			{#each technologies as tech}
				<img
					src={tech.icon}
					alt={tech.name}
					class="h-8 w-8 transition-transform ease-in hover:-translate-y-1"
				/>
			{/each}
		</div>
		<!-- <h2 class="text-xl">Projects</h2> -->
	</div>
</div>

<style>
	:global(body) {
		background-image: url(https://hypr.land/imgs/blog/contestWinners/corndog.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		font-family: 'JetBrains Mono';
	}
</style>
