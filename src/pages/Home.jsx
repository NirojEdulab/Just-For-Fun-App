import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>Welcome To HomePage</h1>
        </div>
      </div>
      <div className="startButton">
      <Link to='form' className='startButton'><button className="btn btn-primary btn-lg btn-block" id="submit" type="submit">Start Fun</button></Link>
      </div>
      
    </main>
  )
}

export default Home