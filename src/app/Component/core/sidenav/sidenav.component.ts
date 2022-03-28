import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Router,RouterLink } from '@angular/router';







interface FoodNode {
  name: string;
  children?: FoodNode[];

  
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Appointment',
    children: [{name: 'View appointment'},{name: 'Book appointment'},],
  },
  {
    name: 'Doctors',
    children: [{name: 'All Doctor'},{name: 'Add Doctor'},],
  },
  {
    name: 'Patients',
    children: [{name: 'All Patient'},{name: 'Add Patient'},],
  },
  {
    name: 'Staff',
    children: [{name: 'All Staff'},{name: 'Add Employee'},],
  },
  {
    name: 'Billing',
    children: [{name: 'Bill List'},{name: 'Add Bill'},{name: 'Invoice'},],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(public _Router:Router) { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  goAppointment(){
  this._Router.navigate(['/appointment/view']);
  }
}
