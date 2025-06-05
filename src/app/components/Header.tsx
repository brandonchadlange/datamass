import Image from "next/image";
import { BaseComponentProps } from "./registry";

interface HeaderProps extends BaseComponentProps {
  title: string;
  description: string;
}

export default function Header({ title, description, className }: HeaderProps) {
  return (
    <header className={`py-6 ${className || ""}`}>
      <Image
        src="https://datamass.africa/wp-content/uploads/2020/04/cropped-DATAMASS-LOGO-1.png"
        alt="logo"
        width={100}
        height={100}
      />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
    </header>
  );
}
