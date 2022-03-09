import Head from "next/head";
import CreateProduct from "../components/CreateProduct";

export default function Sell() {
  return (
    <div>
      <Head>
        <title>Sell Page - Sick Fits</title>
      </Head>
      <CreateProduct />
    </div>
  );
}
