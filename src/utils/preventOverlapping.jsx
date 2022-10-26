import { isWithinInterval } from 'date-fns';

function preventOverlapping(
  { firstDay, lastDay, reservations, propertyId },
  reservationsId,
) {
  const validatingReservations = reservationsId
    ? reservations.filter((b) => b.id !== reservationsId)
    : reservations;

  const reservationsDate = validatingReservations.map((booking) => ({
    firstDay: reservations.initialDate,
    lastDay: reservations.finalDate,
    propertyId: reservations.property.id,
  }));

  let overlapping = false;

  reservationsDate.forEach((item) => {
    if (
      (isWithinInterval(new Date(firstDay), {
        start: new Date(item.firstDay),
        end: new Date(item.lastDay),
      }) ||
        isWithinInterval(new Date(lastDay), {
          start: new Date(item.firstDay),
          end: new Date(item.lastDay),
        }) ||
        isWithinInterval(new Date(item.firstDay), {
          start: new Date(firstDay),
          end: new Date(lastDay),
        }) ||
        isWithinInterval(new Date(item.lastDay), {
          start: new Date(firstDay),
          end: new Date(lastDay),
        })) &&
      item.propertyId === propertyId
    ) {
      overlapping = true;
    }
  });

  return overlapping;
}

export default preventOverlapping;
