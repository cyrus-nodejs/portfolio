type CardHeaderProps = {
  children: React.ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  return (
    <div className="px-6 pt-6 pb-2">
      {children}
    </div>
  );
}
