import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export default class SearchStore {
  private _currentTerm = signal('')
  private _from = signal<string | undefined>(undefined)
  private _category = signal<string>('')

  currentTerm = this._currentTerm.asReadonly()
  category = this._category.asReadonly()
  from = this._from.asReadonly()

  setTerm(term: string, from?: string) {
    this._currentTerm.set(term)
    this._from.set(from)
  }
  
  setCategory(category: string, from?: string) {
    this._category.set(category)
    this._from.set(from)
  }

  reset() {
    this._currentTerm.set('')
    this._category.set('')
    this._from.set(undefined)
  }
}