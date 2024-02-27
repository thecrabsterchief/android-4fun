Java.perform(function () {
  var hook = Java.use("com.ad2001.frida0x1.MainActivity");
  hook.check.overload('int', 'int').implementation = function(a, b) {
    console.log("args[0]: " + a);
    console.log("args[1]: " + b);
    
    // hardcode args to bypass this check: `if (a*2 + 4 == b)`
    this.check(4, 12);
  }
})