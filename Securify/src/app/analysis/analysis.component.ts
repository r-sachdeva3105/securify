import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.sass']
})
export class AnalysisComponent {

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  public url: any = '';
  public urlId = '';
  public report: any;

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get('url');
    this.urlId = btoa(this.url);
    this.analysisReport();
    
  }

  public analysisReport() {
    this.appService.getReport(this.urlId).subscribe((response: any[]) => {
      this.report = response;
      console.log(this.report);
      
    })
  }
}