package poly;

public class ShapeTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		Shape[] shapes = {
	            new Circle(5),
	            new Rectangle(4, 6),
	            new Triangle(3, 4, 3, 4, 5)
	        };

	        for (Shape s : shapes) {
	            s.displayInfo();   
	        }

	}

}