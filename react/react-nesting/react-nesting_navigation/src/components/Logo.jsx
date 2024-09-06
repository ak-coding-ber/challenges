import Image from "./Image";
import logo from "../assets/logo.jpg";

export default function Logo() {
  return (
    <>
      <a href="#">
        <Image src={logo} alt="logo"></Image>
      </a>
    </>
  );
}
