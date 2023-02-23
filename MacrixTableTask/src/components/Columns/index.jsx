import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "FirstName",
  },
  {
    Header: "Last Name",
    accessor: "LastName",
  },
  {
    Header: "Street Name",
    accessor: "StreetName",
  },
  {
    Header: "House Number",
    accessor: "HouseNumber",
  },
  {
    Header: "Apartment Number",
    accessor: "ApartmentNumber",
  },
  {
    Header: "Postal Code",
    accessor: "PostalCode",
  },
  {
    Header: "Town",
    accessor: "Town",
  },
  {
    Header: "Phone Number",
    accessor: "PhoneNumber",
  },
  {
    Header: "Date Of Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    accessor: "DateOfBirth",
  },
  {
    Header: "Age",
    accessor: "Age",
  },
];

export function Columns() {

  return (
    <tr>
      {COLUMNS.map((headerGroup, index) => (
        <th
          key={index}
          style={{
            background: "lightGray",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {headerGroup.Header}
        </th>
      ))
      }
      <th style={{
        background: "lightGray",
      }}>
        Actions
      </th>
    </tr>
  )
}