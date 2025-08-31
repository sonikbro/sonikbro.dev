import { FC, PropsWithChildren } from 'react';

const PostMetaWraper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center mt-1.5 postMetaWraper">
      {children}
    </div>
  );
};

export default PostMetaWraper;
