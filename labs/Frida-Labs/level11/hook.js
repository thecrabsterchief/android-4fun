var addr = Module.findBaseAddress("libfrida0xb.so").add(0x170CE);
const writer = new X86Writer(addr); // Use Arm64Writer if your Device's arch is ARM
Memory.protect(addr, 0x6, "rwx");

try {
  // Insert instructions
  for (let i=0; i<6; ++i) {
    writer.putNop();
  }
  // Flush the changes to memory
  writer.flush();

} finally {
  // Dispose of the X86Writer to free up resources
  writer.dispose();
}