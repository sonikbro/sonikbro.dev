import { createElement, FC, memo } from 'react';
import { ContentMetadata } from '@type/content'
import { formatDate } from '@utils/date';

interface IProps {
  metadata: ContentMetadata;
  isShowContentParams: boolean;
  titleTag?: string;
  compact?: boolean;
}

const ContentMeta: FC<IProps> = ({ metadata, isShowContentParams, titleTag = 'h1', compact = false }) => {
  const { title, description, date, timeRead } = metadata;
  const MetaTag = compact ? 'small' : 'aside';

  return (
    <>
      <hgroup>
        {createElement(titleTag, {}, title)}
        {description && <p>{description}</p>}
      </hgroup>

      {isShowContentParams && (
        <MetaTag>
          {timeRead && (
            <span>{timeRead} min to read</span>
          )}
          {timeRead && date && (
            <span> &middot; </span>
          )}
          {date && (
            <time dateTime={date}>
              {formatDate(date)}
            </time>
          )}
        </MetaTag>
      )}
    </>
  );
};

export default memo(ContentMeta);
