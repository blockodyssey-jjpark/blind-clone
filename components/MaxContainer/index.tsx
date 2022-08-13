type MaxContainerProps = {
  children: React.ReactNode;
};

const MaxContainer = ({ children }: MaxContainerProps) => {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
};

export default MaxContainer;
