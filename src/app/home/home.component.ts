import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public blindsPosition: number = 25

  public adjustBlindsPositionBy(delta: number): void {
    this.blindsPosition = Math.max(0, Math.min(100, this.blindsPosition + delta))
  }
}
