import { Component, OnInit } from '@angular/core';
import { filterMethod, NgEntityServiceLoader, NgEntityServiceNotifier, ofType } from '@datorama/akita-ng-entity-service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { memo } from 'helpful-decorators';
import { createPost } from '../state/post.model';
import { PostsQuery } from '../state/posts.query';
import { PostsService } from '../state/posts.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ = this.postsQuery.selectAll();
  loaders = this.loader.loadersFor();

  constructor(private postsQuery: PostsQuery, private postsService: PostsService,
    private loader: NgEntityServiceLoader, private notifier: NgEntityServiceNotifier) {

    this.notifier.action$.pipe(
      ofType('success'),
      filterMethod('DELETE'),
      untilDestroyed(this)
    ).subscribe((v) => console.log(v));

  }

  ngOnInit(): void {
    this.postsService.get({
      mapResponseFn: (res) => {
        return res;
      },
    }).subscribe();
  }

  fetchOne(id: number) {
    this.postsService.get(id).subscribe(console.log);
  }

  addPost() {
    const post = createPost({ userId: 1222, title: 'New Post', body: 'new post description' });
    this.postsService.add(post, { prepend: true }).subscribe();
  }

  updatePost(id: number) {
    this.postsService.update(id, { title: 'Updated title' }).subscribe();
  }

  removePost(id: number) {
    this.postsService.delete(id, { successMsg: 'Deleted Successfully', errorMsg: 'Cannot delete post' }).subscribe();
  }

  @memo()
  updateEntityLoading(id: number) {
    return this.loaders.updateEntity(id);
  }

  @memo()
  deleteEntityLoading(id: number) {
    return this.loaders.deleteEntity(id);
  }

}

