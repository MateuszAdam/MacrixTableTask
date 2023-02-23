import { EditableCell } from "../EditableCell";
import { Button } from '../Button';
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

export default function Rows({ users, onCellUpdate, handleRemove, handleUpdatedDate }) {

  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr
            key={user.objectId}
            style={{
              background: "white",
              color: "black",
            }}>
            <td>
              <EditableCell
                value={user.FirstName}
                placeholder={user.Id === users.length ? "Type name.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "FirstName", value)}
              />
            </td>
            <td>
              <EditableCell
                value={user.LastName}
                placeholder={user.Id === users.length ? "Type surname.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "LastName", value)}                
              />
            </td>
            <td>
              <EditableCell
                value={user.StreetName}
                placeholder={user.Id === users.length ? "Type street name.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "StreetName", value)}  
              />
            </td>
            <td>
              <EditableCell
                value={user.HouseNumber}
                placeholder={user.Id === users.length ? "Type house number.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "HouseNumber", value)}
              />
            </td>
            <td>
              <EditableCell
                value={user.ApartmentNumber}
                placeholder={user.Id === users.length ? "Type apartment number.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "ApartmentNumber", value)}               
              />
            </td>
            <td>
              <EditableCell
                value={user.PostalCode}
                placeholder={user.Id === users.length ? "Type postal code.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "PostalCode", value)}
              />
            </td>
            <td>
              <EditableCell
                value={user.Town}
                placeholder={user.Id === users.length ? "Type town.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "Town", value)}               
              />
            </td>
            <td>
              <EditableCell
                value={user.PhoneNumber}
                placeholder={user.Id === users.length ? "Type phone.." : ""}
                onChange={(value) =>
                  onCellUpdate(user.Id, "PhoneNumber", value)}              
              />
            </td>
            <td>
              <EditableCell
                value={user.DateOfBirth}
                placeholder={user.Id === users.length ? "Type birth date.." : ""}
                onChange={(value) => {
                  onCellUpdate(user.Id, "DateOfBirth", value)}}
                onBlur={(value) => {
                  handleUpdatedDate(user.Id, "DateOfBirth", value)
                }}
              />
            </td>
            <td>
              {user.Age}
            </td>
            <td>
              <Button
                style={{ padding: 5, margin: 3 }}
                onClick={() => handleRemove(user.Id)}
              >
                <FaTrashAlt />
              </Button>
            </td>
          </tr>
        )
      })
      }
    </tbody>
  )
}

Rows.propTypes = {

  users: PropTypes.array.isRequired,
  onCellUpdate: PropTypes.func,
  handleRemove: PropTypes.func,
  handleBlur: PropTypes.func
};