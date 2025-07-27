export default function DotLighBg({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#c8cbcc_1px,transparent_1px)] [background-size:16px_16px]">
        {children}
      </div>
    </>
  );
}
