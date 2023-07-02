import { useNavigate } from 'react-router-dom';

import {
  List,
  ListItem,
  IconButton,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Tooltip,
} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { styled } from '@mui/system';

import { useGetStreamers } from '../api/streamers/get-streamers';
import { useVoteStreamer } from '../api/streamers/vote-streamer';

import { REFETCH_INTERVAL } from '../constants/query-client';

const StyledButtonBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '70px',
});

const StreamerList = () => {
  const navigate = useNavigate();

  const { data: streamers, isLoading } = useGetStreamers({
    refetchInterval: REFETCH_INTERVAL,
  });
  const { mutate: voteStreamer } = useVoteStreamer();

  const handleUpvote = (id: string) => {
    voteStreamer({ id, voteType: 'upvote' });
  };

  const handleDownvote = (id: string) => {
    voteStreamer({ id, voteType: 'downvote' });
  };

  if (isLoading) {
    return <CircularProgress size={100} />;
  }

  return (
    <Box sx={{ pb: 4, pt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        Streamers list
      </Typography>
      <List>
        {streamers &&
          streamers?.map((streamer) => (
            <ListItem
              key={streamer.id}
              onClick={() => navigate(`/${streamer.id}`)}
            >
              <Card
                sx={{
                  width: '100%',
                  cursor: 'pointer',
                  transition: '0.2s',
                  ':hover': {
                    bgcolor: '#f0f0f0',
                  },
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {streamer.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {streamer.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="Upvote">
                    <StyledButtonBox>
                      <IconButton
                        edge="end"
                        aria-label="upvote"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpvote(streamer.id);
                        }}
                        sx={{ mr: 0.25 }}
                      >
                        <ThumbUp color="success" />
                      </IconButton>
                      <Typography>{streamer.upvotes}</Typography>
                    </StyledButtonBox>
                  </Tooltip>
                  <Tooltip title="Downvote">
                    <StyledButtonBox>
                      <IconButton
                        edge="end"
                        aria-label="downvote"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownvote(streamer.id);
                        }}
                        sx={{ mr: 0.25 }}
                      >
                        <ThumbDown color="error" />
                      </IconButton>
                      <Typography>{streamer.downvotes}</Typography>
                    </StyledButtonBox>
                  </Tooltip>
                </CardActions>
              </Card>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default StreamerList;
