Java.performNow(function() {
  Java.choose("com.ad2001.frida0x6.MainActivity", {
    onMatch: function(instance) {
      // create `Checker` instance:
      //    Checker.num1 = 1234 
      //    Checker.num2 = 4321
      var Checker = Java.use("com.ad2001.frida0x6.Checker")
      var A = Checker.$new();
      A.num1.value = 1234;
      A.num2.value = 4321;
      
      // call `MainActivity.get_flag(A)`
      instance.get_flag(A);
    },
    onComplete: function(){}
  })
})