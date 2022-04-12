import './intrest.css';


 const Intrest = ({title, text}) => {
  return (
    <section className="section5">
      <div className="sect5content">
              <h1 className="sect5heading">{title}</h1>
              <p className="sect5par">{text}</p>
              <button className="dbutt">DaCode@example.com</button>
          </div>
    </section>
    
  )
}



export default Intrest