import java.io.*;

public class Solve {
  public static void main(String[] args) {
    StringBuilder ace = new StringBuilder("aaa");
    StringBuilder jack = new StringBuilder("aaa");
    StringBuilder queen = new StringBuilder("aaa");
    StringBuilder king = new StringBuilder("aaa");
    ace.setCharAt(0, (char) (ace.charAt(0) + 4));
    ace.setCharAt(1, (char) (ace.charAt(1) + 19));
    ace.setCharAt(2, (char) (ace.charAt(2) + 18));
    jack.setCharAt(0, (char) (jack.charAt(0) + 7));
    jack.setCharAt(1, (char) (jack.charAt(1) + 0));
    jack.setCharAt(2, (char) (jack.charAt(2) + 1));
    queen.setCharAt(0, (char) (queen.charAt(0) + 0));
    queen.setCharAt(1, (char) (queen.charAt(1) + 11));
    queen.setCharAt(2, (char) (queen.charAt(2) + 15));
    king.setCharAt(0, (char) (king.charAt(0) + 14));
    king.setCharAt(1, (char) (king.charAt(1) + 20));
    king.setCharAt(2, (char) (king.charAt(2) + 15));
    String password = "".concat(queen.toString()).concat(jack.toString()).concat(ace.toString()).concat(king.toString());
    
    System.out.println(password);
  }
}