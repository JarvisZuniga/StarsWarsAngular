import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  characters = [
    {
      id: '1',
      name: 'Luke Skywalker',
      image: 'Luke Skywalker.jpeg',
    },
    {
      id: '2',
      name: 'C-3PO',
      image: 'C-3PO.jpeg',
    },
    {
      id: '3',
      name: 'R2-D2',
      image: 'R2-D2.jpg',
    },
    {
      id: '4',
      name: 'Dark Vader',
      image: 'Dark-Vader.jpg',
    },
    {
      id: '5',
      name: 'Leia Organa',
      image: 'Leia-Organa.jpeg',
    },
    {
      id: '6',
      name: 'Anikin',
      image: 'Anikin.jpeg',
    }    
  ]
}
