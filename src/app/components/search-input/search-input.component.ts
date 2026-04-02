import { Component, input, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import ThIconComponent from "@components/icon/icon.component";
import ThButtonComponent, {
  ButtonVariant,
  ButtonColor
} from "@components/button/button.component";

interface ButtonOptions {
  variant?: ButtonVariant
  color?: ButtonColor
  icon?: string
}

@Component({
  selector: 'th-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  imports: [
    ThIconComponent,
    ThButtonComponent,
    FormsModule
  ]
})
export default class ThSearchInputComponent {
  icon = input<string>('search')
  placeholder = input<string>('Buscar...')
  btnLabel = input<string>()
  btnOpts = input<ButtonOptions>({
    variant: 'solid',
    icon: 'arrow-right',
    color: 'secondary'
  })

  searchTerm = signal('')

  onClick = output<{ searchTerm: string }>()

  handleClick() {
    this.onClick.emit({
      searchTerm: this.searchTerm()
    })
  }
}