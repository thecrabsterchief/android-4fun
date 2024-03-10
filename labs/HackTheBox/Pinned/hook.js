Java.performNow(function() {
  Java.choose("com.example.pinned.MainActivity", {
    onMatch: function(ins) {
      console.log(ins.o.value);
    },
    onComplete: function(){}
  })
})