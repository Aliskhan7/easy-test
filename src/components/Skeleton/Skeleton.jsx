import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (...props) => {
  return (
    <div className="skeleton">
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#ededed"
        foregroundColor="#e9e5e2"
        {...props}
      >
        <rect x="0" y="0" rx="18" ry="18" width="177" height="228" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#ededed"
        foregroundColor="#e9e5e2"
        {...props}
      >
        <rect x="0" y="0" rx="18" ry="18" width="177" height="228" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#ededed"
        foregroundColor="#e9e5e2"
        {...props}
      >
        <rect x="0" y="0" rx="18" ry="18" width="177" height="228" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#ededed"
        foregroundColor="#e9e5e2"
        {...props}
      >
        <rect x="0" y="0" rx="18" ry="18" width="177" height="228" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#ededed"
        foregroundColor="#e9e5e2"
        {...props}
      >
        <rect x="0" y="0" rx="18" ry="18" width="177" height="228" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
