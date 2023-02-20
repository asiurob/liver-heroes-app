import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  // Get the id from the url
  const { id } = useParams();

  // Get the hero by id
  const hero = useMemo( () => getHeroById(id), [id] );

  const backgroundImage = hero.publisher === 'DC Comics' ? 'dc_logo.png' : 'marvel_logo.png';

  // If the hero does not exist, redirect to the search page
  if ( !hero ) {
    return <Navigate to="/search" />
  }

  // Navigate to the previous page
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  }

  return (
    <>
    <button className="btn btn-outline-dark btn sm" onClick={backPage}>
      Back
    </button>
    <div className="card my-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`/heroes/${ hero.id }.jpg`} alt={hero.superhero} className="img-fluid rounded-start animate__animated animate__rollIn" />
        </div>
        <div className="col-md-8">
          <img src={`/heroes/${ backgroundImage }`} alt={ hero.superhero } className="cover" />
          <div className="d-flex justify-content-center align-items-center h-100">
          <div className="card-body">
            <h2 className="card-title text-center">
              { hero.superhero } <br />
              <small className="text-muted">{ hero.alter_ego }</small>
            </h2>
            <p className="card-text text-center mt-5">
              <small className="fw-bolder">appeared at <br /></small>
              { hero.first_appearance }
            </p>
            <p className="card-text text-center mt-5">
              <small className="fw-bolder">Also known as <br /> </small>
              { hero.characters }
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
