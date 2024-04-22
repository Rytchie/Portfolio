class Complex:
    def __init__(self, real, image):
        self.real = real
        self.image = image

    def add(self, number):
        real = self.real + number.real
        image = self.image + number.real
        result = Complex(real, image)
        return result

n1  = Complex(5, 6)
n2 = Complex(-5, 2)
result = n1.add(n2)
print(result.real)
print(result.image)