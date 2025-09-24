import { createElement, FC, memo } from 'react';
import { ContentMetadata } from '@type/content'

interface IProps {
  metadata: ContentMetadata;
  isShowContentParams: boolean;
  titleTag?: string
}

const ContentMeta: FC<IProps> = ({ metadata, isShowContentParams, titleTag = 'h1' }) => {
  const { title, description, date, timeRead } = metadata;

  return (
    <header>
      {createElement(titleTag, {}, title)}

      {description && (
        <p>
          {description}
        </p>
      )}

      {
        isShowContentParams && (
          <div>
            {timeRead && (
              <span>
                {timeRead} min read
              </span>
            )}
            <span> · </span>
            {date && (
              <time>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
        )
      }
    </header>
  );
};

export default memo(ContentMeta);
