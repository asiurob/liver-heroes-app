import { useEffect, useState } from "react"


export const useFetch = ( fragment ) => {

    const url = `http://localhost:3000/${ fragment }`
    // Create the state to handle the data and the loading
    const [state, setState] = useState({
        data: undefined,
        isLoading: true,
        hasError: undefined
    })

    console.log('yum');

    // Create the function to get the data
    const getData = async () => {
        console.log('entre');
        setState({
            ...state,
            isLoading: true
        })

        try {
            const response = await fetch( url )
            const data = await response.json()
            setState({
                ...state,
                data,
                isLoading: false
            })

        } catch ( error ) {
            setState({
                ...state,
                hasError: error,
                isLoading: false
            })
        }
        
    }

    // Use an effect to make the request stored
    console.log('viy');
    useEffect( () => {
        getData()
    }, [fragment] )

    return { 
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
     }
}
