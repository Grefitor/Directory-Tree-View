import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Directory } from "../models/directory.model";

@Component({
  selector: "app-tree-view",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.css"]
})
export class TreeViewComponent implements OnInit {
  @Input() directories: Array<Directory>;
  @Output() childChanged = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  checked(index: number) {
    this.directories[index].check();
  }
}
