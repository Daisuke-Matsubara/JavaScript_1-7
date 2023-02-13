//Humanクラスを作成
class Human {
    constructor(name,height,weight,gender,age){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.age = age;
    }
}
//Humanクラスをインスタンス化
let yamada = new Human('yamada',170,60,'男',30);
let suzuki = new Human('suzuki',180,70,'男',35);
console.log(yamada.name,yamada.height,yamada.gender);
console.log(suzuki.age);