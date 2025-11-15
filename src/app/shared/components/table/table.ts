import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface TableColumn {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table<T> {
  @Input() data: T[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() tableTitle = '';

  get headers(): string[] {
    // If columns are provided, use them; otherwise auto-generate from data
    if (this.columns && this.columns.length > 0) {
      return this.columns.map((col: TableColumn) => col.key);
    }

    if (this.data && this.data.length > 0) {
      return Object.keys(this.data[0] as object);
    }
    return [];
  }

  getHeaderLabel(key: string): string {
    const column = this.columns.find((col: TableColumn) => col.key === key);
    return column ? column.label : key;
  }

  getValue(row: T, key: string): any {
    const value = (row as any)[key];
    // Check if the key represents a price/currency field
    if (key.toLowerCase().includes('price') && typeof value === 'number') {
      return value;
    }
    return value;
  }

  isCurrencyField(key: string): boolean {
    return key.toLowerCase().includes('price');
  }
}
