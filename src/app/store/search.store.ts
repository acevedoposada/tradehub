import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export default class SearchStore {
  private _currentTerm = signal('')
  private _from = signal<string | undefined>(undefined)

  currentTerm = this._currentTerm.asReadonly()
  from = this._from.asReadonly()

  setTerm(term: string, from?: string) {
    this._currentTerm.set(term)
    this._from.set(from)
  }

  reset() {
    this._currentTerm.set('')
    this._from.set(undefined)
  }
}