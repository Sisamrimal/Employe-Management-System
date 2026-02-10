
"use cleint"

import React from 'react'

const page = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📊 Admin Dashboard</h1>
      <p>Welcome back! This is your simple dashboard view.</p>
      
      <div style={{ 
        marginTop: '20px', 
        display: 'grid', 
        gap: '20px', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' 
      }}>
        <div >
          <h3>Employe Dashboard</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,284</p>
        </div>
        <div >
          <h3>Active employees</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>42</p>
        </div>
        <div >
          <h3>System Status</h3>
          <p style={{ color: 'green' }}> HR Dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default page
