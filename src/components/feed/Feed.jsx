import Post from '../post/Post'
import Share from '../share/Share'

export default function Feed() {
  return (
    <div className="col-5">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
