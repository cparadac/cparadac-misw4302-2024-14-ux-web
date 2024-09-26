import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customize",
  templateUrl: "./customize.component.html",
  styleUrls: ["./customize.component.css"]
})
export class CustomizeComponent implements OnInit {

  public days = [
    { id: "L", label: "L" },
    { id: "M", label: "M" },
    { id: "Mi", label: "M" },
    { id: "J", label: "J" },
    { id: "V", label: "V" },
    { id: "S", label: "S" },
    { id: "D", label: "D" },
  ];

  constructor() { }

  ngOnInit() {
    console.log("CustomizeComponent initialized");
  }
}