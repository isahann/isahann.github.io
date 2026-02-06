import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog-window',
    templateUrl: './blog-window.component.html',
    styleUrl: './blog-window.component.sass',
    standalone: false
})
export class BlogWindowComponent implements OnInit {
    public selectedBlogPost: string = 'assets/blog-posts/2026-01-27-first-post.md';

    constructor() {
    }

    ngOnInit() {
    }
}
