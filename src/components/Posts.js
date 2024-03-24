import React from 'react'
import { useQuery } from 'react-query'
export const Posts = () => {
  const { isLoading, isError, data } = useQuery(
    ['postList'],
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
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
        <h1>Posts List</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="cols">User id</th>
            <th scope="cols">Post Id</th>
            <th scope="cols" className="w-25">
              Title
            </th>
            <th scope="cols" className="w-50">
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(el => (
            <tr>
              <td>{el.userId}</td>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
