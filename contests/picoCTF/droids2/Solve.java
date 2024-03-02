import java.io.*;

public class Solve {
  public static void main(String[] args) {
    String[] witches = {"weatherwax", "ogg", "garlick", "nitt", "aching", "dismass"};
    int second = 3 - 3;
    int third = (3 / 3) + second;
    int fourth = (third + third) - second;
    int fifth = 3 + fourth;
    int sixth = (fifth + second) - third;
    String password = "".concat(witches[fifth]).concat(".").concat(witches[third]).concat(".").concat(witches[second]).concat(".").concat(witches[sixth]).concat(".").concat(witches[3]).concat(".").concat(witches[fourth]);
    
    System.out.println("password: " + password);
  }
}