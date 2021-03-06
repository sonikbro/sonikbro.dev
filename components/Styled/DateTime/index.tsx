import formatTime from '../../../utils/formatTime';

interface IDateTime {
  date: string;
}

const DateTime: React.FC<IDateTime> = ({ date }) => {
  return (
    <time dateTime={new Date(date).toISOString()}>{formatTime(date)}</time>
  );
};

export default DateTime;
