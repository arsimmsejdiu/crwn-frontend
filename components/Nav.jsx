import Link from "next/link";
import { useCart } from "../lib/cartState";
import CartCount from "./CartCount";
import SignOut from "./SignOut";
import NavStyle from "./styles/NavStyles";
import { useUser } from "./User";

export default function Nav() {
  const user = useUser();
  //const { openCart } = useCart();
  return (
    <NavStyle>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          {/* TODO: ad this to the button onClick={openCart} */}
          <button type="button">
            My Cart
            <CartCount count={1}/>
          </button>
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
