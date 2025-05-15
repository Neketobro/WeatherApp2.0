import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import { NavPanel, PageLayout } from '@components';

export function ErrorPage() {
  return (
    <PageLayout
      renderHeader={() => <NavPanel />}
      renderMain={() => (
        <Box
          sx={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
          }}
        >
          <Typography component="p" variant="h1">
            Error 404
          </Typography>
          <Typography component="p" variant="h2">
            Page not found
          </Typography>
          <NavLink to="/">
            <Button variant="outlined">Return to the main page</Button>
          </NavLink>
        </Box>
      )}
    />
  );
}