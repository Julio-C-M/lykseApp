import { Component, OnInit } from '@angular/core';
import { QRScanner,QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-registros-qr',
  templateUrl: './registros-qr.page.html',
  styleUrls: ['./registros-qr.page.scss'],
})
export class RegistrosQrPage implements OnInit {

  constructor(private qr: QRScanner) { }

  ngOnInit() {
    this.scan();
  }

  scan (){
    this.qr.prepare().then((status:QRScannerStatus)=>{
      if(status.authorized)
      {
        this.qr.show()
        document.getElementsByTagName("body")[0].style.opacity="0.5";
        this.qr.scan().subscribe((val)=>{
          alert(val);
          document.getElementsByTagName("body")[0].style.opacity="1";
        })

      }
      else if (status.denied)
      {

      }
      else{

      }
    })

  }
}