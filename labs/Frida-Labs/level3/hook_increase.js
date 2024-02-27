Java.perform(function() {
  const hook = Java.use("com.ad2001.frida0x3.Checker");
  
  for (let i=0; i<256; i++) {
    console.log("Calling Checker.increase() " + i + " times");
    hook.increase(); // Call Check.increase() 256 times to set static value: `Checker.code = 512`
  }
})