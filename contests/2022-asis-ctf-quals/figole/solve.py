from Crypto.Cipher import AES
from base64 import *

key = bytes([53,54,50,49,52,53,57,54,56,55,52,54,53,50,51,49])
iv  = bytes([115,101,99,114,101,116,97,114,105,97,116,49,53,54,50,48])

ct  = b64decode("7mePfqpM6Wd1El2sj4dlUboU6PieF7La8IJ1e76cfp4=")
cp  = AES.new(key, AES.MODE_CBC, iv)
print(cp.decrypt(ct))