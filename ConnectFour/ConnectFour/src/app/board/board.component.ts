import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent, CommonModule, NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  squares: string[] = [];
  xIsNext?: boolean;
  winner?: string;

  constructor() {}

  ngOnInit() {
      this.newGame();
  }

  newGame() {
    this.squares = Array(30).fill(null);
    this.winner = undefined;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0,1,2,3],[1,2,3,4],[2,3,4,5],
      [6,7,8,9],[7,8,9,10],[8,9,10,11],
      [12,13,14,15],[13,14,15,16],[14,15,16,17],
      [18,19,20,21],[19,20,21,22],[20,21,22,23],
      [24,25,26,27],[25,26,27,28],[26,27,28,29],
      [0,6,12,18],[6,12,18,24],
      [1,7,13,19],[7,13,19,25],
      [2,8,14,20],[8,14,20,26],
      [3,9,15,21],[9,15,21,27],
      [4,10,16,22],[10,16,22,28],
      [5,11,17,23],[11,17,23,29],
      [0,7,14,21],[1,8,15,22],[2,9,16,23],
      [6,13,20,27],[7,14,21,28],[8,15,22,29],
      [3,8,13,18],[4,9,14,19],[5,10,15,20],
      [9,14,19,24],[10,15,20,25],[11,16,21,26]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a,b,c,d] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] &&
        this.squares[a] === this.squares[d]
      ) {
        return this.squares[a]
      }
    }
    return undefined;
  }
}
