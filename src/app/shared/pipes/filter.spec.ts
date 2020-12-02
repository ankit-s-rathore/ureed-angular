import { FilterPipe } from './filter.pipe';

const mockItems = [
  { id: 1, name: 'Angular', category: 'angular' },
  { id: 2, name: 'React', category: 'react' },
  { id: 3, name: 'HTML', category: 'html' },
];

describe('FilterPipe', () => {
  it('should not apply filter if no records', () => {
    const pipe = new FilterPipe();

    const filteredResult = pipe.transform([], {
      query: 'angular',
      filterBy: 'name',
    });

    expect(filteredResult.length).toBe(0);
  });

  it('should not apply filter if no query to search', () => {
    const pipe = new FilterPipe();

    const filteredResult = pipe.transform(mockItems, {
      query: '',
      filterBy: 'name',
    });

    expect(filteredResult.length).toBe(3);
  });

  it('should filter data', () => {
    const pipe = new FilterPipe();

    const filteredResult = pipe.transform(mockItems, {
      query: 'angular',
      filterBy: 'name',
    });

    expect(filteredResult.length).toBe(1);
    expect(filteredResult[0].name).toEqual('Angular');
  });
});
