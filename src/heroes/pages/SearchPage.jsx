import { Header, useSearch } from '../../shared'
import { HeroCard } from '../components/'


export const SearchPage = () => {

  const { heroes, submit, inputChange }  = useSearch()

    return (
      <>
      <Header title="Search for heroes"/>

      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={submit} >
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control form-control-sm"
              name="searchText"
              onChange={inputChange}
            />
            <button className="btn btn-outline-primary btn-sm mt-3">
              Search
            </button>
          </form>
          
        </div>

        <div className="col-sm-8">
          {
            heroes.length === 0 && 
            <div className="text-center no-results">
              <h1>No results</h1>
            </div>
            
          }
          <div className="row">    
            {
              heroes.map( hero => {
                const _hero = { ... hero, singleCard: heroes.length === 1 };
                return <HeroCard key={hero.computated_id}  { ..._hero }  />
              })
            }
          </div>
        </div>
      </div>
      </>
    )
}
