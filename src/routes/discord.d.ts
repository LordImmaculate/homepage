// export type DiscordResponse = SuccessResponse | ErrorResponse;

type DiscordResponse = {
	data: Data | null;
	error: Error | null;
	success: boolean;
};

// type ErrorResponse = {
// 	error: Error;
// 	success: boolean;
// };

type Data = {
	kv: Record<string, unknown>;
	discord_user: DiscordUser;
	activities: Activity[];
	discord_status: string;
	active_on_discord_web: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_embedded: boolean;
	listening_to_spotify: boolean;
	spotify: unknown;
};

type DiscordUser = {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	clan: null;
	primary_guild: PrimaryGuild;
	avatar_decoration_data: null;
	collectibles: null;
	bot: boolean;
	global_name: string;
	display_name: string;
	public_flags: number;
	display_name_styles: null;
};

type PrimaryGuild = {
	tag: string;
	identity_guild_id: string;
	badge: string;
	identity_enabled: boolean;
};

type Activity = {
	flags: number;
	id: string;
	name: string;
	type: number;
	state: string;
	metadata: Record<string, unknown>;
	session_id: string;
	details: string;
	application_id: string;
	timestamps: Timestamps;
	assets: Assets;
	created_at: number;
};

type Timestamps = {
	start: number;
};

type Assets = {
	large_image: string;
	large_text: string;
	small_image: string;
	small_text: string;
};

type Error = {
	code: string;
	message: string;
};
