 var mobil = {
     type: "Sport",
     model: "c8",
     color: "black",
     
     start: function(x) {
        console.log("Menghidupkan Mesin");

        var berhenti = x;
        return berhenti;
    },
     drive: function() {
         console.log('Menjalankan Mobil');
     },
     brake: function () {
         console.log('Meng-rem Mobil');
     },
     stop: function() {
         console.log('Memberhentikan Mesin');
     },
 };

console.log(mobil.type); 
console.log(mobil.model);
console.log(mobil.color);

console.log('==============');

 mobil.start();
 mobil.drive();
 mobil.brake();
 mobil.stop();
 var mematikan = mobil.start("Mematikan Mobil");
 console.log(mematikan);