import Clients from '../Case/Clients/Clients'
import Intrest from '../../components/Intrest/Intrest'
import Establish from '../Services/Establish/Establish'
import Strategy from '../../pages/Case/Strategy/Strategy'
import Green from '../../Assets/Images/green.svg'

function Case() {
  return (
    <div>
      <Clients />
      <div>
        <Strategy image={Green} title="Lunar Strategy SaaS Marketing Agency - Rebranding of website" text="Web Project ManageWe got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves." />
        <Strategy image={Green} title="Lunar Strategy SaaS Marketing Agency - Rebranding of website" text="Web Project ManageWe got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves." />
        <Strategy image={Green} title="Lunar Strategy SaaS Marketing Agency - Rebranding of website" text="Web Project ManageWe got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves." />
        <Strategy image={Green} title="Lunar Strategy SaaS Marketing Agency - Rebranding of website" text="Web Project ManageWe got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves." />
      </div>
      <Intrest title="Interested to work with us ?" text="Send a line here get and update daily"/>/>
      <Establish />

    </div>
  )
}

export default Case