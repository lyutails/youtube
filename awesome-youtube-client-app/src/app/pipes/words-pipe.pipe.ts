import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
// import { YoutubeService } from '../youtube/youtube.service';

@Pipe({
  name: 'wordsPipe',
  standalone: true,
})
export class WordsPipePipe implements PipeTransform {
  transform(responseCards: SearchItem[], inputValue: string): SearchItem[] {
    if (inputValue === '') {
      return [...responseCards];
    } else {
      return responseCards.filter(item =>
        item.snippet.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  }
}
