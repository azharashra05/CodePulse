import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {

  id:string | null=null;
  paramsSubscription?:Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(paraams)=>
      {
        this.id=paraams.get('id');
      }
    })
  }

}
