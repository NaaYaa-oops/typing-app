import React, {useEffect} from 'react'
import '../UI/homePage/home.scss'
import Content from '../components/Content'
import Header from '../components/Header'


// const URL = process.env.REACT_APP_DB_URL

const Home = () => {
    useEffect(() => {
        // const str = `it\'s are we ask why eat no know mom family very Indian not you American some very Acres of almond trees lined the interstate highway which complimented the crazy driving nuts Thigh-high in the water the fisherman’s hope for dinner soon turned to despair No matter how beautiful the sunset it saddened her knowing she was one day older`
        // const fetching = async () => {
        //     await axios.post(`${URL}/words.json`, {main: str}).then(resp => resp)
        // }
        // fetching()
    }, [])
    return (
        <div className={'main-screen'}>
            <Header/>
            <Content/>
            {/*{console.log(URL)}*/}
        </div>
    )
}

export default Home