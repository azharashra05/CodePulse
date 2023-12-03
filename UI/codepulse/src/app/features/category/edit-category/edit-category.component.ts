import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {

  id:string | null=null;
  category?:Category;
  paramsSubscription?:Subscription;
  constructor(private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(paraams)=>
      {
        this.id=paraams.get('id');

        if(this.id)
        {
          //get the data from the api for this category id
          this.categoryService.getCategoryById(this.id).subscribe({
            next:(response)=>
            {
              this.category=response;
            }
          });
        }
      }
    })
  }

  onFormSubmit():void
  {
    console.log(this.category);
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
