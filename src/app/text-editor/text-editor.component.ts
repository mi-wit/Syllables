import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { hyphenate, hyphenateSync } from 'hyphen/pl';
import { defer, from, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy {

//   plText: string = `Warta Zawiercie klub piłkarski
// z Zawiercia założony w 1921 roku
// z inicjatywy Seweryna Gębarskiego 
// oraz Władysława Millera po tym,
// jak w Zawierciu Anglicy rozpropagowali piłkę nożną.
// Rozgrywki ligowe zespół rozpoczął w 1922 roku w klasie C,
// w 1927 roku awansował do klasy B, a dwa lata później do klasy A.
// W latach 1930 oraz 1932 Warta Zawiercie zdobywała mistrzostwo okręgu kieleckiego klasy A, uzyskując prawo do gry w barażach o Ligę.
// W obu sezonach klub odpadał w pierwszej rundzie baraży,
// zajmując ostatnie miejsce w tabeli.
// W trakcie II wojny światowej zespół zawiesił działalność,
// a po wojnie został reaktywowany z inicjatywy przedwojennego zawodnika klubu,
// Mariana Merty. W latach 70. i 80.
// Warta Zawiercie grała na czwartym i piątym poziomie rozgrywek.
// W 1980`
//   enText: string = `This is a text hyphenation library,
// based on Franklin M. Liang's hyphenation algorithm.
// In core of the algorithm lies a set of hyphenation patterns.
// They are extracted from hand-hyphenated dictionaries.
// Patterns for this library were taken from ctan.org and ported to Javascript.`;
  lines: string[] = [];
  numberOfSyllables: number[] = [];

  text = new FormControl('');
  spellcheck: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnInit(): void {

    this.calculateSyllables(this.text.value);
    
    this.text.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (value: string) => this.calculateSyllables(value)
    );

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private calculateSyllables(text: string): void {
    this.numberOfSyllables = [];
    this.lines = text.split(/\r?\n/);
    
    this.lines.forEach(
      line => {
        if (line.trim().length > 1) {
          this.numberOfSyllables.push(hyphenateSync(line, {hyphenChar: "-"}).split(/-| /).length);
          console.log(hyphenateSync(line, {hyphenChar: "-"}).split(/-| /));
        } else {
          this.numberOfSyllables.push(0);
        }
      }
    );
  }
}
