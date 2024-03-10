Java.performNow(function() {
  Java.choose("com.example.apkrypt.MainActivity", {
    onMatch: function(ins) {
      var flag = ins.decrypt("k+RLD5J86JRYnluaZLF3Zs/yJrVdVfGo1CQy5k0+tCZDJZTozBWPn2lExQYDHH1l");
      console.log("\n[+] Flag: " + flag);
    },
    onComplete: function(){}
  })
})