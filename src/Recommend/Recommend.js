import Buttons from '../components/Buttons';
import './Recommend.css';

function Recommend({handleClick}) {
  return (
  <>
    <div>
      <h2 className="recommended-title">BRAND</h2>
        <div className="recommended-flex">  
          <Buttons onClickHandler={handleClick} value="X Munich" title="X MUNICH"/>
          <Buttons onClickHandler={handleClick} value="Joma" title="JOMA"/>
          <Buttons onClickHandler={handleClick} value="Desporte" title="DESPORTE"/>
          <Buttons onClickHandler={handleClick} value="New Balance" title="NEW BALANCE"/>

        </div>
    </div>
  </>
  );
}
export default Recommend;