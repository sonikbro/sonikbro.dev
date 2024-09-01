import { FC, PropsWithChildren } from "react";

type LinkRendererProps = PropsWithChildren<{
    href: string;
}>;

const LinkRenderer: FC<LinkRendererProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkRenderer;
