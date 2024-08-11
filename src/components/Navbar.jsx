import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-primary">
        <div class="container-fluid">
        <a class="navbar-brand"> 
              <img src="https://file1.removal.ai/preview/e97a7564-e234-4d86-9f74-0c49c28aba4d_triangle-logo-template.png"style={{marginBottom:10}} alt="Bootstrap" width="40" height="40" />
           <font style={{ color: 'aquamarine' }}></font>𝕋𝕆-<font style={{ color: 'yellow' }}>𝔻𝕆-</font><font style={{ color: 'beige' }}>αρρ</font>
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>𝐀𝐃𝐃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search" style={{ color: 'white' }}>𝐒𝐄𝐀𝐑𝐂𝐇</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view" style={{ color: 'white' }}>𝐕𝐈𝐄𝐖</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar