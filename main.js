//Humanクラスを作成
class Taiyaki {
    constructor(nakami){
        this.nakami = nakami;
    }

    Nakami(){
        console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.Nakami();
cream.Nakami();
cheese.Nakami();