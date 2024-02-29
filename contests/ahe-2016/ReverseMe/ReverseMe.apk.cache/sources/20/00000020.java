package de.ecspride.reverseme;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import o.iepainai;
import o.ohghitha;

/* loaded from: classes.dex */
public class MainActivity extends iepainai {
    protected boolean ahhievee;

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // o.iepainai, o.zuimairi, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        new Thread(new ohghitha(this)).start();
        setContentView(R.layout.activity_main);
        try {
            Class.forName("o.vaehekua").getMethod("weicighi", Context.class).invoke(null, this);
        } catch (Throwable th) {
            try {
                throw th.getCause();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override // android.app.Activity
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override // android.app.Activity
    public boolean onOptionsItemSelected(MenuItem menuItem) {
        if (menuItem.getItemId() == R.id.action_settings) {
            return true;
        }
        return super.onOptionsItemSelected(menuItem);
    }

    public void Clicked(View view) {
        try {
            Class.forName("o.vaehekua").getMethod("weicighi", Activity.class).invoke(null, this);
        } catch (Throwable th) {
            throw th.getCause();
        }
    }
}