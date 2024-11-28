//if-else

let sicaklik = 15;

if (sicaklik > 30) {
  console.log("Hava çok sıcak, güneş kremi kullanmayı unutma!");
} else if (sicaklik >= 20 && sicaklik <= 30) {
  console.log("Hava güzel, dışarı çıkmanın tam zamanı.");
} else if (sicaklik >= 10 && sicaklik < 20) {
  console.log("Güneş var ama hava serin, yanına bir ceket almayı unutma.");
} else if (sicaklik >= 0 && sicaklik < 10) {
  console.log("Soğuk bir gün, sıcak çikolata içerek keyif yapabilirsin!");
} else {
  console.log(
    "Hava dondurucu, kalın giyin ve mümkünse dışarıda fazla zaman geçirme."
  );
}

// Operatör kısmı
let sayi1 = 6;
let sayi2 = 35;

let toplam = sayi1 + sayi2;
let fark = sayi1 - sayi2;
let carpim = sayi1 * sayi2;
let bolum = sayi1 / sayi2;
let mod = sayi1 % sayi2;

console.log("Toplam: " + toplam);
console.log("Fark: " + fark);
console.log("Çarpım: " + carpim);
console.log("Bölüm: " + bolum);
console.log("Mod: " + mod);

// For Döngüsü ile 1'den 10'a kadar yazdırma
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
