import { ID } from "@datorama/akita";

export interface Post {
  id: ID;
  userId: ID;
  title: string;
  body: string;
}

export function createPost(params: Partial<Post>) {
  return {
    ...params
  } as Post;
}
