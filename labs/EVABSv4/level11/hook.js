Java.performNow(function() {
  Java.choose("com.revo.evabs.CustomAccess", {
    onMatch: function(CustomAccess) {
      console.log("Flag: EVABS{" + CustomAccess.stringFromJNI() + "}");
    },
    onComplete: function(){}
  })
})