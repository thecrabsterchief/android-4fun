# Level 6

- Decompiled code (Remember the first time you enter this app?)

```java
[...]
// com.revo.evabs.DBLeak
    @Override // android.support.v7.app.AppCompatActivity, android.support.v4.app.FragmentActivity, android.support.v4.app.SupportActivity, android.app.Activity
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dbleak);
        String unseen = stringFromJNI();
        SQLiteDatabase coords = openOrCreateDatabase("MAINFRAME_ACCESS", 0, null);
        coords.execSQL("CREATE TABLE IF NOT EXISTS CREDS(admin VARCHAR, pass VARCHAR, access VARCHAR);");
        coords.execSQL("INSERT INTO CREDS VALUES('Dr.l33t', '" + unseen + "' , 'ADMIN');");
        coords.execSQL("INSERT INTO CREDS VALUES('Mr BufferOverflow', '0xNotSecureSQLite_', 'STAFF');");
        coords.execSQL("INSERT INTO CREDS VALUES('Ms HeapSpray', 'SQLite_expl0it', 'USER');");
        Cursor res = coords.rawQuery("SELECT * FROM CREDS", null);
        res.moveToPosition(2);
        final String uname1 = res.getString(0);
        final String access1 = res.getString(2);
        res.moveToPosition(1);
        final String uname2 = res.getString(0);
        final String access2 = res.getString(2);
        final TextView tvcreds1 = (TextView) findViewById(R.id.textViewdb1);
        final TextView tvcreds2 = (TextView) findViewById(R.id.textViewdb2);
        Button credsbutton = (Button) findViewById(R.id.buttonfetchcreds);
        credsbutton.setOnClickListener(new View.OnClickListener() { // from class: com.revo.evabs.DBLeak.1
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                TextView textView = tvcreds1;
                textView.setText("User: " + uname1 + ", Access: " + access1);
                TextView textView2 = tvcreds2;
                textView2.setText("User: " + uname2 + ", Access: " + access2);
            }
        });
        final TextView tvdbhint = (TextView) findViewById(R.id.textViewdbhint);
        Button buttondbhint = (Button) findViewById(R.id.buttondbhint);
        buttondbhint.setOnClickListener(new View.OnClickListener() { // from class: com.revo.evabs.DBLeak.2
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                tvdbhint.setText("Where are the SQLite DB files stored in an Android device?");
            }
        });
    }
[...]
```

=> `flag` is stored at `/data/data/com.revo.evabs/databases/MAINFRAME_ACCESS` (sqlite database). So we can pull that file to local machine and use `sqlite3` to read it

```shell
adb.exe pull /data/data/com.revo.evabs/databases/MAINFRAME_ACCESS ./
sqlite3.exe .\MAINFRAME_ACCESS
SQLite version 3.45.1 2024-01-30 16:01:20 (UTF-16 console I/O)
Enter ".help" for usage hints.
sqlite> .tables
CREDS             android_metadata
sqlite> select * from CREDS;
Dr.l33t|EVABS{sqlite_is_not_safe}E|ADMIN
Mr BufferOverflow|0xNotSecureSQLite_|STAFF
Ms HeapSpray|SQLite_expl0it|USER
sqlite> .exit
```

- Flag: `EVABS{sqlite_is_not_safe}`