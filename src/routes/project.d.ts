export type Project = {
	name: string;
	description: string;
	technologies: Technology[];
	links: {
		github: string;
		demo: string | null;
	};
};

export type Technology = {
	name: string;
	icon: string;
};
