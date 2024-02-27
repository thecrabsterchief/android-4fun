var addr = new NativePointer(
  Module.findBaseAddress("libfrida0xa.so").add(0x206B0)
)
const func = new NativeFunction(addr, 'void', ['int', 'int']);
func(0, 3);