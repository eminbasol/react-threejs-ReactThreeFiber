import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>DEEPTECH.</div>
        <nav>
          <ul>
            <li className='btn'>
              <a href='/'>Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
