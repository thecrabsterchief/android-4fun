Java.performNow(function() {
  Java.choose("com.revo.evabs.Frida1", {
    onMatch: function(Frida1) {
      console.log("Flag: " + Frida1.stringFromJNI());
    },
    onComplete: function(){}
  })
})