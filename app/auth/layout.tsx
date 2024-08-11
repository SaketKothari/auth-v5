const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
