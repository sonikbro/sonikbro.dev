type Props = {
  children: React.ReactNode;
};

const PostMetaWraper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center mt-1.5 postMetaWraper">{children}</div>
  );
};

export default PostMetaWraper;
