type CardTitleProps = {
  children: React.ReactNode;
};

export function CardTitle({ children }: CardTitleProps) {
  return (
    <h3 className="text-xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
