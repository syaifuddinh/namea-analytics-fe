const CardCashflowOverview = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-wrapper h-[550px] flex flex-col">
      <div className="header">
        <div className="font-normal text-gray-10 mb-1 font-normal -tracking-[0.16px]">{title}</div>
        <div className="text-gray-6 text-sm font-light -tracking-[0.14px]">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default CardCashflowOverview;
