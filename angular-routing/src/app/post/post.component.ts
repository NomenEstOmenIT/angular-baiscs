import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService, Post } from "../posts.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.postsService.getById(Number(params.id));
    });
  }

  loadPost() {
    this.router.navigate(["/posts", 44]);
  }
}
