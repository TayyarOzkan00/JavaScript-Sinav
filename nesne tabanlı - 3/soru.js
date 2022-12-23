function Soru(sorumetni , cevapsecenkleri , dogruCevap) {
    this.sorumetni = sorumetni;
    this.cevapsecenkleri = cevapsecenkleri;
    this.dogruCevap = dogruCevap ;
 }


 Soru.prototype.cevebıKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}
let sorular = [
    new Soru("1-hangisi takım değildir ?",{ a : "gs",b : "fb", d : "eti"}, "d"),
    new Soru("2-hangisi takım dseğildir ?",{ a : "gs",b : "fb",c : "ts",d : "eti"}, "b"),
    new Soru("3-hangisi takım değildir ?",{ a : "gs",b : "fb",c : "ts",d : "eti"}, "a"),
    new Soru("4-hangisi takım değildir ?",{ a : "gs",b : "fb",c : "ts",d : "eti"}, "b"),
    new Soru("5-hangisi takım değildir ?",{ a : "gs",b : "fb",c : "ts",d : "eti"}, "c"),
    new Soru("6-hangisi takım değildir ?",{ a : "gs",b : "fb",c : "ts",d : "eti"}, "d")
];
