class Polygon:
    def __init__(self, sides):
        self.sides = sides

    def display_info(self):
        print("A polygon is a two dimensional shape with staight lines")

    def get_perimeter(self):
        perimeter = sum(self.sides)
        return perimeter

class Triangle(Polygon):
    def display_info(self):
        print("A triangle is a Polygon with three sides")

class Quadrilateral:
    def display_info(self):
        print("A Quadrilateral is Polygon with four sides")

t1 = Triangle([5,6,7])
perimeter = t1.get_perimeter()
print("The perimeter is: ",perimeter)
t1.display_info()

