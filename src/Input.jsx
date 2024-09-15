/* eslint-disable react/prop-types */
const Input = ({handleChange, hint,error}) => {
  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
      />
    {error&&<p className="error">{error}</p>}
    </div>
  );
};

export default Input;
