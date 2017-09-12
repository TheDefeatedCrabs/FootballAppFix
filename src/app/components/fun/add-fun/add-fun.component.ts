import { Component, OnInit, } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Joke } from '../../../models/Joke';

// import { ClientService } from '../../../services/client.service';

@Component({
  // selector: 'app-add-news',
  selector: 'flash-messages',
  templateUrl: './add-fun.component.html'
  // templateUrl: './add-fun.component.html',
  // styleUrls: ['./add-fun.component.css']
})
// @Injectable()
export class AddFunComponent implements OnInit {
  joke: Joke = { text: '', author: '' };
  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    // // public clientService: ClientService,
    // private arrJoks: string =  'Футболен коментатор - човек, който професионално ви пречи да гледате мача.'
    // private index: number
  ) {
    // let joks: Array<Joke>
    // let defJoke = {
    //   text: 'Футболен коментатор - човек, който професионално ви пречи да гледате мача.',
    //   author: 'programmer'
    // }
    // console.log('yes');
    // this.arrJoks = Array<string>();
    // this.arrJoks = (defJoke.text);
    // index++;
  }
  // private joks: Array<Joke>
  ngOnInit() {
    // let defJoke = {
    //   text:'Футболен коментатор - човек, който професионално ви пречи да гледате мача.',
    //   author: 'programmer'
    // }
    // this.joks.push(defJoke);
  }

  onSubmit({ value, valid }: { value: Joke, valid: boolean }) {
    // console.log(value);
    // console.log(valid);
    if (!valid) {
      this.flashMessagesService.show('Моля, все пак въведете шега!(поне 50 символа)', { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['joks/add']);
    } else {
      // this.arrJoks = (value.text);
      // console.log(this.arrJoks)
      this.flashMessagesService.show('Успешно добавихте нова шега', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['']);
    }
  }

  getJoke() {
    let joks = [
      'Футболен коментатор - човек, който професионално ви пречи да гледате мача.',
    `Из откровенията на мъж:
- Седя и гледам мач... Нашите вкарват гол, но не мога да изкрещя от радост, защото детето спи... Не мога и да пия, след час съм на работа... Излязох на терасата и тихо взех да развявам знамето...`,
`Изпращат треньора на националния ни отбор по футбол да проучи опита при тренировки на футболистите в Италия. След няколко дни той звъни и казва:
- Тук поставят 11 варела на игрището и тренират с тях. Направете го!
На другия ден се получава питане от България:
- Какво да правим? Варелите водят с 2:0?`,
`Мъж се прибира в къщи с няколко кенчета бира, чипс, снакс... и сяда развълнуван пред телевизора. Започва боксов мач, мъжът блажено разпечатва чипса, отваря си бира и хоп... нокаут в 12-тата секунда. Мъжът седи невярващо с парче чипс наполовина на пътя към зяпналата му уста. В този момент влиза жена му, схваща ситуацията и през зловещ смях казва:
- Ааааа, да видиш на мен как ми е като тръгнем да правим с*кс...`,
`Един футболен отбор играл ужасно и загубил катастрофално мача. След края на мача треньорът ги подхваща в съблекалнята:
- Всичко знам! Снощи сте се напили като свине! Кой организира запоя?
Тишина...
- Пак питам - кой предложи да се напиете?
Пак тишина.
- Добре, ще поставя въпроса по друг начин - кой пръв каза "и сега к'во"?`,
`Отбор слонове играе футболен мач срещу отбор мравки. Улисани в играта, един слон настъпва мравка от противниковия отбор и започва да и се извинява.
Мравката съвсем великодушно:
- О, колега, не се притеснявайте! Игра е, можеше да се случи и обратното`,
`– Скъпи, искам да забиеш гол в моята врата!
– Е, да, ама първо трябва да надуеш свирката за начало на мача...`,
`Двама разговарят:
- Жена ми все по често ме сравнява с националния по футбол.
- Издържаш две полувремена по 45 минути?
- Неее... Стигнах до финал през 94 г...`
    ]
    let rndIndex = Math.trunc(Math.random() * joks.length);
    // alert(rndIndex);
    // console.log(joks[0])
    return joks[rndIndex];
  }
}
