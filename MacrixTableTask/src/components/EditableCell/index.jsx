import PropTypes from 'prop-types';

export function EditableCell({ value, placeholder, onChange, onBlur}) {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleBlur = (event) => {
    onBlur(event.target.value);   
  }; 

  return (    
    <input
      placeholder={placeholder}
      value={value || ''}
      onChange={handleChange}
      onBlur={handleBlur} 
      />
  )
}

EditableCell.propTypes = {

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired, 
  onBlur: PropTypes.func, 
};

export default EditableCell;