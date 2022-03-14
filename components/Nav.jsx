import Link from "next/link";
import NavStyle from "./styles/NavStyles";
import SignOut from "./SignOut";
import { useUser } from "./User";

export default function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <NavStyle>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Signin</Link>
        </>
      )}
    </NavStyle>
  );
}
