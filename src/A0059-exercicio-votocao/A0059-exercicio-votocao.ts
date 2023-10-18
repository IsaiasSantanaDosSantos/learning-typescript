type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votetionIndex: number): void {
    if (!this._votationOptions[votetionIndex]) return;
    this._votationOptions[votetionIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votatitionOption of votation.votationOptions) {
        console.log(votatitionOption.option, votatitionOption.numberOfVotes);
      }
      console.log("###");
      console.log("");
    }
  }
}

const votation1 = new Votation("Qual a sua linguagem de programação favorita?");
votation1.addVotationOption({ option: "Paython", numberOfVotes: 0 });
votation1.addVotationOption({ option: "Javascript", numberOfVotes: 0 });
votation1.addVotationOption({ option: "Typescript", numberOfVotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation("Qual a sua cor favorita?");
votation2.addVotationOption({ option: "Rosa", numberOfVotes: 0 });
votation2.addVotationOption({ option: "Amarelo", numberOfVotes: 0 });
votation2.addVotationOption({ option: "Vermelho", numberOfVotes: 0 });
votation2.addVotationOption({ option: "Roxo", numberOfVotes: 0 });
votation2.addVotationOption({ option: "Verde", numberOfVotes: 0 });

votation2.vote(4);
votation2.vote(1);
votation2.vote(3);
votation2.vote(0);
votation2.vote(2);
votation2.vote(4);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();

//
