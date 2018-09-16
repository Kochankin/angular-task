import { ProductDetailsModule } from './product-details.module';

describe('ProductDetailsModule', () => {
  let productDetailsModule: ProductDetailsModule;

  beforeEach(() => {
    productDetailsModule = new ProductDetailsModule();
  });

  it('should create an instance', () => {
    expect(productDetailsModule).toBeTruthy();
  });
});
