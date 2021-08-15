import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Launch } from "../Launches.interface";
import LaunchHeader from "./LaunchHeader.view";
import LaunchImageList from "./LaunchImageList.view";

interface LaunchProps {
  item: Launch;
}

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
    width: "100%",
  },
}));

const LaunchCard: React.FC<LaunchProps> = ({ item }: LaunchProps) => {
  const classes = useStyles();
  const { mission_name, launch_date_local, ships } = item;
  return (
    <Card className={classes.root}>
      <LaunchHeader mission_name={mission_name} launch_date_local={launch_date_local} />
      <LaunchImageList ships={ships} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.launch_site.site_name_long}
        </Typography>
      </CardContent>
      <List component="div" role="list">
        <ListItem role="listitem">
          <ListItemText
            primary="Rocket Name"
            secondary={item.rocket.rocket_name}
          />
        </ListItem>
      </List>
      <CardActions>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={item.links.wikipedia}
        >
          Wikipedia
        </Button>
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
