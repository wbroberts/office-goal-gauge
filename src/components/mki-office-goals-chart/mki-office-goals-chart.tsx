import { Component, Prop } from '@stencil/core';

import c3 from 'c3';
import moment from 'moment';

@Component({
  tag: 'mki-office-goals-chart',
  styleUrl: 'mki-office-goals-chart.css'
})
export class OfficeGoalsChart {
  chart: c3.ChartAPI;

  @Prop() data: number[];
  @Prop() goal: number;
  @Prop() progress: number;
  @Prop() color: string = '#004C67';

  private lastDay: number = moment().daysInMonth();

  componentWillLoad() {
    this.createChart(this.data, this.goal);
  }

  private createChart(data: number[], goal: number) {
    this.chart = c3.generate({
      bindto: '#goals-chart',
      data: {
        type: 'line',
        x: 'x',
        columns: [
          ['x', ...this.data.map((_, i) => i + 1), this.lastDay],
          ['Goal', ...data, goal]
        ],
        regions: {
          Goal: [{ start: this.data.length, end: this.lastDay, style: 'dashed' }]
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
}
