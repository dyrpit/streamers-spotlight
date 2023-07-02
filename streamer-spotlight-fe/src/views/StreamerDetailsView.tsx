import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  SvgIcon,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useGetStreamer } from '../api/streamers/get-streamer';

interface IconsMap {
  [key: string]: {
    icon?: React.ReactElement;
    bgcolor?: string;
    color?: string;
  };
}

const iconsMap: IconsMap = {
  youtube: {
    icon: <YouTubeIcon color="inherit" sx={{ height: 20, ml: 1 }} />,
    bgcolor: '#FF0000',
    color: '#FFFFFF',
  },
  twitch: {
    icon: (
      <SvgIcon color="inherit" sx={{ height: 20, ml: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          stroke="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
          <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
        </svg>
      </SvgIcon>
    ),
    bgcolor: '#9146FF',
    color: '#FFFFFF',
  },
  tiktok: {
    icon: (
      <SvgIcon color="inherit" sx={{ height: 20, ml: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-tiktok"
          viewBox="0 0 16 16"
        >
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
        </svg>
      </SvgIcon>
    ),
    bgcolor: '#000000',
    color: '#FFFFFF',
  },
  kick: {
    icon: (
      <SvgIcon color="inherit" sx={{ height: 20, ml: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="933"
          height="300"
          viewBox="0 0 933 300"
          fill="currentColor"
        >
          <g clip-path="url(#clip0_9790_492437)">
            <g clip-path="url(#clip1_9790_492437)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H100V66.6667H133.333V33.3333H166.667V0H266.667V100H233.333V133.333H200V166.667H233.333V200H266.667V300H166.667V266.667H133.333V233.333H100V300H0V0ZM666.667 0H766.667V66.6667H800V33.3333H833.333V0H933.333V100H900V133.333H866.667V166.667H900V200H933.333V300H833.333V266.667H800V233.333H766.667V300H666.667V0ZM300 0H400V300H300V0ZM533.333 0H466.667V33.3333H433.333V266.667H466.667V300H533.333H633.333V200H533.333V100H633.333V0H533.333Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_9790_492437">
              <rect width="933" height="300" fill="white" />
            </clipPath>
            <clipPath id="clip1_9790_492437">
              <rect width="933.333" height="300" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    ),
    bgcolor: '#53FC18',
    color: '#000000',
  },
  rumble: {
    icon: (
      <SvgIcon color="inherit" sx={{ height: 20, ml: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.2"
          viewBox="0 0 1441 1583"
          width="16"
          height="16"
          fill="currentColor"
        >
          <title>rumble-full-logo-v4-svg</title>
          <path
            id="Layer"
            fill-rule="evenodd"
            className="s0"
            d="m1339.3 537.2c32.1 35.2 57.5 75.9 74.8 120.3 17.2 44.4 26.1 91.5 26.2 139.2 0.1 47.6-8.6 94.8-25.7 139.2-17.1 44.4-42.3 85.3-74.3 120.6-57.2 63.1-119 121.9-184.9 175.9-65.9 54-135.7 103-208.9 146.7-73.1 43.6-149.4 81.8-228.2 114.2-78.8 32.4-159.9 59-242.6 79.4-42.2 10.6-86.1 12.9-129.1 6.8-43.1-6.1-84.6-20.4-122.2-42.3-37.7-21.8-70.7-50.7-97.4-85-26.6-34.4-46.4-73.6-58.2-115.4-100.4-343-85.6-730.8 11.2-1075.3 51-180.9 221.3-294.5 396.7-252.7 324.8 77.4 629.6 276.7 862.6 528.4zm-457.3 356.2c61.2-48.4 61.2-142.7 0-192.6q-32.6-27.1-66.8-52.1-34.2-25.1-69.9-48-35.6-22.9-72.6-43.7-37-20.7-75.2-39.2c-70.3-33.6-148.8 13.3-160.1 93.3-17.3 122.3-20.4 245.6-9.1 362.8 7.6 81.1 85.1 129.5 156.5 98.4q39.9-17.2 78.6-37 38.7-19.8 76-42.2 37.3-22.4 73-47.2 35.7-24.8 69.6-52z"
          />
        </svg>
      </SvgIcon>
    ),
    bgcolor: '#85c742',
    color: '#ffffff',
  },
};

const StreamerDetailsView: React.FC = () => {
  const { streamerId } = useParams();

  const { data: streamer, isLoading } = useGetStreamer(streamerId || '');

  if (isLoading) {
    return <CircularProgress size={100} />;
  }

  if (!streamer) {
    return null;
  }

  const { name, description, platforms } = streamer;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            width: '300px',
            height: '300px',
            m: 'auto',
            backgroundImage: `url(https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png)`,
          }}
        ></Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container direction="column" height="100%">
          <Typography variant="h3" mb={3}>
            {name}
          </Typography>
          <Typography flexGrow={1} mb={3}>
            {description}
          </Typography>
          <Grid container gap={2}>
            {platforms.map((platform) => {
              const { icon, bgcolor, color } =
                iconsMap[platform.name.toLowerCase()];
              return (
                <Chip
                  key={platform.id}
                  icon={icon}
                  label={platform.name}
                  variant="outlined"
                  sx={{ bgcolor, color }}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StreamerDetailsView;
