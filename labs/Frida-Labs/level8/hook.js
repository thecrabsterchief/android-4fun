var strcmp_adr = Module.findExportByName("libc.so", "strcmp");
Interceptor.attach(strcmp_adr, {
    onEnter: function (args) {
        var src = Memory.readUtf8String(args[0]);
        var des = Memory.readUtf8String(args[1]);
        if (src.includes("HookingNative")) {
          console.log("This is Flag: " + des)
        }
    },
    onLeave: function (retval) {}
});