import IndexPage from "../../components/lang";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative flex justify-start items-start w-full h-full">
        {/* <div className="main fixed top-0 right-0 h-screen w-full"></div> */}
        <div className="main fixed top-0 left-0 h-screen w-[20vw]"></div>
        {/* <div className="main fixed top-0 left-0 h-[10em] w-full"></div> */}
        <div className="ml-[21vw]">{children}</div>
      </div>
      <IndexPage />
    </div>
  );
}
