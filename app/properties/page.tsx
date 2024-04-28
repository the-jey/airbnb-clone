import EmptyState from "@/app/components/EmptyState";
import PropertiesClient from "@/app/properties/PropertiesClient";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";


const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length === 0) {
        return <EmptyState title="No properties found" subtitle="Looks like you haven't properties." />
    }

    return (
        <PropertiesClient listings={listings} currentUser={currentUser} />
    )
}

export default PropertiesPage;