import { Component, signal } from "@angular/core";

import ThSearchInputComponent from "@app/components/search-input/search-input.component";
import ThIconComponent from "@app/components/icon/icon.component";
import { RouterLink } from "@angular/router";
import ThProviderCardComponent from "@app/features/providers/components/card/card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  imports: [RouterLink, ThSearchInputComponent, ThIconComponent, ThProviderCardComponent],
})
export default class HomePage {
  categories = signal([
    { name: 'Tecnología', icon: 'device-desktop' },
    { name: 'Textiles', icon: 'hanger' },
    { name: 'Alimentos', icon: 'tools-kitchen-2' },
    { name: 'Logística', icon: 'truck' },
    { name: 'Marketing', icon: 'speakerphone' },
  ])

  trustFeatures = signal([
    {
      icon: 'rosette-discount-check',
      title: 'Verificación Rigurosa',
      description: 'Auditamos cada proveedor para garantizar legalidad y capacidad operativa.'
    },
    {
      icon: 'cash',
      title: 'Pagos Seguros',
      description: 'Sistema de escrow para proteger tus transacciones de principio a fin.'
    },
    {
      icon: 'headset',
      title: 'Soporte Estratégico',
      description: 'Asistencia personalizada para resolver tus dudas y necesidades.'
    }
  ])
  opinion = signal({

  })
}