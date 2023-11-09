import Category from './Category/Category';
import "./Sidebar.css";

function Sidebar({handleChange}) {
  return ( 
  <>
    <section className="sidebar">
        <div className="logo-container">
            <h1> 🛒 </h1>
        </div>    
    <Category handleChange = {handleChange}/> 
    </section>
  </>
  );
}
export default Sidebar;