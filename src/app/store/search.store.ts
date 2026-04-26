import { Injectable, signal } from "@angular/core";

interface Filters {
  categories: string[];
  location?: string | null | undefined;
  min?: string | null | undefined;
  max?: string | null | undefined;
  qualification?: string | null | undefined;
}

@Injectable({ providedIn: 'root' })
export default class SearchStore {
  private _currentTerm = signal('')
  private _from = signal<string | undefined>(undefined)
  private _category = signal<string>('')
  private _filters = signal<Filters>({
    categories: [],
    location: undefined,
    min: undefined,
    max: undefined,
    qualification: undefined
  })

  currentTerm = this._currentTerm.asReadonly()
  category = this._category.asReadonly()
  from = this._from.asReadonly()
  filters = this._filters.asReadonly()

  setTerm(term: string, from?: string) {
    this._currentTerm.set(term)
    this._from.set(from)
  }
  
  setCategory(category: string, from?: string) {
    this._category.set(category)
    this._from.set(from)
  }

  setFilters(filters: Filters) {
    this._filters.set(filters)
  }

  reset() {
    this._currentTerm.set('')
    this._category.set('')
    this._from.set(undefined)
  }
}