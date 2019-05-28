import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  head = 'my-book-list';
  bookList=[];

  addBook(title: String, author: String) {
    this.bookList.push({
      title: title,
      author: author
    });
    console.log(this.bookList);
  }
}
