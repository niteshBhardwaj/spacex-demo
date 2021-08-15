import { ApolloError } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import useInfiniteScroll from "react-infinite-scroll-hook";
interface LaunchInfiniteScroll {
  loadMore: () => void;
  loading: boolean;
  hasNextPage: boolean;
  error: ApolloError | undefined;
}

const LaunchInfiniteScroll = ({
  loadMore,
  loading,
  hasNextPage,
  error,
}: LaunchInfiniteScroll): JSX.Element => {
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });
  return (
    <div ref={sentryRef}>
      {(loading || hasNextPage) && <CircularProgress style={{ margin: 20}}/>}
    </div>
  );
};

export default LaunchInfiniteScroll;
