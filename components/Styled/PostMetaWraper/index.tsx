const PostMetaWraper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center mt-1.5 postMetaWraper">{children}</div>
  );
};

export default PostMetaWraper;
