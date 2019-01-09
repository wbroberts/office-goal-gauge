import { Component, Prop } from '@stencil/core';
import { Data } from '../../models/data.model';

@Component({
  tag: 'mki-office-goals',
  styleUrl: 'mki-office-goals.css'
})
export class OfficeGoals {
  @Prop() data: string;
  @Prop() goal: number;
  @Prop() color: string = '#641019';

  dataArray: string = JSON.stringify([
    { day: 1, sales: 0, total: 0 },
    { day: 8, sales: 1, total: 2 },
    { day: 9, sales: 3, total: 5 },
    { day: 10, sales: 3, total: 5 },
    { day: 14, sales: 1, total: 6 },
    { day: 15, sales: 2, total: 8 },
    { day: 16, sales: 1, total: 9 },
    { day: 17, sales: 2, total: 11 },
    { day: 18, sales: 3, total: 14 },
    { day: 19, sales: 1, total: 15 },
    { day: 21, sales: 2, total: 17 },
    { day: 22, sales: 1, total: 18 },
    { day: 23, sales: 1, total: 19 },
    { day: 24, sales: 1, total: 20 },
    { day: 25, sales: 2, total: 22 },
    { day: 28, sales: 1, total: 23 },
    { day: 29, sales: 2, total: 25 }
  ]);

  parsedData: Data[] = JSON.parse(this.dataArray);

  render() {
    return [
      <div id="goals-chart" />,
      <mki-office-goals-chart
        data={this.parsedData}
        goal={this.goal}
        color={this.color}
      />
    ];
  }
}
