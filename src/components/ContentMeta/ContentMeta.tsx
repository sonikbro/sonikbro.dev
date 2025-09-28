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
    <>
      {createElement(titleTag, {}, title)}

      {description && (
        <p>{description}</p>
      )}

      {
        isShowContentParams && (
          <aside>
            {timeRead && (
              <span>
                {timeRead} min to read
              </span>
            )}
            {
              (timeRead && date) && (
                <span> · </span>
              )
            }
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </aside>
        )
      }
    </>
  );
};

export default memo(ContentMeta);
