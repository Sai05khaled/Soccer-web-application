import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css'],
})
export class MatcheComponent implements OnInit {
  @Input() match: any;
  @Output() newMatche: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {
      return ['Win', 'green'];
    } else if (Number(a) < Number(b)) {
      return ['Loss', 'blue'];
    } else {
      return ['Draw', 'yellow'];
    }
  }
  passId(id: any) {
    console.log('here id match', id);
    this.newMatche.emit(id);
  }
}
