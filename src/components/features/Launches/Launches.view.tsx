import { useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";
import { Launch, LaunchesData, LaunchesPast } from "./Launches.interface";
import { LAUNCHES_QUERY } from "./Launches.query";
import LaunchFilterBar, { FilterKeys } from "./LaunchFIlterBar.view";
import LaunchInfiniteScroll from "./LaunchInfiniteScroll.view";
import { LaunchContext } from "./Launch.context";
import { useRef } from "react";

interface VariablesProps {
    limit: number;
    find?: FilterKeys;
}
const Launches = (): JSX.Element => {
  const [variables, setVariables] = useState<VariablesProps>({ limit: 5 });
  const timer = useRef<any>(); 
  const { data, loading, error, fetchMore, refetch } = useQuery(
    LAUNCHES_QUERY,
    {
      variables,
      notifyOnNetworkStatusChange: true,
    }
  );
  const [hasNextPage, setNextPage] = useState<boolean>(true);
  const { launchesPast } = data || ({} as LaunchesPast);
  const loadNextData = async () => {
    const { data } = (await fetchMore({
      variables: { limit: 5, offset: launchesPast.length },
    })) as LaunchesData;
    if (!data?.launchesPast?.length) setNextPage(false);
  };
  const refetchData = (data: any): void => {
      if(data.find) setVariables({ ...variables, ...data });
  };
  useEffect(() => {
    if(variables.find) {
        clearTimeout(timer.current);
        // delay refetch;
        timer.current = setTimeout(() => {
            refetch();
            setNextPage(true);
        }, 300);
    }
    return () => {
        clearTimeout(timer.current);
    }
  }, [variables]);
  return (
    <LaunchContext.Provider value={{ refetchData }}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={6} container>
          <LaunchFilterBar />
        </Grid>
        {launchesPast?.map(
          (item: Launch): JSX.Element => (
            <Grid item container key={item.id} xs={6}>
              <LaunchCard item={item} />
            </Grid>
          )
        )}
        <LaunchInfiniteScroll
          loading={loading}
          error={error}
          loadMore={loadNextData}
          hasNextPage={hasNextPage}
        />
      </Grid>
    </LaunchContext.Provider>
  );
};

export default Launches;
