import React from "react";
import "./styles.css";

// const add = (n1: number, n2: number, msg: string, flg: boolean) => {
//   if (flg) {
//     const sum = n1 + n2;
//     return msg + sum;
//   }
//   return false;
// };

// let num1 = 1;
// let num2 = 2;
// let msg = "合計は、";
// let flg = true;

// const result = add(num1, num2, msg, flg);

// console.log(result);
// console.log(typeof result);

// let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
// let list3: Array<number | string> = [1, "hello", 2];
// let list4: Array<any> = [1, true, "hello"];

// let tuple: [string, number];
// tuple = ["hello", 10];
// // tuple = [10, 'hello'];

// const obj: {
//   foo: number;
//   bar: string;
//   hoge: number[];
//   fuga: { foo: number; bar: boolean };
// } = {
//   foo: 1,
//   bar: "2",
//   hoge: [1, 2, 3],
//   fuga: {
//     foo: 1,
//     bar: false
//   }
// };

// let a: number | string | boolean;

// a = 1;
// a = "hello";
// a = true;

// let b: any;
// b = 1;
// b = "2";
// b = true;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHER = 2;

// enum Role {
//   ADMIN = 1,
//   READ_ONLY,
//   AUTHER = "書き込み"
// }
// const userA = {
//   id: 0,
//   name: "Yamada",
//   type: Role.ADMIN
// };

// const userB = {
//   id: 1,
//   name: "Satou",
//   type: Role.AUTHER
// };

// console.log(userA.type);
// console.log(userB.type);

// console.log(Role[userA.type]);

// エラー発生
// namespace Role {
//   export function toMessageKey(role: Role) {
//     switch (role) {
//       case Role.ADMIN:
//         return "管理者ユーザーです。";
//       case Role.AUTHER:
//         return "書き込み専門です。";
//     }
//   }
// }
// console.log(Role.toMessageKey(userA.type));

// 10
// 'hello'
// true false

// let a: "hello" = "hello";
// a = "こんにちは";

// let number: 10 = 10;

// let boolean: true = true;

// type Name = string;
// let firstName: Name = "太郎";
// let lastName: Name = "山田";

// type Password = string | number;
// let password: Password = "eefrfg44";

// type User = { id: number; name: string };
// const user: User = {
//   id: 1,
//   name: "yamada"
// };

// const area = (height: number, width: number, unit: string): string => {
//   return height * width + unit;
// };
// console.log(area(10, 20, "cm"));

// const sum = (num1: number, num2: number): void => {
//   console.log(num1 + num2);
//   return undefined;
// };

// sum(1, 2);

// const showError = (msg: string): never => {
//   throw new Error(msg);
// };
// // showError("エラーが発生しました。");

// let func: (msg: string) => never;

// func = showError;
// func("error");

// abstract class User {
//   constructor(protected name: string, private age: number) {}
//   getName(): string {
//     return this.name;
//   }
// }
// const user = new User("yamada", 42);

// // console.log(user.getName());

// class SuperUser extends User {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   changeName(): void {
//     this.name = "root";
//   }
// }

// const superUser = new SuperUser("saito", 30);
// console.log(superUser);
// superUser.changeName();
// console.log(superUser);

interface User {
  name: string;
  age?: number;
  sayHi(): string;
}

const user: User = {
  name: "yamada",
  //age: 32,
  sayHi() {
    return "こんにちは";
  }
};

console.log(user.sayHi());

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
