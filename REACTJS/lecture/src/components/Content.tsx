import { memo } from "react";

const Content = () => {
  return (
    <>
      <div>Content</div>
      <a href="/home">home</a>
    </>
  );
};

export default memo(Content);
