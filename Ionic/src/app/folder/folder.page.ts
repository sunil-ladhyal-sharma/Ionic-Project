import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestAllService } from '../http-request-all.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
public step:boolean = false;
public productList:any;
  constructor(private activatedRoute: ActivatedRoute, private ser : HttpRequestAllService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.ser.getProductList().subscribe(res => {
      console.log(res);
      this.productList = res;
    })
  }

  showModal() {
   this.step = true;
      console.log(this.step)
  }


  close() {
    this.step = false;

  }


}
