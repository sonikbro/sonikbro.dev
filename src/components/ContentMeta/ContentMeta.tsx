import { createElement, FC, memo } from 'react';
import { ContentMetadata } from '@type/content'
import { formatDate } from '@utils/date';
import PostStats from '@components/PostStats/PostStats';

interface IProps {
  metadata: ContentMetadata;
  isShowContentParams: boolean;
  titleTag?: string;
  compact?: boolean;
  showStats?: boolean;
}

const ContentMeta: FC<IProps> = ({ metadata, isShowContentParams, titleTag = 'h1', compact = false, showStats = false }) => {
  const { title, description, date, timeRead, slug } = metadata;
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
          {showStats && (
            <>
              <span> &middot; </span>
              <PostStats slug={slug} />
            </>
          )}
        </MetaTag>
      )}
    </>
  );
};

export default memo(ContentMeta);
