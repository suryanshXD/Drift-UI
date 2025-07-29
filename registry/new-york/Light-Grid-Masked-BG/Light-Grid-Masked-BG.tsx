export default function LightGridMasked({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="h-full w-full bg-white text-black bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#fff_85%,transparent_100%)]">
        {children}
      </div>
    </>
  );
}
