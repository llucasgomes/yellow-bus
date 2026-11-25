import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeftRight, lucideBusFront } from '@ng-icons/lucide';
import {
  MapComponent,
  MapControlsComponent,
  MapMarkerComponent,
  MarkerContentComponent,
  MarkerPopupComponent,
} from 'ng-mapcn';

import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDrawerImports } from '@/shared/components/drawer';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MapComponent,
    MapControlsComponent,
    MapMarkerComponent,
    MarkerContentComponent,
    MarkerPopupComponent,
    ...ZardDrawerImports,
    ZardButtonComponent,
    NgIcon,
  ],
  providers: [
    provideIcons({
      lucideArrowLeftRight,
      lucideBusFront,
    }),
  ],
})
export class MapPage {
  // O drawer fica permanentemente aberto entre os limites definidos
  readonly isDrawerOpen = signal(true);

  // Snap Points:
  // 0.22 = 22% da altura da tela (recolhido no ponto mínimo fixo)
  // 0.75 = 75% da altura da tela (expandido no limite máximo fixo)
  readonly snapPoints = [0.19, 0.44, 0.5] as const;
  readonly activeSnapPoint = signal<number | string>(0.22);
}
