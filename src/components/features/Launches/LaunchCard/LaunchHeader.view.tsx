import { CardHeader, Checkbox, FormControlLabel } from "@material-ui/core";
import { Launch } from "../Launches.interface";

type LaunchHeaderProps = Pick<Launch, "mission_name" | "launch_date_local">;

const LaunchHeader = ({
  mission_name,
  launch_date_local,
}: LaunchHeaderProps): JSX.Element => {
  return (
    <CardHeader
      title={mission_name}
      subheader={launch_date_local}
      action={
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={() => undefined}
              name="checkedA"
            />
          }
          label="Compare"
        />
      }
    />
  );
};

export default LaunchHeader;
