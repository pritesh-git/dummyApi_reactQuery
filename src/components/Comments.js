import React from 'react'
import { useQuery } from 'react-query'
export const Comments = () => {
  const { isLoading, isError, data } = useQuery(
    ['commentList'],
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
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
        <h1>Comments List</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="cols">Post id</th>
            <th scope="cols">Comment Id</th>
            <th scope="cols">Email</th>
            <th scope="cols" className="w-25">
              Name
            </th>
            <th scope="cols" className="w-50">
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(el => (
            <tr>
              <td>{el.postId}</td>
              <td>{el.id}</td>
              <td>{el.email}</td>
              <td>{el.name}</td>
              <td>{el.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
