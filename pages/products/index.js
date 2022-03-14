import Head from "next/head";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const { query } = useRouter();
  const page = parseInt(query.page)
  return (
    <div>
      <Head>
        <title>Products Page - Sick Fits</title>
      </Head>
      <Pagination page={page || 1}/>
      <Products page={page || 1}/>
      <Pagination page={page || 1}/>
    </div>
  );
}
