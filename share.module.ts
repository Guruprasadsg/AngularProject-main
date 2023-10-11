import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './user/app.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [AppService]
  })
  export class SharedModule { }