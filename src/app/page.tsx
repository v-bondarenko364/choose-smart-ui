import AuthCard from '@/components/home/AuthCard';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
      }}
    >
      <AuthCard />
    </Box>
  );
}
