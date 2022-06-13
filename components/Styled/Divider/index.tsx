interface IProps {
  classes?: string;
}

const Divider = ({ classes }: IProps) => {
  return (
    <hr className={`h-px divider mb-[calc(1.8em+0.6vw)] mx-0 ${classes}`} />
  );
};

export default Divider;
