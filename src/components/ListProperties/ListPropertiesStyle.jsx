import styled from 'styled-components';

export const Card = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 1rem 0;
  border-radius: 6px;
  overflow: hidden;
  color: var(--white);
  background-color: var(--blue);
  .card__image {
    img {
      display: block;
      width: 100vw;
      height: 50vh;
      object-fit: cover;
    }
  }
  .card__info {
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h1 {
      color: var(--mint);
      text-transform: uppercase;
    }
    p {
      line-height: 30px;
      font-weight: 300;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
      color: var(--white);
    }
    button {
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 6px;
      color: var(--teal);
      background-color: var(--mint);
      font-weight: 700;
    }
  }
`;
