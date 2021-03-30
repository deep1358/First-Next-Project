import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width={128} height={77} src="/vercel.svg"/>
      </div>
      <Link href="/"><a >Home</a></Link>
      <Link href="/about"><a >About</a></Link>
      <Link href="Deep"><a >Ninja Listing</a></Link>
    </nav>
  );
};

export default NavBar;
