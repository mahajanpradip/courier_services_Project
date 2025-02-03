export const ADD_BOOKING = "ADD_BOOKING";

// Action to add booking
export const addBooking = (bookingData) => {
  return {
    type: ADD_BOOKING,
    payload: bookingData,
  };
};
