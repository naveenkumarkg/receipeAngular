import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shopping.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName', {static: false}) ingNameRef: ElementRef;
  @ViewChild('ingAmount',{static: false}) ingAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngrdients(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmount = this.ingAmountRef.nativeElement.value;
    const newIngrdient = new Ingredient (ingName, ingAmount)
    this.ingredientAdded.emit(newIngrdient)
  }

}
