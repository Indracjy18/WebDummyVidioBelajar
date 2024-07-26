const Label = (props) => {
  const { children, ...attr } = props;
  return <label {...attr}>{children}</label>;
};

export default Label;
