import { SafeResourceURLPipe } from './safe-resource-url.pipe';

describe('SafeResourceURLPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeResourceURLPipe();
    expect(pipe).toBeTruthy();
  });
});
