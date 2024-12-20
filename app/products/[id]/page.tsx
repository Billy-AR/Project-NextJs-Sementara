import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProducts } from "@/utils/action";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const products = await fetchSingleProducts(params.id);
  const { name, image, company, description, price } = products;
  const dollarsAmmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative lg:h-full h-[25rem] ">
          <Image src={image} alt={name} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 70vw), 50vw" priority className="w-14 object-cover rounded" />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center ">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productsId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">{dollarsAmmount}</p>
          <p className="mt-6 leading-8 text-muted-foreground ">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
