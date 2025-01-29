import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-seconddark p-4 w-full">
      <div className="new-container text-textlight flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image src="/images/people.png" width={44} height={44} alt="people" />
          <h1 className="text-lg font-olive">Ac Repair Services</h1>
        </div>
        <div className="flex gap-8 items-center">
          <p className="flex gap-3 items-center text-lg">
            <span>
              <Mail />
            </span>
            <span className="text-lg">razahussain7196@gmail.com</span>
          </p>
          <p className="flex gap-3 items-center">
            <span>
              <Phone />
            </span>
            <span className="text-lg">+91-7995987254</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
