import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Product, Image } from 'src/app/pages/medical-history-entry/medical-history-entry.model';

@Component({
  selector: 'app-medical-history-add',
  templateUrl: './medical-history-add.component.html',
})
export class MedicalHistoryAddComponent {
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  text: string = '';

  categoryOptions = ['Sneakers', 'Apparel', 'Socks'];

  colorOptions: any[] = [
    { name: 'Black', background: 'bg-gray-900' },
    { name: 'Orange', background: 'bg-orange-500' },
    { name: 'Navy', background: 'bg-blue-500' },
  ];

  product: Product = {
    name: '',
    price: '',
    code: '',
    sku: '',
    status: 'Draft',
    tags: ['Nike', 'Sneaker'],
    category: 'Sneakers',
    colors: ['Blue'],
    stock: 'Sneakers',
    inStock: true,
    description: '',
    images: [],
  };

  uploadedFiles: any[] = [];

  showRemove: boolean = false;

  onChipRemove(item: string) {
    this.product.tags = this.product.tags.filter((i) => i !== item);
  }

  onColorSelect(color: string) {
    this.product.colors.indexOf(color) == -1
      ? this.product.colors.push(color)
      : this.product.colors.splice(this.product.colors.indexOf(color), 1);
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.product.images.push(file);
    }
  }

  onImageMouseOver(file: Image) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name
        ? (el.nativeElement.style.display = 'flex')
        : null;
    });
  }

  onImageMouseLeave(file: Image) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name
        ? (el.nativeElement.style.display = 'none')
        : null;
    });
  }

  removeImage(file: Image) {
    this.product.images = this.product.images.filter((i) => i !== file);
  }
}
