from base64 import b64decode as dc
from Crypto.Cipher import AES

ct  = dc("Tq+CWzQS0wYzs2rJ+GNrPLP6qekDbwze6fIeRRwBK2WXHOhba7WR2OGNUFKoAvyW7njTCMlQzlwIRdJvaP2iYQ==")
key = b"!A%D*G-KaPdSgVkY"

print(AES.new(key, AES.MODE_ECB).decrypt(ct))