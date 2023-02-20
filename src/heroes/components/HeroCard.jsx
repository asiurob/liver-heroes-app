import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ( {
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
  singleCard
} ) => {
  
  return (
    <>
    <Link className={`text-decoration-none text-dark ${singleCard ? 'col-8 offset-2' : 'col-md-4'}` } to={`/hero/${ id }`}>
      <div className="card animate__animated animate__fadeIn mt-3 shadow shadow-sm p-2">
        <img 
            src={`/heroes/${ id }.jpg`} 
            alt={superhero}
            className="card-img-top mt-2 rounded w-auto"
          />
        <div className="card-body">
          <h5 className="card-title">
            { superhero } <br />
            <small className="text-muted">
              { alter_ego }
            </small>
            </h5>
          <p className="card-text"></p>
              {
                (alter_ego !== characters) && <p className="card-text">{ characters }</p>
              }
          <p className="card-text">
            <small className="text-muted">{ first_appearance }</small>
          </p>
        </div>
      </div>
    </Link>
    </>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string
}