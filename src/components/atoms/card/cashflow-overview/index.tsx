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
    <div className="card-wrapper">
      <div className="header">
        <div className="body-2-500 text-gray-10">{title}</div>
        <div className="caption-1-400 text-gray-6">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default CardCashflowOverview;
