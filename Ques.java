public class Ques

{

    public static void main(String[] args) {

        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };

        int n = 7;

        func1(arr, 2, n);

        for (int i = 0; i < arr.length; i++) {

            System.out.print(arr[i] + " ");

        } // Prints arr & n

        //return 0;

    }

    static void func2(int arr[], int n)

    {

        int temp = arr[0], i;

        for (i = 0; i < n - 1; i++)

            arr[i] = arr[i + 1];

        arr[n - 1] = temp;
        System.out.println(arr);

    }

    static void func1(int arr[], int d, int n)

    {

        for (int i = 0; i < d; i++)

            func2(arr, n);

    }

}