import Image from "next/image";
import Link from "next/link";
import UserInfo from "./user-info";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container border-b p-2 px-3 md:px-0 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={50}
            height={50}
            src={"/images/logo.svg"}
            alt="brand logo"
          />
          <h3 className="text-white md:text-3xl text-2xl font-bold">AI Room</h3>
        </Link>
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
