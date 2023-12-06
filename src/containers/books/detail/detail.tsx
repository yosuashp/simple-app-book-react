import { Box, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import CommonPage from '../../../components/common-page/common-page';
import useAction from './detail.hooks';
// import './detail.css';

export default function Detail() {
  const { loading, book } = useAction();

  const renderContent = () => {
    if (loading) {
      return (
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: '75vh',
          }}
        >
          <CircularProgress />;
        </Stack>
      );
    }
    return (
      <Stack
        direction="row"
        alignItems="start"
        justifyContent="space-between"
        gap={2}
        sx={{
          minHeight: '75vh',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <h3 style={{textAlign:'center'}}>Detail Information</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>Title</Box>
              <Box sx={{ display: 'block' }}>{book?.title}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>Author</Box>
              <Box sx={{ display: 'block' }}>{book?.author}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>ISBN</Box>
              <Box sx={{ display: 'block' }}>{book?.isbn}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>
                Published Year
              </Box>
              <Box sx={{ display: 'block' }}>{book?.published_year}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>Genre</Box>
              <Box sx={{ display: 'block' }}>{book?.genre}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>
                Total Copies
              </Box>
              <Box sx={{ display: 'block' }}>{book?.total_copies}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'block', fontWeight: 'bold' }}>
                Copies Available
              </Box>
              <Box sx={{ display: 'block' }}>{book?.copies_available}</Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }}>
          <h3>Cover</h3>
          <Paper
            sx={{ width: '100%', height: '20rem', background: 'lightgrey' }}
          >
            <img
              alt="cover"
              src={book?.cover?.secure_url}
              width={book?.cover?.width}
              height={book?.cover?.height}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundPosition: 'center top',
              }}
            />
          </Paper>
        </Box>
      </Stack>
    );
  };

  return (
    <CommonPage withBack>
    <h1>Detail Book</h1>
      {renderContent()}
    </CommonPage>
  );
}