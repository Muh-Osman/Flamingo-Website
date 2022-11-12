import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import './NoMatch.css'

const NoMatch = () => {

  const navigate = useNavigate()

  return (
    <>
      <div>404 Page not found</div>
      <Button onClick={() => navigate(-1)} accessibility={'Back'} title={'Back'} />
    </>
  )
}

export default NoMatch