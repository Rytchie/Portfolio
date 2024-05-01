class Triangle:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def perimeter(self):
        a = self.a
        b = self.b
        c = self.c
        result = a + b + c
        return result
a = float(input("Enter the length of side a: "))
b = float(input("Enter the length of side b: "))
c = float(input("Enter the length of side c: "))

triangle1 = Triangle(a, b, c)

get_perimeter = triangle1.perimeter()

print("The perimeter is: ", get_perimeter)