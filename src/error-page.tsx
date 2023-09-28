import { useRouteError } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        // backgroundColor: primary,
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button href="/" variant="contained">
        Back Home
      </Button>
    </Box>
  );
}
