/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = "Luiz";

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace("José");

  export namespace OutroNamespace {
    export const nomeDoNamespace = "Novo";
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace("João");
const constDoNamespace = "Const do Namespace";
