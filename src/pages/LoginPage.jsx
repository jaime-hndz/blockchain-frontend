import React from 'react'

export const LoginPage = () => {
  return (
    <div>

        LoginPage
        <button onClick={() => {
          localStorage.setItem('user', JSON.stringify({ name: 'jaime' }));
          window.location.href = '/';
        }}>Login</button>

    </div>
  )
}
