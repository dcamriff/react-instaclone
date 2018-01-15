import React, {Component} from 'react';
import Comment from './Comment';
import {FaHeartO, FaCommentO} from 'react-icons/lib/fa'
import styled from 'styled-components'

const PostContainer = styled.div `
background-color: #fff;
border-radius: 3px;
width: 95vw;
max-width: 600px;
margin: 20px auto;
border: 1px solid #e6e6e6;
`
const PostUser = styled.div `
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
-webkit-box-align: center;
align-items: center;
padding: 16px;
img{
  height: 30px;
  width: 30px;
  border-radius: 100%;
  /* border-style: none; */
}
p{
  padding-left: 5px;
  font-weight: bold;
}
`

const PostUserContent = styled.div `
img{
  max-width: 600px;
  margin: 0 auto;
  border-style: none;
}
p{
  padding: 5px 16px;
}
`

const PostDetails = styled.div `
background-color: white;
`

const PostIcons = styled.div `
svg{
  padding: 10px;
}
`
const PostComments = styled.div `
background-color: white;
`

class Post extends Component {

  render() {
    const {post} = this.props;
    return (
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username}/>
          <p>{post.user.username}</p>
        </PostUser>
        <PostUserContent>
          <img src={post.image.url}/>
          <p>{post.caption}</p>
        </PostUserContent>
        <PostDetails>
          <PostIcons>
            <FaHeartO size={35}/>
            <FaCommentO size={35}/>
          </PostIcons>
          <PostComments>
            <p>{post.likes.length}
              likes</p>
            {post
              .comments
              .map((comment, i) => <Comment key={i} comment={comment}/>)}
          </PostComments>
        </PostDetails>
      </PostContainer>
    )
  }
}

export default Post;