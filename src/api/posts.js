// 학습노트 조작 관련 CRUD API 함수
import { posts } from "@/api/index";

// 학습노트 데이터 조회하는 API
function fetchPosts() {
  return posts.get("/");
}

// 학습노트 데이터 생성하는 API
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습노트 데티어 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost };
