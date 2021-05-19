import { Col } from 'react-bootstrap'
import Post from '../post/Post'
import Share from '../share/Share'
import { Posts } from '../../dummyData'

export default function Feed() {
  return (
    <Col sm={8}>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
      
    </Col>
  )
}
