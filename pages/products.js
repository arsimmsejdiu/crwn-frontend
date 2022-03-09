import Head from "next/head";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Products Page - Sick Fits</title>
      </Head>
      <Products />
    </div>
  );
}
