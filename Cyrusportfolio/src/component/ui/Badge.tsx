type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
      {children}
    </span>
  );
}
