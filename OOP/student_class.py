class Student():
    def check_if_passed(self):
        if self.marks >= 40:
            return "Passed"
        else:
            return "Failed!"

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

student1 = Student("Rytchie", 85)
student2 = Student("Janet", 20)



print(student1.name)
print(student1.marks)
did_pass = student1.check_if_passed()
print(did_pass)
print(student2.name)
print(student2.marks)
did_pass = student2.check_if_passed()
print(did_pass)