import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  public value: number = 50

  public decrement(step: number) {
    const result = this.value - step
    this.value = result < 0 ? 0 : result
  }

  public increment(step: number) {
    const result = this.value + step
    this.value = result > 100 ? 100 : result
  }
}
