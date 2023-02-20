import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from './'
import { getHeroesByName } from '../../heroes/helpers'


export const useSearch = () => {
    
    // get the query string
    const location = useLocation();

    // parse the query string
    const { q = '' } = queryString.parse(location.search);
    
    // use the useForm hook and store que query string in the searchText
    const { searchText, inputChange } = useForm({
      searchText: q
    })
    
    // use the useNavigate hook
    const navigate = useNavigate();
    
    // get the heroes by name
    const heroes = getHeroesByName(q);
    
    // submit the form and change the url
    const submit = ( event ) => {
      event.preventDefault();
      if( searchText.trim().length <= 2 ) return;
      
      navigate(`?q=${searchText}`);
    }

    return {
        heroes,
        submit,
        inputChange,
    }
}
