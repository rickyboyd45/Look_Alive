
const Feed = () => {

  return (
    <div>

      <h3>{showPosts?.fields.author}</h3>
      <p><em>{showPosts?.fields.title}</em></p>
      <p><em>{showPosts?.fields.posts}</em></p>

    </div>
  )
} 

export default Feed;