
public class Person {

    private String name;
    private int age;
    private String email;

    // No-argument constructor
    public Person() {
    }

    // All-arguments constructor
    public Person(String name, int age, String email) {
        this.name = name;
        setAge(age);
        setEmail(email);
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for age with validation
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age < 0 || age > 150) {
            System.out.println("Invalid age: " + age);
            return;
        }
        this.age = age;
    }

    // Getter and Setter for email with validation
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email == null || !email.contains("@")) {
            System.out.println("Invalid email: " + email);
            return;
        }
        this.email = email;
    }

    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }

    // Main method for demonstration
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.setName("Alice");
        p1.setAge(28);
        p1.setEmail("alice@email.com");
        System.out.println(p1);

        Person p2 = new Person("John", 25, "john@email.com");
        p2.setAge(30);
        System.out.println(p2);

        p2.setAge(200);
        p2.setEmail("invalidEmail");
    }
}
