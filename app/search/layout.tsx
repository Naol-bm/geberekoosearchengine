import IndexPage from "../../components/lang";
import ChatBot from "../../components/chatbot";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex justify-start items-start w-full h-full">
        {/* <div className="main fixed top-0 right-0 h-screen w-full"></div> */}
        <div className="main flex justify-start text-start items-start fixed top-0 left-0 h-screen w-[20vw]">
          <Link
            href={"/"}
            className="w-full text-white font-bold text-[35px] text-center"
          >
            Gebere Co.
          </Link>
        </div>
        {/* <div className="main fixed top-0 left-0 h-[10em] w-full"></div> */}
        <div className="ml-[21vw]">{children}</div>
      </div>
      <IndexPage />
      <ChatBot />
    </div>
  );
}
