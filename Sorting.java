import java.util.Scanner;
import java.util.Arrays;

public class Sorting {    
    public static void main(String[] args) {        
            
        //Input array 
        Scanner s = new Scanner(System.in);
        System.out.print("Masukkan jumlah elemen yg ada di dalam array:");
        int n = s.nextInt();
        int arr[] = new int[n];
        System.out.println("Masukkan semua elemennya:");
        for(int i = 0; i < n; i++)
        {
            arr[i] = s.nextInt();
        }

        //Sort the array in ascending order
        int temp = 0;
        int swap = 0;
        for (int i = 0; i < arr.length; i++) {     
            for (int j = i+1; j < arr.length; j++) {   
               if(arr[i] > arr[j]) {    
                   temp = arr[i];    
                   arr[i] = arr[j];    
                   arr[j] = temp;
                   System.out.println("[" + temp + "," + arr[i] + "] -> " + Arrays.toString(arr));
                   swap++;
               }     
            }     
        }
        System.out.println();
        System.out.println("Jumlah swap: " + swap);

    }    
}    
