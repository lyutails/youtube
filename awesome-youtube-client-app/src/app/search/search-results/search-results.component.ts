import { Component, Input } from '@angular/core';
import * as cards from '../../../../response.json';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { SearchItemComponent } from '../search-item/search-item.component';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { SearchItem } from '../search-item.model';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { ViewsCountAscPipe } from '../../pipes/views-count-asc.pipe';
import { ViewsCountDescPipe } from '../../pipes/views-count-desc.pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    SearchItemComponent,
    WordsPipePipe,
    ColouredByDateBorderDirective,
    ViewsCountAscPipe,
    ViewsCountDescPipe
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  responseCards = cards.items;
  @Input() filterValueDownFromApp = '';
  gotFilterValue = '';
  @Input() fakeSearchDownFromApp = '';
  @Input() getFakeSearchValue = '';
  responseCardsOnRequest: SearchItem[] = [];
  @Input() gotViewsCountAcsOrder = true;
  @Input() gotViewsCountDescOrder = true;

  getCardsBasedOnHeaderInputValue(value: string): SearchItem[] {
    this.getFakeSearchValue = value;
    return this.getFakeSearchValue === ''
      ? []
      : this.responseCards.filter(
          item =>
            item.snippet.title.toLowerCase().includes(value) &&
            this.responseCardsOnRequest.push(item)
        );
  }
}
