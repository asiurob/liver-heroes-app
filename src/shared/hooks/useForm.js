import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    
    // use hook useState
    const [ formState, setFormState ] = useState( initialForm );

    // when the user types in the input, the value is saved in the state
    const inputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // reset the form
    const resetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        inputChange,
        resetForm,
    }
}