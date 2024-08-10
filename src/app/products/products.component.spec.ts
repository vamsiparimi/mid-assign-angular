import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a method called `initialize`', () => {
    expect(component.initialize).toBeDefined();
    expect(typeof component.initialize).toBe('function');
  });

  it('should have a property `title` initialized as an empty string', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toBe('');
  });
});
