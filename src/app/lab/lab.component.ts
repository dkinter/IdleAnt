import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../game.service';
import { Research } from '../model/units/action';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit, OnDestroy {

  resDone = false

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.gameService.game.isLab = true
  }

  ngOnDestroy() {
    this.gameService.game.isLab = false
  }

  getRestId(index, res: Research) {
    return res.getId()
  }

}
