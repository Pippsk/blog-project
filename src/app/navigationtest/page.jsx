"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  //CLIENT SIDE NAVIGATION
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const pathname = usePathname();

  console.log(q);
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace('/')
    // router.refresh()
    // router.back()
    //router.forward()
  };
  return (
    <div>
      <Link href="/">click here</Link>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default NavigationTestPage;
