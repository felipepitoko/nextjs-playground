export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <div className="h-full bg-orange-300">
          {children}
        </div>
        </>
    );
  }