import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // message: String ='hello';
  // @Output() notify: EventEmitter<String> = new MessageEvent<String>()
  user: any;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      age: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }


  updateCoin(user) {
    this.route.params.subscribe(params => {
    this.userservice.updateCoin(user.value , params['id']);
    setTimeout(() => {
      this.router.navigate(['index']);
  }, 100);
    
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userservice.editCoins(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }
}


