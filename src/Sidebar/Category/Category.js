import Input from '../../components/Input';
import "./Category.css";

function Category({handleChange}) {
  return (
  <div>
    <h2 className="sidebar-title">SIZE</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
      <Input
      handleChange={handleChange}
      value="39"
      title="39"
      name="test"
      />
      <Input
      handleChange={handleChange}
      value="40"
      title="40"
      name="test"
      />
      <Input
      handleChange={handleChange}
      value="41"
      title="41"
      name="test"
      />
       <Input
      handleChange={handleChange}
      value="42"
      title="42"
      name="test"
      />
      </div>
  </div>
  );
}
export default Category;
