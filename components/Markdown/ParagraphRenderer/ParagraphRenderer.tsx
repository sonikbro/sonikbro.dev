import { FC, PropsWithChildren } from "react";
import Image from 'next/image';

type ParagraphRendererProps = PropsWithChildren<{
  node?: any 
}>;

const ParagraphRenderer: FC<ParagraphRendererProps> = ({ node, children }) => {
  if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const metastring = image.properties.alt;
    const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
    const metaWidth = metastring.match(/{([^}]+)x/);
    const metaHeight = metastring.match(/x([^}]+)}/);
    const width = metaWidth ? metaWidth[1] : '768';
    const height = metaHeight ? metaHeight[1] : '432';
    const hasCaption = metastring?.toLowerCase().includes('{caption:');
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

    return (
      <figure>
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
          className="postImage"
        />
        {hasCaption ? (
          <figcaption>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return <p>{children}</p>;
};

export default ParagraphRenderer;
