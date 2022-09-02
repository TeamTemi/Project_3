import News from '../../pages/Blog/News/News'
import July from '../../pages/Blog/July/July'
import { array }from '../../components/Constants/Constant'

const Blog = () => {
  return (
    <div>
      <News title="News & Articles" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et." />
      <div className='wrep'>
        {array.map((item, index) => (
          <July {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Blog