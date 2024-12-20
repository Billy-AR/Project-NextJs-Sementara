import ProductsContainer from "@/components/products/ProductsContainer";

function ProoductsPage({ searchParams }: { searchParams: { layout?: string; search?: string } }) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  // console.log(searchParams);

  return <ProductsContainer layout={layout} search={search}></ProductsContainer>;
}

export default ProoductsPage;