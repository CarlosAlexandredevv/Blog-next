interface AvatarContenProps {
  children: React.ReactNode;
}
export function AvatarContent({ children }: AvatarContenProps) {
  return <div className="flex flex-col">{children}</div>;
}
