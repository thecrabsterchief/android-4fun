function __hook_IvParameterSpec() {
  const IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");

  IvParameterSpec.$init.overload("[B").implementation = function(iv) {
    console.log("IV:", iv);

    return this.$init(iv);
  }
}