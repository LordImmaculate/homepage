import type { Technology } from "../types/project";
import prisma from "$lib/assets/prisma.svg";

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org/"
  },
  {
    name: "Svelte",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    href: "https://svelte.dev/"
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    href: "https://nextjs.org/"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    href: "https://react.dev/"
  },
  {
    name: "Bun",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    href: "https://bun.sh/"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    href: "https://tailwindcss.com/"
  },
  {
    name: "Prisma",
    icon: prisma,
    href: "https://www.prisma.io/"
  }
];
