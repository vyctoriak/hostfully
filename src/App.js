// components
import ListProperties from './components/ListProperties/ListProperties';
import BookReservation from './components/BookReservation/BookReservation';
//style
import { GlobalStyle, Container } from './Global';
// hooks and store
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProperty } from './store/property';

function App() {
  const selectProperty = useSelector((state) => state.property.selectProperty);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.property.properties);

  const handleClick = (property) => {
    dispatch(setSelectedProperty(property));
  };

  return (
    <div className="App">
      <GlobalStyle />

      <Container>
        {data.map((item) => {
          return (
            <ListProperties
              key={item.id}
              property={item}
              onClick={handleClick}
            />
          );
        })}
        {selectProperty && <BookReservation />}
      </Container>
    </div>
  );
}

export default App;
