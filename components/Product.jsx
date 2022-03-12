import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PricTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default function Product({ product }) {
  // console.log(product.photo.image.publicUrlTransformed);
  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed} alt="hej" />
      <Title>
        <Link href={`/product/${product?.id}`}>{product?.name}</Link>
      </Title>
      <PricTag>{formatMoney(product?.price)}</PricTag>
      <p>{product?.description}</p>
      {/* update button */}
      <div className="buttonList">
        <Link
          href={{
            pathname: "/update",
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
      </div>
    </ItemStyles>
  );
}
