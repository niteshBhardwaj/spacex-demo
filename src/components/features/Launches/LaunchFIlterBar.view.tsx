import { AppBar, makeStyles, TextField, Toolbar, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { LaunchContext } from "./Launch.context";

export type FilterKeys = Record<string, string>;

const useStyles = makeStyles(() => ({
    search: {
      margin: 20,
      marginTop: 0,
    },
  }));
  
const LaunchFilterBar = (): JSX.Element => {
  const { refetchData } = useContext(LaunchContext);
  const [data , setData] = useState<FilterKeys>({mission_name: '', rocket_name: ''});
  const updateData = (key: string) => (event: any): void => {
      data[key] = event?.target?.value;
      setData({ ...data });
      refetchData && refetchData({ find: { ...data }});
  }
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" style={{width: '100%'}} >
      <Toolbar>
        <Typography variant="h6">
          Filter: 
        </Typography>
        <TextField
          label="Search mission"
          value={data.mission_name}
          onChange={updateData('mission_name')}
          className={classes.search}
        />
        <TextField
          label="Search rocket name"
          value={data.rocket_name}
          onChange={updateData('rocket_name')}
          className={classes.search}
        />
      </Toolbar>
    </AppBar>
  );
};

export default LaunchFilterBar;
