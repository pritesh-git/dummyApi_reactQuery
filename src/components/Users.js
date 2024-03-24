import React from 'react'
import { useQuery } from 'react-query'
export const Users = () => {
  const { isLoading, isError, data } = useQuery(
    ['userList'],
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/users').then(res =>
        res.json(),
      ),
  )
  if (isError) {
    return (
      <center className="p-5">
        <h1>Error loading data...</h1>
      </center>
    )
  }
  if (isLoading) {
    return (
      <center className="p-5">
        <h1>Loading...</h1>
      </center>
    )
  }

  return (
    <div className="p-5">
      <center>
        <h1>Users List</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="cols">Id</th>
            <th scope="cols">Name</th>
            <th scope="cols">UserName</th>
            <th scope="cols">Email</th>
            <th scope="cols">Street</th>
            <th scope="cols">Suite</th>
            <th scope="cols">City</th>
            <th scope="cols">ZipCode</th>
            <th scope="cols">Geo</th>
            <th scope="cols">Phone</th>
            <th scope="cols">Website</th>
            <th scope="cols">Company name</th>
            <th scope="cols">Company catchPhrase</th>
            <th scope="cols">Company bs</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(el => (
            <tr>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.address?.street}</td>
              <td>{el.address?.suite}</td>
              <td>{el.address?.city}</td>
              <td>{el.address?.zipcode}</td>
              <td>{el.address?.geo?.toString()}</td>
              <td>{el.phone}</td>
              <td>{el.website}</td>
              <td>{el.company?.name}</td>
              <td>{el.company?.catchPhrase}</td>
              <td>{el.company?.bs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
