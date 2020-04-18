import CardList from './components/CardList';
import DATA from './const/data.json';
import '../css/styles.scss';

const start = () => {
  const cardList1 = new CardList(DATA, 'wrapper-1');
  cardList1.render();
}

start();







