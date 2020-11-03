import { request } from "./request";

export function getCommentData(blogId) {
  return request({
    url: "/comments/" + blogId
  });
}

export function setCommentData(newComment) {
  return request({
    url: "/comments/post",
    method: "post",
    data: {
      commentDate: newComment.commentDate,
      blogId: newComment.blogId,
      fromUserId: newComment.fromUserId,
      content: newComment.content
    }
  });
}

export function updateCommentData(item) {
  return request({
    url: "/comments/put/" + item.id,
    method: "put",
    data: {
      likeNum: item.likeNum
    }
  });
}

export function setReplyData(newReply){
  return request({
    url: "/replies/post",
    method: "post",
    data: {
      commentId: newReply.commentId,
      fromUserName: newReply.fromUserName,
      toUserName: newReply.toUserName,
      content: newReply.content,
    }
  });
}
