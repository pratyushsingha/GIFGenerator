import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';


const Tag = ({ API_KEY }) => {
    const [search, setSearch] = useState('gym')
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    async function searchGif() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        // await axios.get(url)
        //     .then(Response => {
        //         console.log(Response.data.data[0].images.original.url)
        //     })
        try {
            const { data } = await axios.get(url)
            setGif(data.data[0].images.original.url)
            setLoading(false)
            // console.log(data.data[0].images.original.url)
        }
        catch (error) {
            console.log('Error fetching data: ', error)
        }
    }
    useEffect(() => {
        // console.log('useeffect')
        searchGif()
    }, [])

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    const clickHandler = () => {
        console.log('clicked');
        searchGif()
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <div className='box-content h-50 w-50 p-4 border-4 bg-yellow-500 text-center'>
            <p className='font-bold'>{`Random ${capitalizeFirstLetter(search)} GIF`}</p>
            {loading ? (<Spinner />) : <img className='mt-3 h-64' src={gif} height="400" width="400" alt='gif' />}
            <input type="text" className='bg-white text-black w-full p-2 my-2 rounded-3xl' onChange={changeHandler} value={search} />
            <button className='bg-white text-black w-full p-2 rounded-md font-semibold' onClick={clickHandler}>GENERATE</button>

        </div>
    )
}

export default Tag
