import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent {

  constructor(private router: Router) { }

  public urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

  urlInput = new FormControl<String | any>('', [Validators.pattern(this.urlRegex), Validators.required]);

  public redirect() {
    this.router.navigate(['analysis', this.urlInput.value]);
  }
}
