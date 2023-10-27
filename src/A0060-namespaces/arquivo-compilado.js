/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = "Luiz";
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace("José");
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = "Novo";
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace("João");
var constDoNamespace = "Const do Namespace";
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/modules.ts"/>
console.log(MeuNamespace.nomeDoNamespace);
console.log(constDoNamespace);
/*
Comando para compilar um arquivo ts em outro js
npx tsc src/A0060-namespaces/index.ts --outFile src/A0060-namespaces/arquivo-compilado.j
*/
