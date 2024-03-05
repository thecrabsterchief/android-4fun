function __hook_SecretKeySpec() {
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");

  SecretKeySpec.$init.overload("[B", "java.lang.String").implementation = function(key, algo) {
    console.log(`${algo} Key:`, key);
    
    return this.$init(key, algo);
  }
}

function __hook_IvParameterSpec() {
  const IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");

  IvParameterSpec.$init.overload("[B").implementation = function(iv) {
    console.log("IV:", iv);

    return this.$init(iv);
  }
}

Java.perform(function() {
  __hook_SecretKeySpec();
  __hook_IvParameterSpec();
})