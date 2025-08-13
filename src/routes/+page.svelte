<script lang="ts">
	import SocialIcon from './SocialIcon.svelte';
	import '@fontsource/jetbrains-mono';
	import links from '$lib/assets/links.jpg';
	import type { DiscordResponse } from './discord';

	const promise: Promise<DiscordResponse> = fetch(
		'https://api.lanyard.rest/v1/users/694817835209326652'
	).then((x) => x.json());
</script>

<div class="flex flex-row items-center justify-center lg:min-h-screen">
	<div
		class="lg flex h-screen w-full flex-col items-center justify-center gap-4 border-2 border-main text-white shadow-2xl backdrop-blur-xl backdrop-brightness-75 lg:h-auto lg:w-auto lg:rounded-4xl lg:p-52 lg:pt-2"
	>
		<div
			class="flex flex-row items-center justify-center gap-4 rounded-4xl border p-2 backdrop-brightness-75"
		>
			<h1 class="text-xl">Immaculate</h1>
			<img src={links} class="h-auto w-20 rounded-full" alt="Profile" />
		</div>
		{#await promise}
			<!-- optionally show something while promise is pending -->
		{:then res}
			{#if !res.data}
				Error
			{:else}
				<div class="flex flex-col items-center">
					<h2 class="mb-4 text-2xl font-bold">Discord Status</h2>
					{#if res.data.discord_status === 'online'}
						<p class="text-green-500">Online</p>
					{:else}
						<p class="text-red-500">Offline</p>
					{/if}
				</div>
			{/if}
		{:catch error}
			<!-- optionally show something while promise was rejected -->
		{/await}
		<div class="flex h-auto flex-row gap-2">
			<SocialIcon
				src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png"
				alt="Discord"
				href="https://google.com"
			/>
			<SocialIcon
				href="https://google.com"
				alt="Spotify"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
			/>
		</div>
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
