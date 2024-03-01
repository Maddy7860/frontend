import React from 'react'

const Home = () => {

  const siteTitle = 'My Website Name';

  const num1 = '10';
  const num2 = '20';

  const myStyles = {
    textAlign: 'center', 
  }



  return (
    <div>
    <h1 className='my-btn' style={myStyles}>
      {siteTitle} </h1>
      <h4> {num1 * num2}  </h4>
      
      <h1 style={{ color : 'blueviolet', fontSize : '4rem' }}>My Next.js App</h1>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate excepturi maiores possimus labore. Veritatis necessitatibus accusantium eum illum molestiae explicabo.</p>
    </div>
  )
}

export default Home