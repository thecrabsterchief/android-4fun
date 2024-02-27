// find MainActivity instance
Java.performNow(function() {
  Java.choose("com.ad2001.frida0x7.MainActivity", {
    onMatch: function(MainActivity) {
      // find Checker instance
      Java.performNow(function() {
        Java.choose("com.ad2001.frida0x7.Checker", {
          onMatch: function(Checker) {
            Checker.num1.value = 513;            
            Checker.num2.value = 513;
            MainActivity.flag(Checker);            
          },
          onComplete: function() {}
        })
      })
    },
    onComplete: function() {}
  })
})