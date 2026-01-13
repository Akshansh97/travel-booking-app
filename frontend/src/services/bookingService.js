import api from "./api";

export const getTrips = () => api.get("/trips");

export const createBooking = (tripIdInput, totalSeatsInput) => {
    return api.post('/bookings', {
        tripId: tripIdInput,
        totalSeats: totalSeatsInput
    });
};
