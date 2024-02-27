Java.perform(function () {
  var hook = Java.use("com.ad2001.frida0x1.MainActivity");
  hook.get_random.implementation = function() {
    var random_number = this.get_random();

    console.log("Leak random: " + random_number); // hooking to leak data (or debug)
    console.log("Calculating correct answer: " + (random_number*2 + 4));

    return random_number; // just because `get_random` need a return value
  }
})