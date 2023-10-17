import { type } from "os";
import { Pessoa } from "./../A0034-interfaces/A0034-interfaces";

// Record
const objeto1: Record<string, string | number> = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
};
console.log(objeto1);

type PessoalProtocolo = {
  nome?: string;
  sobrenome?: string;
  idade?: 30;
};

// Required
type PessoaRequired = Required<PessoalProtocolo>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// Readolny
type PessoaREadonly = Readonly<PessoaRequired>;

//Pick
type PessalPick = Pick<PessoaRequired, "nome" | "sobrenome">;

const objeto2: PessoaRequired = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "sjdedhhe_nejnjendjende",
  nome: "Luiz",
  idade: 30,
  sobrenome: "miranda",
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountdata } = accountMongo;
  return { ...accountdata, id: _id };
}
const accountApi = mapAccount(accountMongo);
console.log("API");
console.log(accountApi);

//Module mode
export default 1;

//
