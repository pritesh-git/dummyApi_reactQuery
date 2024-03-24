import React from 'react'
import { useQuery } from 'react-query'
export const Todos = () => {
  const { isLoading, isError, data } = useQuery(
    ['todoList'],
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
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
        <h1>Todos List</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="cols">User id</th>
            <th scope="cols">Id</th>
            <th scope="cols">Title</th>
            <th scope="cols">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(el => (
            <tr>
              <td>{el.userId}</td>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td
                className={`${el.completed ? 'text-success' : 'text-danger'}`}>
                {el.completed ? 'TRUE' : 'False'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
