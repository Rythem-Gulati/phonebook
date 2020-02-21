import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact } from '../contact.model';

@Component({
  selector: 'app-e-item',
  templateUrl: './e-item.component.html',
  styleUrls: ['./e-item.component.css']
})
export class EItemComponent implements OnInit {
  @Input()contact:contact;
  constructor() { }

  ngOnInit() {
  }
 
}
