import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  seletedfile = null;
  title = 'Add User';
  angForm: FormGroup;
  constructor(private userservice: UserService, private fb: FormBuilder,private route: ActivatedRoute, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      age: ['', Validators.required ],
      email: ['', Validators.required ],
      img: ['', Validators.required ],

   });
  }
  addCoin(user) {
     console.log(user.value);
      this.userservice.addUser(user.value);
      setTimeout(() => {
        this.router.navigate(['/index']);
    }, 100);
      

      
  }
  onFileChange(event){
    this.seletedfile = event.target.files[0];
    console.log(this.seletedfile)
  }

  uploadimg(){

  }

  ngOnInit() {
  }
}

