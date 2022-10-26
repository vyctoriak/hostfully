import React from 'react';
import { Form, Reservation } from './BookReservationStyle';

export default function BookReservation() {
  return (
    <Reservation>
      <Form>
        <h1>Book your reservation &#x1F3E8;</h1>
        <div className="form__name">
          <label htmlFor="name">Full Name:</label>
          <input type="text" />
        </div>
        <div className="form__date">
          <label htmlFor="firstDay">From:</label>
          <input type="date" />

          <label htmlFor="lastDay">To:</label>
          <input type="date" />
        </div>
        <div className="form__buttons">
          <button>Cancel</button>
          <button type="submit">Book now!</button>
        </div>
      </Form>
    </Reservation>
  );
}
