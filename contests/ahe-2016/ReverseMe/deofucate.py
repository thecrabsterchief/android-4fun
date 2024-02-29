ohchevee = [30, 24, -124, 119, -1, 14, 0, -2, -14, 3, 8, -4, -8, -50, -14, 6, -18, 5, 16, -8, -4, 11, -5, 2, 13, -9, 7, 18, -16, -18, 5, -12, 11, -13, 4, 7, 6, 55, -72, 15, 6, -2, 3, -14, 71, -37, -26, 15, -17, 0, -43, -2, 1, 14, 3, -16, 10, -20, 22, 52, -58, -5, 66, -23, -34, -2, 8, -26, 4, 2, 8, 58, 1, 1, -2, 15, -2, 34, -40, 12, -17, 1, 6, 29, -32, 3, 10, -4, 8, 3, -14, 50, -40, 12, -17, 1, 4, -10, -9, 14, -1, 62, -68, -5, 7, 0, 16, -7, 64, -21, -32, -18, 54, -40, 12, -17, 1, 40, -34, 15, -2, 0, -12, -14, 14, 5, -18, 16, 18, -16, -7, -2, 43, -34, -2, 8, 12, -6, -7, 0, -6, 8, -14, 16, 4, -9, 0, 47, -34, -2, 8, -13, 3, -14, 52, -32, -16, 5, 4, -8, 2, 16, 22, -16, -18, 13]
thaesaem = 0

def weicighi(i, i2, i3):
  bArr = ohchevee
  i4 = 151 - i;
  i5 = 28 - i3;
  i6 = 0;
  i7 = i2 + 46;
  bArr2 = [0 for _ in range(i5)]
  i8 = i5 - 1
  if (bArr == []):
    i7 = i8 + (-i7) + 1
  while True:
    i4 += 1
    bArr2[i6] = i7%256;
    if (i6 == i8):
      return bytes(bArr2).decode()
    i6 += 1
    i7 += -bArr[i4] + 1

if __name__ == "__main__":
  import re

  i = thaesaem | 70
  i2 = thaesaem | 63
  i3 = thaesaem | 70
  i4 = -ohchevee[109]
  i5 = thaesaem
  i6 = thaesaem | 19
  b = ohchevee[37]

  with open("./obfuscated_code.txt", "r") as f:
    code = f.read()
    matches = re.findall(r"weicighi\([^)]*\)", code)
    
    for c in matches:
      try:
        code = code.replace(c, f"\"{eval(c)}\"")
      except:
        pass
    
    print(code)