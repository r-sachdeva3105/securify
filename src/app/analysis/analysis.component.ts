import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import response from '../assets/response.json'

@Component({
  selector: 'analysis',
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
    this.urlId = this.urlId.replaceAll('=','');
    this.analysisReport();
  }

  public analysisReport() {
    this.appService.getReport(this.urlId).subscribe((response: any) => {
      this.report = response.data.attributes;
      console.log(this.report);
    })
    // this.report = response.data.attributes;
    // console.log(this.report);
  }

  public isSuspicious() {
    if (this.report?.last_analysis_stats.malicious > 2 || this.report?.last_analysis_stats.suspicious > 2) {
      return true
    } else {
      return false
    }
  }

  public formatDate(date: number) {
    if (date === undefined) {
      return 'N/A';
    }
    return new Date(date * 1000).toLocaleString();
  }


}