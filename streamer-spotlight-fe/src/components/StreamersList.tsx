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
} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { styled } from '@mui/system';

import { useGetStreamers } from '../api/streamers/get-streamers';
import { useVoteStreamer } from '../api/streamers/vote-streamer';

const StyledButtonBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '50px',
});

const StreamerList = () => {
  const { data: streamers, isLoading } = useGetStreamers();
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
    <>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Streamers list
      </Typography>
      <List>
        {streamers &&
          streamers?.map((streamer) => (
            <ListItem key={streamer.id}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {streamer.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {streamer.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <StyledButtonBox>
                    <IconButton
                      edge="end"
                      aria-label="upvote"
                      onClick={() => handleUpvote(streamer.id)}
                    >
                      <ThumbUp color="success" />
                    </IconButton>
                    <Typography>{streamer.upvotes}</Typography>
                  </StyledButtonBox>
                  <StyledButtonBox>
                    <IconButton
                      edge="end"
                      aria-label="downvote"
                      onClick={() => handleDownvote(streamer.id)}
                    >
                      <ThumbDown color="error" />
                    </IconButton>
                    <Typography>{streamer.downvotes}</Typography>
                  </StyledButtonBox>
                </CardActions>
              </Card>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default StreamerList;
