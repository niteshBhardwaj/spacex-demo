import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
import { Launch } from "../Launches.interface";

const useStyles = makeStyles((theme) => ({
    imageList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  }));
type LaunchImageListProps = Pick<Launch, "ships">;


const LaunchImageList = ({ ships } : LaunchImageListProps): JSX.Element => {
    const classes = useStyles();
    return (<ImageList className={classes.imageList} cols={2.1}>
        {ships?.map((ship) => !!ship && (
          <ImageListItem key={ship.name}>
            <img src={ship.image} alt={ship.home_port} />
            <ImageListItemBar
              title={ship.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>)
}

export default LaunchImageList;