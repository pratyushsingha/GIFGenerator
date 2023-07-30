import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = ({ API_KEY }) => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchGif() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        try {
            const { data } = await axios.get(url);
            // console.log(data.data.images.downsized_large.url);
            setGif(data.data.images.downsized_large.url);
            setLoading(false)
        } catch (error) {
            console.log('Error fetching data:', error);
        }

    }
    useEffect(() => {
        fetchGif()

    }, [])

    function clickHandler() {
        fetchGif()
    }

    return (
        <div className='box-content h-50 w-50 p-4 border-4 bg-green-500 text-center'>
            <p className='font-bold'>Random GIF</p>
            {loading ? (<Spinner />) : <img className='mt-3 h-64' src={gif} height="400" width="400" alt='gif' />}

            <button className='bg-white text-black w-full p-2 rounded-md mt-8 font-semibold' onClick={clickHandler}>GENERATE</button>
        </div>
    )
}

export default Random
