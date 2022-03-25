import styles from './Favorite.module.scss'
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/cardsReducer';
import Card from '../Card/Card';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const Favorite = () => {
  // const history = useNavigate();
  const favoriteCards = useSelector(state => getFilteredFavoriteCards(state));

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     history('/');
  //   }, 2000);
  // }, []);

  if(!favoriteCards.length) return <PageTitle>No favorite cards</PageTitle>
  // <Navigate to="/" /> 
    return (
      <div>
        <Container>
          <PageTitle>Favorite</PageTitle>
          <div className={styles.columns}>
            <article className={styles.column}>
              <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} title={card.title} cardId={card.id} />)}
              </ul>
            </article>
          </div>
        </Container>
      </div>
    );
}

export default Favorite;