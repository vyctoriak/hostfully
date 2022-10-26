import styled from 'styled-components';

export const Reservation = styled.div`
  width: 100%;
  background-color: var(--blue);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: var(--teal);
  border-radius: 6px;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .form__name {
    display: flex;
    flex-direction: column;
    padding: 22px 0;
  }
  .form__date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 16px;
  }
  .form__buttons {
    padding: 2rem 0 1rem;
    display: flex;
    justify-content: space-evenly;

    button {
      cursor: pointer;
      border-radius: 6px;
      border: none;
      padding: 8px;
      font-size: 16px;
      &:nth-child(2) {
        font-weight: bold;
        background-color: var(--navy);
        color: var(--mint);
      }
    }
  }
`;
