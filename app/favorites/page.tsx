import FavoritesClient from "@/app/favorites/FavoritesClient";
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavorites from "@/app/actions/getFavorites";

const FavoritesPage = async () => {
    const favorites = await getFavorites();
    const currentUser = await getCurrentUser();

    if(favorites.length === 0)
        return <EmptyState 
                    title="No favorites found" 
                    subtitle="Looks like you haven't favorites for the moment." 
                />;

    return <FavoritesClient favorites={favorites} currentUser={currentUser} />
}
 
export default FavoritesPage;