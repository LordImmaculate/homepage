import type { DiscordResponse } from "./discord";

async function fetchDiscordData(): Promise<DiscordResponse> {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/694817835209326652"
  );
  const data = await res.json();

  return data;
}

export async function load() {
  try {
    const response = await fetchDiscordData();
    let data = response.data;
    if (!data) {
      data = {
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

    for (const activity of data.activities) {
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

    return {
      discordData: data
    };
  } catch (err) {
    return {
      error: err as string
    };
  }
}
