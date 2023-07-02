type StreamingPlatformType =
| 'Twitch'
| 'YouTube'
| 'TikTok'
| 'Kick'
| 'Rumble';

export interface StreamingPlatform {
id: string;
name: StreamingPlatformType;
}

export interface CreateStreamerFormData {
  description: string;
  name: string;
  platforms: StreamingPlatform[];
}
