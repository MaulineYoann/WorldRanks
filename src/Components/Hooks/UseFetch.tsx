import {useState, useEffect} from 'react'

const UseFetch = (url: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setLoading(false)
        }
    )
        .catch(error =>  {
            setError(error)
            setLoading(false)
    })
    }, [url])
    return { data, loading, error}
}

export default UseFetch