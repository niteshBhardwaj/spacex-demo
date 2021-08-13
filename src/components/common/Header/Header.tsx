import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h1">
          SpaceX
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
