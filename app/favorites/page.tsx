import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorite } from "@/utils/action";

async function FavoritesPage() {
  const favorites = await fetchUserFavorite();
  if (favorites.length === 0) return <SectionTitle text="You have no favorites yet." />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorites) => favorites.product)} />
    </div>
  );
}

export default FavoritesPage;
