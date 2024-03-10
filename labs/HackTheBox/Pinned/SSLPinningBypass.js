Java.perform(function() {
  try {
    // Step 1: Push burp.der to /data/local/tmp then load it
    console.log("[+] Loading our CERT")
    const FileInputStream = Java.use("java.io.FileInputStream");
    const BufferedInputStream = Java.use("java.io.BufferedInputStream");
    const CertificateFactory = Java.use("java.security.cert.CertificateFactory");
    const X509Certificate = Java.use("java.security.cert.X509Certificate");
    
    var cert_file = FileInputStream.$new("/data/local/tmp/burp.der");
    var cert_stream = BufferedInputStream.$new(cert_file);
    var cert_factory = CertificateFactory.getInstance("X.509").generateCertificate(cert_stream);
    cert_stream.close();
  
    var certInfo = Java.cast(cert_factory, X509Certificate);
    console.log("[o] Our CA Info: " + certInfo.getSubjectDN());

    // Step 2: Create a KeyStore containing our burp.der
    const KeyStore = Java.use("java.security.KeyStore");

    var ks = KeyStore.getInstance(KeyStore.getDefaultType());
    ks.load(null, null);
    ks.setCertificateEntry("Self signed certificate", cert_factory);

    // Step 3: Create a TrustManager that trusts burp.der in our KeyStore
    const TrustManagerFactory = Java.use("javax.net.ssl.TrustManagerFactory");
    
    var tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
    tmf.init(ks);

    // Step 4: Hooking SSLContext to force it using our TrustManagerFactory
    const SSLContext = Java.use("javax.net.ssl.SSLContext");

    SSLContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom").implementation = function(a, b, c) {
      console.log("[+] Hooked javax.net.ssl.SSLContext.init to bypass SSL pinning");
      SSLContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom").call(this, a, tmf.getTrustManagers(), c);
    }

  } catch (error) {
    console.log("[!] " + error);    
  }
})