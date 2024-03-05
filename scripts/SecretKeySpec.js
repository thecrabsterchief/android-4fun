function __hook_SecretKeySpec() {
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");

  SecretKeySpec.$init.overload("[B", "java.lang.String").implementation = function(key, algo) {
    console.log(`${algo} Key:`, key);
    
    return this.$init(key, algo);
  }
}