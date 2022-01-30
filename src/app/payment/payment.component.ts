import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../shared/window-ref.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[WindowRefService]
})
export class PaymentComponent implements OnInit {

  constructor(private winRef:WindowRefService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  createRzpayOrder() {
    //console.log(data);
    const headers = { 'content-type': 'application/json' };
    this.http
      .get('http://portal.esquare-homeschooling.com:3000/payment/createorder', { headers: headers })
      .subscribe((res) => {
        console.log(res['id']);
       this.payWithRazor(res['id']);

       
      });
    // call api to create order_id
  }
  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_H63Iwu9sdwkPrq',
      amount: 20000, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'ESQUARE', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }


}
