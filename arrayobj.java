import java.util.*;
class Student{
    int id,maths,phy,chem,totalmarks;
    String name;

}
class Trial{
    public static void main(String args[]){
    System.out.println("Enter the n");
    Scanner sc= new Scanner(System.in);
    int n=sc.nextInt();
    Student s[]=new Student[n];
    for(int i=0;i<s.length;i++){
        s[i]=new Student();
        System.out.println("Enter the name of student "+(i+1));
        s[i].name=sc.nextLine();
        System.out.println("Enter the id");
        s[i].id=sc.nextInt();
        System.out.println("Enter the maths marks");
        s[i].maths=sc.nextInt();
        System.out.println("Enter the phy marks");
        s[i].phy=sc.nextInt();
        System.out.println("Enter the chem marks");
        s[i].chem=sc.nextInt();
        s[i].totalmarks=s[i].maths+s[i].phy+s[i].chem;

    }
    // bubble sort
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            if(s[j].totalmarks<s[j+1].totalmarks){
                Student temp= s[j];
                s[j]=s[j+1];
                s[j+1]=temp;
            }
        }
    }
    for(int i=0;i<n;i++){
        System.out.println("Name :- "+s[i].name+" Marks = "+s[i].totalmarks);
    }

    }
}
