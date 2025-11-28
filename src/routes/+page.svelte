<script lang="ts">
  import "@fontsource/jetbrains-mono";
  import type { DiscordResponse } from "@/types/discord";
  import { technologies } from "@/server/technologies";
  import { socials } from "@/server/socials";
  import ImageLabel from "@/components/ImageLabel.svelte";
  import { onMount, onDestroy } from "svelte";

  export let data: {
    discordData: DiscordResponse["data"];
    error: DiscordResponse["error"] | string;
  };

  let { discordData, error } = data;
  let interval: ReturnType<typeof setInterval>;

  function fetchDiscordData(): Promise<DiscordResponse> {
    return fetch("https://api.lanyard.rest/v1/users/694817835209326652").then(
      (x) => x.json()
    );
  }

  async function updateData() {
    try {
      const response = await fetchDiscordData();
      discordData = response.data;
      if (!discordData) {
        discordData = {
          kv: {},
          discord_user: {
            id: "",
            username: "",
            avatar: "",
            discriminator: "",
            clan: null,
            primary_guild: {
              tag: "",
              identity_guild_id: "",
              badge: "",
              identity_enabled: false
            },
            avatar_decoration_data: null,
            collectibles: null,
            bot: false,
            global_name: "Immaculate",
            display_name: "",
            public_flags: 0,
            display_name_styles: null
          },
          activities: [],
          discord_status: "",
          active_on_discord_web: false,
          active_on_discord_desktop: false,
          active_on_discord_mobile: false,
          active_on_discord_embedded: false,
          listening_to_spotify: false,
          spotify: null
        };
      }

      for (const activity of discordData.activities) {
        if (activity.assets?.large_image) {
          if (activity.assets.large_image.includes("spotify:")) {
            const spotifyID = activity.assets.large_image.split(":")[1];
            activity.assets.large_image = `https://i.scdn.co/image/${spotifyID}`;
            activity.details = `Listening to ${activity.details}`;
            activity.state = `By ${activity.state}`;
          } else if (activity.assets.large_image.includes("https")) {
            const URL = activity.assets.large_image.split("https/")[1];
            activity.assets.large_image = `https://${URL}`;
          }
        }
      }

      error = response.error;
    } catch (err) {
      error = err as string;
    }
  }

  onMount(async () => {
    // Initial load
    await updateData();

    // Set up periodic updates
    interval = setInterval(() => {
      updateData();
    }, 5000);
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="">
  <h1 class="text-5xl mb-4 mt-50">Hi!</h1>
  <h1 class="text-3xl mb-4">
    I'm <span
      class="bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 to-pink-600"
      >Immaculate</span
    >.
  </h1>
  <h2 class="text-2xl mb-6">
    A <span
      class="bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-blue-400"
      >TypeScript</span
    > enthusiast and open-source contributor.
  </h2>
  <div class="flex gap-4 mb-6">
    {#each technologies as technology}
      <ImageLabel
        src={technology.icon}
        alt={technology.name}
        href={technology.href}
      />
    {/each}
  </div>
  <div class="flex gap-4 mb-6">
    {#each socials as social}
      <ImageLabel src={social.icon} alt={social.name} href={social.href} />
    {/each}
  </div>
</div>
