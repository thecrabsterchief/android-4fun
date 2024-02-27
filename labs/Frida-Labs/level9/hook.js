var check_flag_adr = Module.findExportByName(
  "liba0x9.so", 
  "Java_com_ad2001_a0x9_MainActivity_check_1flag"
);
Interceptor.attach(check_flag_adr, {
    onEnter: function (args) {},
    onLeave: function (retval) {
      retval.value = 1337;
    }
});