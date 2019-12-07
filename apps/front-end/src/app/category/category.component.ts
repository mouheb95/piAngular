import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@workshop/core-data';
import { Category } from 'libs/core-data/src/lib/category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  cc: Category;

  constructor(private CategoryService: CategoryService) { }


  ngOnInit() {
    this.getCategory();
  }

  listCat = [] ;

  getCategory(){
    this.CategoryService.findall().subscribe(Category => {
      console.log(Category);
      this.listCat = Category;
   })
  }

  createCat(category){
    const c = {
      name : category
    }
      
    this.CategoryService.createCat(c).subscribe(res => {
      console.log(res)
    });
  }

  deleteCat(id) {
    this.CategoryService.deleteCat(id).subscribe(res => {
      console.log(res)
    })
  }

}