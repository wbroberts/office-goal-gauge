import { Component, Prop } from '@stencil/core';

import c3 from 'c3';
import moment from 'moment';

import { Data } from '../../models/data.model';

@Component({
  tag: 'mki-office-goals-chart',
  styleUrl: 'mki-office-goals-chart.css'
})
export class OfficeGoalsChart {
  chart: c3.ChartAPI;

  @Prop() data: Data[];
  @Prop() goal: number;
  @Prop() progress: number;
  @Prop() color: string = '#004C67';

  private lastDay: number = moment().daysInMonth();

  componentDidLoad() {
    this.createChart(this.data, this.goal);
  }

  private createChart(data: Data[], goal: number) {
    const linear = this.calculateClosesPerDay(data, goal);

    this.chart = c3.generate({
      bindto: '#goals-chart',
      data: {
        type: 'line',
        x: 'x',
        columns: [
          ['x', ...data.map(d => d.day)],
          ['Goal', ...linear],
          ['Closes Compounded', ...data.map(d => d.total)],
          ['Closes Per Day', ...data.map(d => d.sales)]
        ],
        regions: {
          Goal: [{ style: 'dashed' }]
        },
        colors: {
          Goal: this.color
        }
      },
      axis: {
        x: {
          label: 'Day of Month'
        },
        y: {
          label: 'Deals Closed',
          min: 0
        }
      }
    });
  }

  private calculateClosesPerDay(data: Data[], goal: number): number[] {
    const perDay = goal / this.lastDay;
    let total = 0;
    const toGoal = [];

    while (toGoal.length !== data.length) {
      total += perDay;
      toGoal.push(total);
    }

    return toGoal;
  }
}
