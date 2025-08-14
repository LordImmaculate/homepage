import github from "$lib/assets/github.png";

export type Social = {
  href: string;
  alt: string;
  src: string;
};

export const socials: Social[] = [
  {
    href: "https://open.spotify.com/user/20c9ysx809ffhxj4qkzy5374d",
    alt: "Spotify",
    src: github
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png",
    alt: "Steam",
    href: "https://steamcommunity.com/id/lordimmaculate"
  },
  {
    href: "https://open.spotify.com/user/20c9ysx809ffhxj4qkzy5374d",
    alt: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
  }
];
