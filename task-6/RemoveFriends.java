
import java.io.IOException;

class TestClass {

    static class Node {
        int i;
        Node n, p = null;
    }

    static int getInt() throws IOException {
        boolean found = false;
        int num = 0;
        while (true) {
            int b = System.in.read();
            if (b >= '0' && b <= '9') {
                num = num * 10 + b - '0';
                found = true;
            } else {
                if (found)
                    break;
            }
        }
        return num;
    }

    static void printlist(Node r) {
        System.out.print(">>>>>> ");
        while (r != null) {
            System.out.print(r.i + " ");
            r = r.n;
        }
        System.out.println();
    }

    public static void main(String args[]) throws Exception {

        int noOfTestcases = getInt();

        for (int i = 0; i < noOfTestcases; i++) {
            int noOfFrds = getInt();
            int noOfFrdsToDel = getInt();
            Node frdsPopularity = new Node();
            Node c = frdsPopularity;
            for (int j = 0; j < noOfFrds; j++) {
                c.n = new Node();
                c.n.i = (byte) getInt();
                c.n.p = c;
                c = c.n;
            }
            int deleted = 0;
            for (c = frdsPopularity; deleted < noOfFrdsToDel && c.n != null && c.n.n != null;) {

                if (c.n.i < c.n.n.i) {
                    deleted++;
                    Node d = c.n;
                    c.n = d.n;
                    d.n.p = c;
                    if (c.p != null)
                        c = c.p;
                    d.p = d.n = null;
                } else {
                    c = c.n;
                }
            }
            for (c = frdsPopularity.n; c != null; c = c.n) {
                System.out.print(c.i);
                if (c.n != null)
                    System.out.print(" ");
            }
            System.out.println();
        }
    }
}
