Java.perform(function() {
  const Checker = Java.use("com.ad2001.frida0x7.Checker");
  Checker.$init.implementation = function(a, b) {
    this.$init(513, 513);
    console.log(a, b);
  }
})