import React from 'react'

const Footer = () => {
    let footerstyle={
        border:'2px solid red',
        marginBottom: '0'
    }

  return (
    <div>
      <footer className='bg-dark text-light '>
      <p className='text-center py-3' style={footerstyle}>copyrights &copy; www.Newsfeed.com</p>
    </footer>
    </div>
  )
}

export default Footer
