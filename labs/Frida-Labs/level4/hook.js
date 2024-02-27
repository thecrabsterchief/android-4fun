Java.perform(function() {
  const hook = Java.use("com.ad2001.frida0x4.Check");

  var Check = hook.$new(); // `get_flag` isn't static method, so we must create an instance first, before calling it!
  var flag = Check.get_flag(1337);
  console.log("Flag: " + flag);
})