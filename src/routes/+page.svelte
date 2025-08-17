<script lang="ts">
  import "@fontsource/jetbrains-mono";
  import pfp from "$lib/assets/pfp.png";
  import type { DiscordResponse } from "./discord";
  import ActivityBox from "./ActivityBox.svelte";
  import { technologies } from "./technologies";
  import { socials } from "./socials";
  import ImageLabel from "./ImageLabel.svelte";
  import { onMount, onDestroy } from "svelte";

  export let data: {
    discordData: DiscordResponse["data"];
    error: DiscordResponse["error"] | string;
  };

  let { discordData, error } = data;
  let interval: number;

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

{#if false}
  <span
    class="text-white border border-main p-4 rounded-2xl backdrop-blur-2xl backdrop-brightness-75 text-center fixed left-1/2 top-1/2 -translate-1/2"
    >Loading...</span
  >
{:else}
  <div class="flex flex-row items-center justify-center xl:min-h-screen">
    <div
      class="flex h-screen w-full flex-col items-center justify-center gap-4 border-2 border-main text-white shadow-2xl backdrop-blur-xl backdrop-brightness-75 xl:h-auto xl:w-auto xl:rounded-4xl xl:min-w-3xl xl:pb-72 xl:p-2"
    >
      <div class="flex flex-row items-center justify-center gap-4 p-2">
        <div class="flex flex-col items-start">
          <h1 class="text-xl">{discordData.discord_user.global_name}</h1>
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
              fill={discordData.discord_status == "online"
                ? "#43a35a"
                : "#707890"}
            />
          </svg>
        </div>
      </div>
      <div class="grid gap-4 xl:grid-cols-2">
        {#each discordData.activities.slice(0, 2) as activity}
          <ActivityBox
            {activity}
            class={discordData.activities.length === 1 ? "col-span-2" : ""}
          />
        {/each}
      </div>

      <h2 class="text-xl">Links</h2>
      <div class="flex h-auto flex-row gap-2">
        {#each socials as social}
          <ImageLabel src={social.icon} alt={social.name} href={social.href} />
        {/each}
      </div>
      <h2 class="text-xl">Technologies</h2>
      <div class="flex flex-row gap-2">
        {#each technologies as tech}
          <ImageLabel src={tech.icon} alt={tech.name} />
        {/each}
      </div>
      <!-- <h2 class="text-xl">Projects</h2> -->
    </div>
  </div>
{/if}

<style>
  :global(body) {
    background-image: url("/bg.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    font-family: "JetBrains Mono";
  }
</style>
