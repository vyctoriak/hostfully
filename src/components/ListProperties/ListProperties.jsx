import { Card } from './ListPropertiesStyle';
import { ArrowCircleRight } from 'phosphor-react';

function ListProperties({ property, onClick }) {
  return (
    <Card>
      <div className="card__image">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="card__info">
        <h1>{property.title}</h1>
        <p>{property.description}</p>
        <button type="button" onClick={() => onClick(property)}>
          <ArrowCircleRight size={30} />
          Make a reservation
        </button>
      </div>
    </Card>
  );
}

export default ListProperties;
