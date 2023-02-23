import { UserContext } from "../../contexts/UserContext";
import { useContext} from "react";
import { PropTypes } from "prop-types"

export const ServerActionFallback = ({fireFallback}) => {

  const {
    error, 
    success   
  } = useContext(UserContext);

  const fireError = fireFallback && error !== null;
  const fireSuccess = fireFallback && success === true;
   
  function ErrorFallback() {

    console.log(error)

    return (
      <div role="alert">
        <p style={{ color: 'red', fontSize: 20 }}>Something went wrong, please validate the data</p>
        <pre style={{ color: 'red' }}>{error}</pre>
      </div>
    )
  }

  function SuccessFallback() {
    return (
      <div role="alert">
        <p style={{ color: 'green', fontWeight: "bold", fontSize: 20 }}>Data saved on the server successfully</p>
      </div>
    )
  }

  return (
    <div>
      {/* { fireSuccess ?  (<SuccessFallback />) : <></> } */}
      { fireError ?  (<ErrorFallback />) : <></> }      
    </div>
    
  )
}

export default ServerActionFallback;

ServerActionFallback.propTypes = {
  error: PropTypes.string,
  fireFallback: PropTypes.bool,
  success: PropTypes.bool
};