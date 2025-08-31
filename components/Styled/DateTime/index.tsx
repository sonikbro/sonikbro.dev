import { FC } from 'react';
import formatTime from '../../../utils/formatTime';

interface IDateTime {
  date: string;
}

const DateTime: FC<IDateTime> = ({ date }) => {
  return (
    <time dateTime={new Date(date).toISOString()}>
      {formatTime(date)}
    </time>
  );
};

export default DateTime;
