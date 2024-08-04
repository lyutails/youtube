import { YoutubeActions } from './youtube.actions';

describe('YoutubeActions', () => {
  const mockResponse = {
    kind: 'youtube#videoListResponse',
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
    pageInfo: {
      totalResults: 10,
      resultsPerPage: 10,
    },
    items: [
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
        id: 'YN8zNnV0sK8',
        snippet: {
          publishedAt: '2024-06-11T12:42:19.000Z',
          channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
          title: 'Introduction to Angular - Learning Angular',
          description:
            'In this series, learn how to build your first Angular application.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Angular',
          tags: ['angular', 'angular курс'],
          categoryId: '27',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Introduction to Angular - Learning Angular',
            description:
              'In this series, learn how to build your first Angular application.',
          },
          defaultAudioLanguage: 'en-US',
        },
        statistics: {
          viewCount: '33265',
          likeCount: '1173',
          dislikeCount: '26',
          favoriteCount: '0',
          commentCount: '170',
        },
      },
    ],
  };

  describe('getCards', () => {
    it('should create an action to get cards', () => {
      const expectedAction = {
        type: YoutubeActions.getCards.type,
        value: 'angular',
      };
      const action = YoutubeActions.getCards({ value: 'angular' });
      expect(action).toEqual(expectedAction);
    });
  });

  describe('retrieveCards', () => {
    it('should create an action to get cards successfully', () => {
      const expectedAction = {
        type: YoutubeActions.getCardsSuccess.type,
        items: mockResponse.items,
      };
      const action = YoutubeActions.getCardsSuccess({
        items: mockResponse.items,
      });
      expect(action).toEqual(expectedAction);
    });
  });
});