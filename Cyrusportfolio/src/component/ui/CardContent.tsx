type CardContentProps = {
  children: React.ReactNode;
};

export function CardContent({ children }: CardContentProps) {
  return (
    <div className="px-6 pb-6 space-y-4">
      {children}
    </div>
  );
}
