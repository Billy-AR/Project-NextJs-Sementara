import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Button";
import { fetchFavoritedId } from "@/utils/action";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = await auth();

  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoritedId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}

export default FavoriteToggleButton;
