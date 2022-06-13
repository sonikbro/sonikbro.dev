interface IProps {
  hideMobile?: boolean;
}

const Divider = ({ hideMobile }: IProps) => {
  return (
    <hr
      className={`h-px divider mb-[calc(1.8em+0.6vw)] mx-0 ${
        hideMobile ? 'mobonly' : ''
      }`}
    />
  );
};

export default Divider;
