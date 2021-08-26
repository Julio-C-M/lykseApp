import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides-start',
  templateUrl: './slides-start.page.html',
  styleUrls: ['./slides-start.page.scss'],
})
export class SlidesStartPage{
  slides = [
    {
      imgLogo:'assets/Logo2.png',
      titulo:'¡MANTÉN EL CONTROL TODO EL TIEMPO!',
      img:'assets/img/map.svg',
      texto: 'Verificación de rondines y Control del tiempo'
    },
    {
      imgLogo:'assets/Logo2.png',
      titulo:'¡GESTIÓN DE ÓRDENES!',
      img:'assets/img/policia.svg',
      texto: 'Reporte de incidentes, <br> Accesos, Botón de Pánico.'
    },
    {
      imgLogo:'assets/Logo2.png',
      titulo:'¡MEDICIÓN DE RESULTADOS!',
      img:'assets/img/portapapeles.svg',
      texto: 'Gráficas explicitas, <br> Evidencias, Cumplimiento <br> De consignas.'
      
    }
  ];

  constructor(private navCtrl: NavController) {}
  
  onClick(){
    this.navCtrl.navigateBack('/tabs/home')
  }
}
