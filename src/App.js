import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      Hi
    </div>
  );
}



class Document extends React.Component
{
  render()
  {
    return(
      <div>
        <Header />
        <body>
          <About />

        </body>
        


      </div>




    )
  }
}



class Header extends React.Component
{
  render()
  {
    return(

      <div class="header">
        <a href="#default" class="name">Mervin Li</a>
        <div class="header-right">
          <a href="#home">Email</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    )
  }
}


class About extends React.Component
{
  render()
  {
    return(
      <div class="about">
        hi there
      </div>
    )
  }
}



export default Document;
