

import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html'
})
export class FunComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  private defaultJoke = `Един футболен отбор играл ужасно и загубил катастрофално мача. След края на мача треньорът ги подхваща в съблекалнята:
- Всичко знам! Снощи сте се напили като свине! Кой организира запоя?
Тишина...
- Пак питам - кой предложи да се напиете?
Пак тишина.
- Добре, ще поставя въпроса по друг начин - кой пръв каза "и сега к'во"?`;

  open(content) {
    this.modalService.open(this.defaultJoke).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}