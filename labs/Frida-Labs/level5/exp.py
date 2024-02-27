import frida

if __name__ == "__main__":
  device = frida.get_usb_device(10)
  pid = device.spawn(["com.ad2001.frida0x5"])
  device.resume(pid)
  session = device.attach(pid)
  
  with open("./hook.js", "r") as f:
    exp = session.create_script(f.read())
  
  exp.load()