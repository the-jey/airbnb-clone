import ReservationsClient from "@/app/reservations/ReservationsClient";
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0)
        return <EmptyState title="No reservations found" subtitle="Looks like you haven't reservations on your properties." /> 

    
    return <ReservationsClient reservations={reservations} currentUser={currentUser} />
};

export default ReservationsPage