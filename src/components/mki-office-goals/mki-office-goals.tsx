import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mki-office-goals',
  styleUrl: 'mki-office-goals.css'
})
export class OfficeGoals {
  @Prop() data: string;
  @Prop() goal: number;
  @Prop() color: string;

  render() {
    return [
      <div id="goals-chart" />,
      <mki-office-goals-chart
        data={JSON.parse(this.data)}
        goal={this.goal}
        color={this.color}
      />
    ];
  }
}
