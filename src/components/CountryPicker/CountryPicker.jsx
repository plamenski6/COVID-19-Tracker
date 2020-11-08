import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import './CountryPicker.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchCountriesAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className='form-control'>
            <NativeSelect defaultValue='' onChange={(e) => { handleCountryChange(e.target.value) }}>
                <option value=''>
                    Global
                </option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker