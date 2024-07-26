const Button = (props) => {
  const { children, classname, submit } = props;
  return (
    <button
      type={submit}
      className={` w-full border  rounded-lg h-10 ${classname} text-white`}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
