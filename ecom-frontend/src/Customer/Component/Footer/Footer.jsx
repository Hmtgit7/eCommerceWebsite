// import { Button, Grid, Link, Typography } from "@mui/material";
// import React from "react";

// const Footer = () => (
//   <div>
//     <Grid
//       className="bg-white text-black text-center mt-10 border"
//       container
//       sx={{
//         bgcolor: "black",
//         color: "white",
//         py: 3,
//       }}
//     >
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className="pb-5" variant="h6">
//           Company
//         </Typography>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             About
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Blog
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Press
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Jobs
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Partners
//           </Button>
//         </div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className="pb-5" variant="h6">
//           Company
//         </Typography>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             About
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Blog
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Press
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Jobs
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Partners
//           </Button>
//         </div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className="pb-5" variant="h6">
//           Company
//         </Typography>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             About
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Blog
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Press
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Jobs
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Partners
//           </Button>
//         </div>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className="pb-5" variant="h6">
//           Company
//         </Typography>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             About
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Blog
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Press
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Jobs
//           </Button>
//         </div>
//         <div>
//           <Button className="pb-5" variant="h6" gutterBottom>
//             Partners
//           </Button>
//         </div>
//       </Grid>
//       <Grid className="pt-20" item xs={12}>
//         <Typography variant="body2" component="p" align="center">
//           &copy; 2024 spark_developie. All rights reserved.
//         </Typography>
//         <Typography variant="body2" component="p" align="center">
//           made with ❤️ by spark_developie
//         </Typography>
//         <Typography variant="body2" component="p" align="center">
//           Icons made by{" "}
//           <Link href="#" color="inherit" underline="always">
//             Freepik
//           </Link>{" "}
//           from{""}
//           <Link href="#" color="inherit" underline="always">
//             Freepik
//           </Link>
//         </Typography>
//       </Grid>
//     </Grid>
//   </div>
// );

// export default Footer;

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
    className="shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[10]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              spark_developie
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
