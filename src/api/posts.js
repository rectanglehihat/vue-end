// 학습노트 조작 관련 CRUD API 함수
import { posts } from "@/api/index";

// 학습노트 데이터 목록 조회하는 API
function fetchPosts() {
  return posts.get("/");
}

// 특정 학습노트를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습노트 데이터 생성하는 API
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습노트 데이터 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

// 한습노트 데이터 수정하는 API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
