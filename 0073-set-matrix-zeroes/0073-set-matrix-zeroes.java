import java.util.*;

class Solution {
    public void setZeroes(int[][] matrix) {
        Set<String> zeroSet = new HashSet<>();

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) {
                    zeroSet.add(i + " " + j);
                }
            }
        }

        for (String coord : zeroSet) {
            String[] parts = coord.split(" ");
            int row = Integer.parseInt(parts[0]);
            int col = Integer.parseInt(parts[1]);

            for (int j = 0; j < matrix[0].length; j++) {
                matrix[row][j] = 0;
            }

            for (int i = 0; i < matrix.length; i++) {
                matrix[i][col] = 0;
            }
        }
    }
}
