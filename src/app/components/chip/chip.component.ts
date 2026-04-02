import { Component, computed, input } from "@angular/core";

@Component({
  selector: 'th-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export default class ThChipComponent {
  square = input<boolean>(false)
  customClass = input<string>('', { alias: 'class' })

  classes = computed(() => {
    return {
      'chip': true,
      'chip--square': this.square(),
      [this.customClass()]: !!this.customClass()
    }
  })
}