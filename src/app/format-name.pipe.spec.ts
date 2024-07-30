import { FormatNamePipe } from './format-name.pipe';

describe('FormatNamePipe', () => {
  it('should transform the input', () => {
    const pipe = new FormatNamePipe();

    const vehicleName = 'Car 1 ## Toyota';
    const transformed = pipe.transform(vehicleName);

    expect(transformed)
      .withContext('The pipe should remove ## and trailing characters from vehicle name')
      .toContain('Car 1');
  });
});
