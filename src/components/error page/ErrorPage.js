import React from 'react'
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <h1>OOPs!!!</h1>
        <h1>Something Went Wrong....</h1>
        <h1>{err.statusText}</h1>
    </div>
  )
}

export default ErrorPage;