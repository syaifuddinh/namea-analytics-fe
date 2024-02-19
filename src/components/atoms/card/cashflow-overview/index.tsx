const CardCashflowOverview = ({
  children,
  title,
  description,
  className
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`card-wrapper h-[550px] flex flex-col ${className}`}>
      <div className="header">
        <div className="font-light text-gray-10 mb-1">{title}</div>
        <div className="text-gray-6 text-sm font-extralight tracking-[0.02px]">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default CardCashflowOverview;
