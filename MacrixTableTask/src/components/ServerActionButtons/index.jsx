import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { Button } from "../Button";
import { PropTypes } from "prop-types";
import { ServerActionFallback } from '../ServerActionFallback'

export const ServerActionButtons = () => {


  const {
    touched,
    saveData,
    resetData,
  } = useContext(UserContext);

  const [fireFallback, setFireFallback] = useState(false);


  const handleSaveData = () => {
    saveData();
    setFireFallback(true);

    setTimeout(function () {
      setFireFallback(false)
    }, 6000);

  }

  return (
    <div>
      <div>
        <Button disabled={!touched()} onClick={() => handleSaveData()}>
          Save changes
        </Button>
        <Button disabled={!touched()} onClick={() => resetData()}>
          Cancel changes
        </Button>
      </div>
      <ServerActionFallback 
        fireFallback = {fireFallback}>
        </ServerActionFallback>
    </div>
  );
}

export default ServerActionButtons;

ServerActionButtons.propTypes = {

  touched: PropTypes.bool,
  saveData: PropTypes.func,
  resetData: PropTypes.func,
};