import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  urlInput = new FormControl('', [Validators.required]);

  public analyseURL() {
    // console.log(this.urlInput.value);
  }
}
