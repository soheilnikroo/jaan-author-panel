import ContentLoader from "react-content-loader";

const StatisticSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={327}
      height="50vh"
      viewBox="0 0 327 425"
      backgroundColor="#192C44"
      foregroundColor="#2D425D"
      style={{ marginBottom: "5rem", marginTop: "3rem" }}
    >
      <rect x="219" y="10" rx="10" ry="10" width="108" height="19" />
      <rect x="46" y="0" rx="10" ry="10" width="152" height="39" />
      <rect x="0" y="64" rx="15" ry="15" width="327" height="361" />
    </ContentLoader>
  );
};

export default StatisticSkeleton;
