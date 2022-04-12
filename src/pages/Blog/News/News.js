import { FiSearch } from 'react-icons/fi'

import './news.css'
const News = ({title, text}) => {
    return (
        <section className="news-section1">
            <div className="nwcont">
                <h1 className="nwchead">{title}</h1>
                <p className="nwcpar">{text}</p>
            <form className="search">
                    <input type="text" placeholder="Search blog…" />
                     <button type='submit'><FiSearch className='icon' /></button> 
            </form>
            </div>
        </section>
    )
}

export default News