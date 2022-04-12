import Offer from "../../pages/Services/Offer/Offer";
import Intrest from "../../components/Intrest/Intrest";
import Establish from "../../pages/Services/Establish/Establish";
import Empty from '../../pages/Services/Empty/Empty'

function Services() {
  return (
  <div>
    <Offer />
    <Empty />
    <Intrest title="Interested to work with us ?" text="Send a line here get and update daily"/>
    <Establish />
  </div>
   
  )
}

export default Services